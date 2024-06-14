import { Shape } from "./Shape";
import { Vertices } from "./Vertices";

export class Circle {
    constructor(position, radius) {
        this.center = position;
        this.radius = radius;
    }
    update() {
        this.center.update();
    }
}
