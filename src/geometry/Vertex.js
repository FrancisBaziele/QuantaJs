import { Vector } from "../common/Vector";

export class Vertex extends Vector {
    constructor(x, y, velocity) {
        super(x, y);
        this.oldX = x - velocity.x;
        this.oldY = y - velocity.y;
    }

    update() {
        const xVel = this.x - this.oldX;
        const yVel = this.y - this.oldY;
        this.oldX = this.x;
        this.oldY = this.y;
        this.x += xVel;
        this.y += yVel;
        return this;
    }
}
