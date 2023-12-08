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

function midpoint(xs: Point, ys: Point): Point {
  return new Point({
    x: (xs.x + ys.x) / 2,
    y: (xs.y + ys.y) / 2,
  })
}

abstract class Shape {
  abstract render(): Point[];

  abstract rotate(): void;

  abstract step_options(): number;

  abstract next_step(index: number): Shape[];

  render_pointarray(): PointArray {
    return new PointArray(this.render().flatMap((pt) => {return [pt.x, pt.y]}));
  }

  // returns the number of sub-shapes drawn
  fractalize(
    max_depth: number,
    pixel_size: number,
    stroke_width: number
    // border_pixels: number, // TODO ?
  ): number {
    var draw = SVG().addTo('body').size(pixel_size, pixel_size);
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
        let max = current_shape.step_options();
        let next_step_index = Math.floor(next_random_num * max);
        unfinished_shapes.push(...current_shape.next_step(next_step_index).map((x) => {
          let ret: [Shape, number] = [x, current_depth + 1];
          return ret
        }));
      }
    }

    return num_sub_shapes
  }

}


class Triangle extends Shape {
  pt0: Point;
  pt1: Point;
  pt2: Point;

  constructor(pt0: Point, pt1: Point, pt2: Point) {
    super();
    this.pt0 = pt0;
    this.pt1 = pt1;
    this.pt2 = pt2;
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

    let pt01 = midpoint(pt0, pt1);
    let pt12 = midpoint(pt1, pt2);
    let pt20 = midpoint(pt2, pt0);

    let triangle_A = new Triangle(pt0, pt01, pt20);
    let triangle_B = new Triangle(pt01, pt1, pt12);
    let triangle_C = new Triangle(pt20, pt12, pt2);
    let triangle_M = new Triangle(pt01, pt12, pt20);

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

    let pt01 = midpoint(pt0, pt1);
    let pt12 = midpoint(pt1, pt2);
    let pt20 = midpoint(pt2, pt0);
    let pt201 = midpoint(pt01, pt20);

    let triangle_A = new Triangle(pt0, pt01, pt20);
    let quadrilateral_B = new Quadrilateral(pt201, pt01, pt1, pt12);
    let quadrilateral_C = new Quadrilateral(pt20, pt201, pt12, pt2);

    return [
      triangle_A,
      quadrilateral_B,
      quadrilateral_C]
  }

  step_options() {
    return 5
  }

  next_step(index: number): Shape[] {
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
  }

}


class Quadrilateral extends Shape {
  pt0: Point;
  pt1: Point;
  pt2: Point;
  pt3: Point;

  constructor(pt0: Point, pt1: Point, pt2: Point, pt3: Point) {
    super();
    this.pt0 = pt0;
    this.pt1 = pt1;
    this.pt2 = pt2;
    this.pt3 = pt3;
  }

  render() {
    return [this.pt0, this.pt1, this.pt2, this.pt3]
  }

  rotate() {
    let points = [this.pt0, this.pt1, this.pt2, this.pt3];
    [this.pt1, this.pt2, this.pt3, this.pt0] = points;
  }

  step_options() {
    return 1
  }

  next_step(index: number): Shape[] {
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

    let pt01 = midpoint(this.pt0, this.pt1);
    let pt12 = midpoint(this.pt1, this.pt2);
    let pt23 = midpoint(this.pt2, this.pt3);
    let pt30 = midpoint(this.pt3, this.pt0);

    let triangle_A = new Triangle(pt0, pt01, pt30);
    let triangle_B = new Triangle(pt01, pt1, pt12);
    let triangle_C = new Triangle(pt12, pt2, pt23);
    let triangle_D = new Triangle(pt30, pt23, pt3);
    let square_M = new Square(pt01, pt12, pt23, pt30);

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

    let triangle_A = new Triangle(pt0, pt1, pt2);
    let triangle_B = new Triangle(pt0, pt2, pt3);

    return [
      triangle_A,
      triangle_B]
  }

  step_options() {
    return 4
  }

  next_step(index: number): Shape[] {
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
  }

}


async function main() {
  let pixel_size = Math.min(window.innerHeight, window.innerWidth);
  console.log('pixel size:', pixel_size);

  const pt0 = new Point({x: 0, y: pixel_size});
  const pt1 = new Point({x: pixel_size, y: pixel_size});
  const pt2 = new Point({x: pixel_size, y: 0});
  const pt3 = new Point({x: 0, y: 0});
  const fractal_seed = new Square(pt0, pt1, pt2, pt3);

  const url_params = new URLSearchParams(window.location.search);
  var max_depth = Number(url_params.get('depth'));
  if (!max_depth) {
    max_depth = 3
  }
  var stroke_width = Number(url_params.get('stroke'));
  if (!stroke_width) {
    stroke_width = 3
  }

  var num_shapes = fractal_seed.fractalize(max_depth, pixel_size, stroke_width);
  console.log('num_shapes', num_shapes);
  while (num_shapes < 2) {
    // remove previous SVG
    document.body.removeChild(document.body.children[0]);

    // re-generate
    num_shapes = fractal_seed.fractalize(max_depth, pixel_size, stroke_width);
    console.log('num_shapes', num_shapes);
  }

}

// run main on load (after <body> exists..)
window.onload = main;

