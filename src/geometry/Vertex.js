import { Vector } from "../common/Vector";

export class Vertex extends Vector {
    constructor(x, y, velocity) {
        super(x, y);
        this.oldX = x - velocity.x;
        this.oldY = y - velocity.y;
    }

    update(bounds) {
        const xVel = this.x - this.oldX;
        const yVel = this.y - this.oldY;
        this.oldX = this.x;
        this.oldY = this.y;
        this.x += xVel;
        this.y += yVel;
        const bounce = 1;

        // if (this.x > bounds.width) {
        //     this.x = bounds.width;
        //     this.oldX = this.x + xVel * bounce;
        // } else if (this.x < 0) {
        //     this.x = 0;
        //     this.oldX = this.x + xVel * bounce;
        // }
        // if (this.y > bounds.height) {
        //     this.y = bounds.height;
        //     this.oldY = this.y + yVel * bounce;
        // } else if (this.y < 0) {
        //     this.y = 0;
        //     this.oldY = this.y + yVel * bounce;
        // }

        return this;
    }
}
