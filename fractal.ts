import { SVG, Point, PointArray } from '@svgdotjs/svg.js'

// square fractal:
// - start with a square
// - each shape can be:
//   + square
//     * square inside
//     * split into two triangles two ways
//     * leave empty
//   + triangle
//     * triangle inside
//     * split into "T": triangle and two ~rhombus'
//   + rhombus
//     * leave empty
//
// so we either:
//   1. take the input (N) as a mixed-base seed
//   2. pick randomly each step
//
// two lists:
// - non-done queue (triangle | square)
// - done queue (triangle | square | ~rhombus)
//
// finally, render triangle|square|rhombus -> SVG

abstract class Shape {
  abstract midpoint_weight: number | null;

  midpoint(xs: Point, ys: Point): Point {
    if (this.midpoint_weight) {
      return new Point({
        x: this.midpoint_weight * xs.x + (1 - this.midpoint_weight) * ys.x,
        y: this.midpoint_weight * xs.y + (1 - this.midpoint_weight) * ys.y,
      })
    } else {
      return new Point({
        x: (xs.x + ys.x) / 2,
        y: (xs.y + ys.y) / 2,
      })
    }
  }

  abstract render(): Point[];

  abstract rotate(): void;

  abstract step_options(uniform_weights: boolean): number;

  abstract next_step(index: number, uniform_weights: boolean): Shape[];

  render_pointarray(): PointArray {
    return new PointArray(this.render().flatMap((pt) => {return [pt.x, pt.y]}));
  }

  // returns the number of sub-shapes drawn
  fractalize(
    max_depth: number,
    pixel_size: number,
    pixel_size_height: number | null, // if not null, the height, else pixel_size is the height
    stroke_width: number,
    uniform_weights: boolean,
    // border_pixels: number, // TODO ?
  ): number {
    var draw = SVG().addTo('body').size(pixel_size, pixel_size_height || pixel_size);
    draw.polyline(this.render_pointarray()).fill('none').stroke({ color: '#000', width: stroke_width });

    // [shape, depth]
    var num_sub_shapes = 0;
    var unfinished_shapes: [Shape, number][] = [[this, 0]];
    while (unfinished_shapes.length) {
      let [current_shape, current_depth] = unfinished_shapes.pop();
      num_sub_shapes++;
      draw.polyline(current_shape.render_pointarray()).fill('none').stroke({ color: '#000', width: stroke_width });

      if (current_depth <= max_depth) {
        let next_random_num = crypto.getRandomValues(new Uint32Array(1))[0]/2**32;
        let max = current_shape.step_options(uniform_weights);
        let next_step_index = Math.floor(next_random_num * max);
        unfinished_shapes.push(...current_shape.next_step(next_step_index, uniform_weights).map((x) => {
          let ret: [Shape, number] = [x, current_depth + 1];
          return ret
        }));
      }
    }

    return num_sub_shapes
  }

}


class Triangle extends Shape {
  midpoint_weight: number | null;
  pt0: Point;
  pt1: Point;
  pt2: Point;

  constructor(pt0: Point, pt1: Point, pt2: Point, midpoint_weight: number | null) {
    super();
    this.pt0 = pt0;
    this.pt1 = pt1;
    this.pt2 = pt2;
    this.midpoint_weight = midpoint_weight;
  }

  render() {
    return [this.pt0, this.pt1, this.pt2]
  }

  rotate() {
    let points = [this.pt0, this.pt1, this.pt2];
    [this.pt1, this.pt2, this.pt0] = points;
  }

  // p0
  // |\
  // | \
  // |  \
  // |   \
  // | A  \
  // |     \
  // |<p20__\ <p01
  // | \ M  /\
  // |  \  /  \
  // | C \/ B  \
  // ----------- p1
  // p2   p12
  trisect(): [Triangle, Triangle, Triangle, Triangle] {
    let pt0 = this.pt0;
    let pt1 = this.pt1;
    let pt2 = this.pt2;

    let pt01 = this.midpoint(pt0, pt1);
    let pt12 = this.midpoint(pt1, pt2);
    let pt20 = this.midpoint(pt2, pt0);

    let triangle_A = new Triangle(pt0, pt01, pt20, this.midpoint_weight);
    let triangle_B = new Triangle(pt01, pt1, pt12, this.midpoint_weight);
    let triangle_C = new Triangle(pt20, pt12, pt2, this.midpoint_weight);
    let triangle_M = new Triangle(pt01, pt12, pt20, this.midpoint_weight);

    return [
      triangle_A,
      triangle_B,
      triangle_C,
      triangle_M]
  }

