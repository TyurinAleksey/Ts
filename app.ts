class ClassName{}
class Point{x:number; y:number}
class Point2{height:number; width:number}

let vladix: Point
let point: Point = new Point();
let point2: Point2 = new Point2();

function none() {
    point.x = 1;
    point.y = 2;
}

function func() {
    point2.height = 10;
    point2.width = 20;
}

none()
func()