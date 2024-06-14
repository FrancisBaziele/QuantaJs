import { Shape } from "./Shape";
import { Vertices } from "./Vertices";

export class Circle {
    constructor(position, radius) {
        this.center = position;
        this.radius = radius;
    }
    update(bounds) {
        this.center.update(bounds);
        const vx = this.center.x - this.center.oldX;
        const vy = this.center.y - this.center.oldY;
        if (this.center.x + this.radius > bounds.width) {
            this.center.x = bounds.width - this.radius;
            this.center.oldX = this.center.x + vx;
        } else if (this.center.x - this.radius < 0) {
            this.center.x = this.radius;
            this.center.oldX = this.center.x + vx;
        }
        if (this.center.y + this.radius > bounds.height) {
            this.center.y = bounds.height - this.radius;
            this.center.oldY = this.center.y + vy;
        } else if (this.center.y - this.radius < 0) {
            this.center.y = this.radius;
            this.center.oldY = this.center.y + vy;
        }
    }
}