  //     p0
  //     |\
  //     | \
  //     |  \
  //     |   \
  //     | A  \
  //     |     \
  // p20>|_p201_\ <p01
  //     |   |   \
  //     | C | B  \
  //     |   |     \
  //     ----------- p1
  // p2   p12
  t_split(): [Triangle, Quadrilateral, Quadrilateral] {
    let pt0 = this.pt0;
    let pt1 = this.pt1;
    let pt2 = this.pt2;

    let pt01 = this.midpoint(pt0, pt1);
    let pt12 = this.midpoint(pt1, pt2);
    let pt20 = this.midpoint(pt2, pt0);
    let pt201 = this.midpoint(pt01, pt20);

    let triangle_A = new Triangle(pt0, pt01, pt20, this.midpoint_weight);
    let quadrilateral_B = new Quadrilateral(pt201, pt01, pt1, pt12, this.midpoint_weight);
    let quadrilateral_C = new Quadrilateral(pt20, pt201, pt12, pt2, this.midpoint_weight);

    return [
      triangle_A,
      quadrilateral_B,
      quadrilateral_C]
  }

  step_options(uniform_weights: boolean) {
    if (uniform_weights) {
      return 5
    } else {
      return 9
    }
  }

  next_step(index: number, uniform_weights: boolean): Shape[] {
    if (uniform_weights) {
      switch (index) {
        case 0:
          return this.trisect()
        case 1:
          return this.t_split()
        case 2:
          this.rotate();
          return this.t_split()
        case 3:
          this.rotate();
          this.rotate();
          return this.t_split()
        case 4:
          return []
        default:
          throw new Error('next_step: index out of range')
      }
    } else {
      switch (index) {
        case 0:
        case 1:
        case 2:
          return this.trisect()
        case 3:
          return this.t_split()
        case 4:
          this.rotate();
          return this.t_split()
        case 5:
          this.rotate();
          this.rotate();
          return this.t_split()
        case 6:
        case 7:
        case 8:
          return []
        default:
          throw new Error('next_step: index out of range')
      }
    }
  }

}


class Quadrilateral extends Shape {
  midpoint_weight: number | null;
  pt0: Point;
  pt1: Point;
  pt2: Point;
  pt3: Point;

  constructor(pt0: Point, pt1: Point, pt2: Point, pt3: Point, midpoint_weight: number | null) {
    super();
    this.pt0 = pt0;
    this.pt1 = pt1;
    this.pt2 = pt2;
    this.pt3 = pt3;
    this.midpoint_weight = midpoint_weight;
  }

  render() {
    return [this.pt0, this.pt1, this.pt2, this.pt3]
  }

  rotate() {
    let points = [this.pt0, this.pt1, this.pt2, this.pt3];
    [this.pt1, this.pt2, this.pt3, this.pt0] = points;
  }

  step_options(uniform_weights: boolean) {
    return 1
  }

  next_step(index: number, uniform_weights: boolean): Shape[] {
    switch (index) {
      case 0:
        return []
      default:
        throw new Error('next_step: index out of range')
    }
  }

}


class Square extends Quadrilateral {

  //     p0     p01      p1
  //     _________________
  //     |      / \      |
  //     | A   /   \  B  |
  //     |    /     \    |
  //     |   /       \   |
  //     |  /         \  |
  //     | /           \ |
  // p30 |/      M      \| p12
  //     |\             /|
  //     | \           / |
  //     |  \         /  |
  //     |   \       /   |
  //     |    \     /    |
  //     | D   \   /  C  |
  //     |      \ /      |
  //     |---------------| p2
  //     p3     p23
  quadsect(): [Triangle, Triangle, Triangle, Triangle, Square] {
    let pt0 = this.pt0;
    let pt1 = this.pt1;
    let pt2 = this.pt2;
    let pt3 = this.pt3;

    let pt01 = this.midpoint(this.pt0, this.pt1);
    let pt12 = this.midpoint(this.pt1, this.pt2);
    let pt23 = this.midpoint(this.pt2, this.pt3);
    let pt30 = this.midpoint(this.pt3, this.pt0);

    let triangle_A = new Triangle(pt0, pt01, pt30, this.midpoint_weight);
    let triangle_B = new Triangle(pt01, pt1, pt12, this.midpoint_weight);
    let triangle_C = new Triangle(pt12, pt2, pt23, this.midpoint_weight);
    let triangle_D = new Triangle(pt30, pt23, pt3, this.midpoint_weight);
    let square_M = new Square(pt01, pt12, pt23, pt30, this.midpoint_weight);

    return [
      triangle_A,
      triangle_B,
      triangle_C,
      triangle_D,
      square_M]
  }

