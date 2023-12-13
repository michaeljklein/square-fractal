var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { SVG, Point, PointArray } from '@svgdotjs/svg.js';
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
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.midpoint = function (xs, ys) {
        if (this.midpoint_weight) {
            return new Point({
                x: this.midpoint_weight * xs.x + (1 - this.midpoint_weight) * ys.x,
                y: this.midpoint_weight * xs.y + (1 - this.midpoint_weight) * ys.y,
            });
        }
        else {
            return new Point({
                x: (xs.x + ys.x) / 2,
                y: (xs.y + ys.y) / 2,
            });
        }
    };
    Shape.prototype.render_pointarray = function () {
        return new PointArray(this.render().flatMap(function (pt) { return [pt.x, pt.y]; }));
    };
    // returns the number of sub-shapes drawn
    Shape.prototype.fractalize = function (max_depth, pixel_size, pixel_size_height, // if not null, the height, else pixel_size is the height
    stroke_width, uniform_weights) {
        var draw = SVG().addTo('body').size(pixel_size, pixel_size_height || pixel_size);
        draw.polyline(this.render_pointarray()).fill('none').stroke({ color: '#000', width: stroke_width });
        // [shape, depth]
        var num_sub_shapes = 0;
        var unfinished_shapes = [[this, 0]];
        var _loop_1 = function () {
            var _a = unfinished_shapes.pop(), current_shape = _a[0], current_depth = _a[1];
            num_sub_shapes++;
            draw.polyline(current_shape.render_pointarray()).fill('none').stroke({ color: '#000', width: stroke_width });
            if (current_depth <= max_depth) {
                var next_random_num = crypto.getRandomValues(new Uint32Array(1))[0] / Math.pow(2, 32);
                var max = current_shape.step_options(uniform_weights);
                var next_step_index = Math.floor(next_random_num * max);
                unfinished_shapes.push.apply(unfinished_shapes, current_shape.next_step(next_step_index, uniform_weights).map(function (x) {
                    var ret = [x, current_depth + 1];
                    return ret;
                }));
            }
        };
        while (unfinished_shapes.length) {
            _loop_1();
        }
        return num_sub_shapes;
    };
    return Shape;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(pt0, pt1, pt2, midpoint_weight) {
        var _this = _super.call(this) || this;
        _this.pt0 = pt0;
        _this.pt1 = pt1;
        _this.pt2 = pt2;
        _this.midpoint_weight = midpoint_weight;
        return _this;
    }
    Triangle.prototype.render = function () {
        return [this.pt0, this.pt1, this.pt2];
    };
    Triangle.prototype.rotate = function () {
        var points = [this.pt0, this.pt1, this.pt2];
        this.pt1 = points[0], this.pt2 = points[1], this.pt0 = points[2];
    };
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
    Triangle.prototype.trisect = function () {
        var pt0 = this.pt0;
        var pt1 = this.pt1;
        var pt2 = this.pt2;
        var pt01 = this.midpoint(pt0, pt1);
        var pt12 = this.midpoint(pt1, pt2);
        var pt20 = this.midpoint(pt2, pt0);
        var triangle_A = new Triangle(pt0, pt01, pt20, this.midpoint_weight);
        var triangle_B = new Triangle(pt01, pt1, pt12, this.midpoint_weight);
        var triangle_C = new Triangle(pt20, pt12, pt2, this.midpoint_weight);
        var triangle_M = new Triangle(pt01, pt12, pt20, this.midpoint_weight);
        return [
            triangle_A,
            triangle_B,
            triangle_C,
            triangle_M
        ];
    };
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
    Triangle.prototype.t_split = function () {
        var pt0 = this.pt0;
        var pt1 = this.pt1;
        var pt2 = this.pt2;
        var pt01 = this.midpoint(pt0, pt1);
        var pt12 = this.midpoint(pt1, pt2);
        var pt20 = this.midpoint(pt2, pt0);
        var pt201 = this.midpoint(pt01, pt20);
        var triangle_A = new Triangle(pt0, pt01, pt20, this.midpoint_weight);
        var quadrilateral_B = new Quadrilateral(pt201, pt01, pt1, pt12, this.midpoint_weight);
        var quadrilateral_C = new Quadrilateral(pt20, pt201, pt12, pt2, this.midpoint_weight);
        return [
            triangle_A,
            quadrilateral_B,
            quadrilateral_C
        ];
    };
    Triangle.prototype.step_options = function (uniform_weights) {
        if (uniform_weights) {
            return 5;
        }
        else {
            return 9;
        }
    };
    Triangle.prototype.next_step = function (index, uniform_weights) {
        if (uniform_weights) {
            switch (index) {
                case 0:
                    return this.trisect();
                case 1:
                    return this.t_split();
                case 2:
                    this.rotate();
                    return this.t_split();
                case 3:
                    this.rotate();
                    this.rotate();
                    return this.t_split();
                case 4:
                    return [];
                default:
                    throw new Error('next_step: index out of range');
            }
        }
        else {
            switch (index) {
                case 0:
                case 1:
                case 2:
                    return this.trisect();
                case 3:
                    return this.t_split();
                case 4:
                    this.rotate();
                    return this.t_split();
                case 5:
                    this.rotate();
                    this.rotate();
                    return this.t_split();
                case 6:
                case 7:
                case 8:
                    return [];
                default:
                    throw new Error('next_step: index out of range');
            }
        }
    };
    return Triangle;
}(Shape));
var Quadrilateral = /** @class */ (function (_super) {
    __extends(Quadrilateral, _super);
    function Quadrilateral(pt0, pt1, pt2, pt3, midpoint_weight) {
        var _this = _super.call(this) || this;
        _this.pt0 = pt0;
        _this.pt1 = pt1;
        _this.pt2 = pt2;
        _this.pt3 = pt3;
        _this.midpoint_weight = midpoint_weight;
        return _this;
    }
    Quadrilateral.prototype.render = function () {
        return [this.pt0, this.pt1, this.pt2, this.pt3];
    };
    Quadrilateral.prototype.rotate = function () {
        var points = [this.pt0, this.pt1, this.pt2, this.pt3];
        this.pt1 = points[0], this.pt2 = points[1], this.pt3 = points[2], this.pt0 = points[3];
    };
    Quadrilateral.prototype.step_options = function (uniform_weights) {
        return 1;
    };
    Quadrilateral.prototype.next_step = function (index, uniform_weights) {
        switch (index) {
            case 0:
                return [];
            default:
                throw new Error('next_step: index out of range');
        }
    };
    return Quadrilateral;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
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
    Square.prototype.quadsect = function () {
        var pt0 = this.pt0;
        var pt1 = this.pt1;
        var pt2 = this.pt2;
        var pt3 = this.pt3;
        var pt01 = this.midpoint(this.pt0, this.pt1);
        var pt12 = this.midpoint(this.pt1, this.pt2);
        var pt23 = this.midpoint(this.pt2, this.pt3);
        var pt30 = this.midpoint(this.pt3, this.pt0);
        var triangle_A = new Triangle(pt0, pt01, pt30, this.midpoint_weight);
        var triangle_B = new Triangle(pt01, pt1, pt12, this.midpoint_weight);
        var triangle_C = new Triangle(pt12, pt2, pt23, this.midpoint_weight);
        var triangle_D = new Triangle(pt30, pt23, pt3, this.midpoint_weight);
        var square_M = new Square(pt01, pt12, pt23, pt30, this.midpoint_weight);
        return [
            triangle_A,
            triangle_B,
            triangle_C,
            triangle_D,
            square_M
        ];
    };
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
    Square.prototype.bisect = function () {
        var pt0 = this.pt0;
        var pt1 = this.pt1;
        var pt2 = this.pt2;
        var pt3 = this.pt3;
        var triangle_A = new Triangle(pt0, pt1, pt2, this.midpoint_weight);
        var triangle_B = new Triangle(pt0, pt2, pt3, this.midpoint_weight);
        return [
            triangle_A,
            triangle_B
        ];
    };
    Square.prototype.step_options = function (uniform_weights) {
        if (uniform_weights) {
            return 4;
        }
        else {
            return 6;
        }
    };
    Square.prototype.next_step = function (index, uniform_weights) {
        if (uniform_weights) {
            switch (index) {
                case 0:
                    return this.quadsect();
                case 1:
                    return this.bisect();
                case 2:
                    this.rotate();
                    return this.bisect();
                case 3:
                    return [];
                default:
                    throw new Error('next_step: index out of range');
            }
        }
        else {
            switch (index) {
                case 0:
                case 1:
                    return this.quadsect();
                case 2:
                    return this.bisect();
                case 3:
                    this.rotate();
                    return this.bisect();
                case 4:
                case 5:
                    return [];
                default:
                    throw new Error('next_step: index out of range');
            }
        }
    };
    return Square;
}(Quadrilateral));
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var url_params, max_depth, stroke_width, midpoint_weight, uniform_weights, rectangular_seed, pixel_size, pt0, pt1, pt2, pt3, pixel_size_height, pt0, pt1, pt2, pt3, fractal_seed, num_shapes;
        return __generator(this, function (_a) {
            url_params = new URLSearchParams(window.location.search);
            max_depth = Number(url_params.get('depth'));
            if (!max_depth) {
                max_depth = 3;
            }
            stroke_width = Number(url_params.get('stroke'));
            if (!stroke_width) {
                stroke_width = 3;
            }
            midpoint_weight = Number(url_params.get('midpoint'));
            uniform_weights = url_params.get('uniform') == 't';
            rectangular_seed = url_params.get('rectangular') == 't';
            console.log('max_depth:', max_depth);
            console.log('stroke_width:', stroke_width);
            console.log('midpoint_weight:', midpoint_weight);
            console.log('uniform_weights:', uniform_weights);
            console.log('rectangular_seed:', rectangular_seed);
            pixel_size = Math.min(window.innerHeight, window.innerWidth);
            console.log('pixel size:', pixel_size);
            pt0 = new Point({ x: 0, y: pixel_size });
            pt1 = new Point({ x: pixel_size, y: pixel_size });
            pt2 = new Point({ x: pixel_size, y: 0 });
            pt3 = new Point({ x: 0, y: 0 });
            pixel_size_height = null;
            if (rectangular_seed) {
                pixel_size = window.innerWidth;
                pixel_size_height = window.innerHeight;
                pt0 = new Point({ x: 0, y: pixel_size_height });
                pt1 = new Point({ x: pixel_size, y: pixel_size_height });
                pt2 = new Point({ x: pixel_size, y: 0 });
                pt3 = new Point({ x: 0, y: 0 });
            }
            fractal_seed = new Square(pt0, pt1, pt2, pt3, midpoint_weight);
            num_shapes = fractal_seed.fractalize(max_depth, pixel_size, pixel_size_height, stroke_width, uniform_weights);
            console.log('num_shapes', num_shapes);
            while (num_shapes < 2) {
                console.log('regenerating to ensure num_shapes >= 2..');
                // remove previous SVG
                document.body.removeChild(document.body.children[0]);
                // re-generate
                num_shapes = fractal_seed.fractalize(max_depth, pixel_size, pixel_size_height, stroke_width, uniform_weights);
                console.log('num_shapes', num_shapes);
            }
            return [2 /*return*/];
        });
    });
}
// run main on load (after <body> exists..)
window.onload = main;
//# sourceMappingURL=fractal.js.map