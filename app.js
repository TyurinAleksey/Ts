// class ClassName{}
// class Point{x:number; y:number}
// class Point2{height:number; width:number}
// let vladix: Point
// let point: Point = new Point();
// let point2: Point2 = new Point2();
// function none() {
//     point.x = 1;
//     point.y = 2;
// }
// function func() {
//     point2.height = 10;
//     point2.width = 20;
// }
// none()
// func()
//Пара 07.02.2023
var Rect = /** @class */ (function () {
    function Rect(x1, x2, y1, y2) {
        this.MAX_COORD = 1000;
        this.x1 = 1;
        this.x2 = 3;
        this.y1 = 4;
        this.y2 = 5;
    }
    Rect.prototype.square = function () {
        return Math.abs(this.x1 - this.x2) * Math.abs(this.y1 - this.y2);
    };
    return Rect;
}());
var rect1 = new Rect(10, 9);
var rect2 = new Rect();
rect1.x2 = 4;
console.log(rect1.square());