  // p0              p1
  // _________________
  // |\              |
  // | \             |
  // |  \            |
  // |   \      A    |
  // |    \          |
  // |     \         |
  // |      \        |
  // |       \       |
  // |        \      |
  // |         \     |
  // |          \    |
  // |   B       \   |
  // |            \  |
  // |             \ |
  // |---------------| p2
  // p3
  bisect(): [Triangle, Triangle] {
    let pt0 = this.pt0;
    let pt1 = this.pt1;
    let pt2 = this.pt2;
    let pt3 = this.pt3;

    let triangle_A = new Triangle(pt0, pt1, pt2, this.midpoint_weight);
    let triangle_B = new Triangle(pt0, pt2, pt3, this.midpoint_weight);

    return [
      triangle_A,
      triangle_B]
  }

  step_options(uniform_weights: boolean) {
    if (uniform_weights) {
      return 4
    } else {
      return 6
    }
  }

  next_step(index: number, uniform_weights: boolean): Shape[] {
    if (uniform_weights) {
      switch (index) {
        case 0:
          return this.quadsect()
        case 1:
          return this.bisect()
        case 2:
          this.rotate();
          return this.bisect()
        case 3:
          return []
        default:
          throw new Error('next_step: index out of range')
      }
    } else {
      switch (index) {
        case 0:
        case 1:
          return this.quadsect()
        case 2:
          return this.bisect()
        case 3:
          this.rotate();
          return this.bisect()
        case 4:
        case 5:
          return []
        default:
          throw new Error('next_step: index out of range')
      }
    }
  }

}


async function main() {

  const url_params = new URLSearchParams(window.location.search);
  var max_depth = Number(url_params.get('depth'));
  if (!max_depth) {
    max_depth = 3
  }
  var stroke_width = Number(url_params.get('stroke'));
  if (!stroke_width) {
    stroke_width = 3
  }
  const midpoint_weight = Number(url_params.get('midpoint'))
  const uniform_weights = url_params.get('uniform') == 't';
  const rectangular_seed = url_params.get('rectangular') == 't';

  console.log('max_depth:', max_depth);
  console.log('stroke_width:', stroke_width);
  console.log('midpoint_weight:', midpoint_weight);
  console.log('uniform_weights:', uniform_weights);
  console.log('rectangular_seed:', rectangular_seed);

  var pixel_size = Math.min(window.innerHeight, window.innerWidth);
  console.log('pixel size:', pixel_size);

  var pt0 = new Point({x: 0, y: pixel_size});
  var pt1 = new Point({x: pixel_size, y: pixel_size});
  var pt2 = new Point({x: pixel_size, y: 0});
  var pt3 = new Point({x: 0, y: 0});

  var pixel_size_height: number | null = null;
  if (rectangular_seed) {
    pixel_size = window.innerWidth;
    pixel_size_height = window.innerHeight;

    var pt0 = new Point({x: 0, y: pixel_size_height});
    var pt1 = new Point({x: pixel_size, y: pixel_size_height});
    var pt2 = new Point({x: pixel_size, y: 0});
    var pt3 = new Point({x: 0, y: 0});
  }

  const fractal_seed = new Square(pt0, pt1, pt2, pt3, midpoint_weight);
  var num_shapes = fractal_seed.fractalize(max_depth, pixel_size, pixel_size_height, stroke_width, uniform_weights);
  console.log('num_shapes', num_shapes);
  while (num_shapes < 2) {
    console.log('regenerating to ensure num_shapes >= 2..');
    // remove previous SVG
    document.body.removeChild(document.body.children[0]);

    // re-generate
    num_shapes = fractal_seed.fractalize(max_depth, pixel_size, pixel_size_height, stroke_width, uniform_weights);
    console.log('num_shapes', num_shapes);
  }

}

// run main on load (after <body> exists..)
window.onload = main;

