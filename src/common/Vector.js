export class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    set(x, y) {
        this.x = x;
        this.y = y;

        return this;
    }

    add(vector) {
        this.x += vector.x;
        this.y += vector.y;

        return this;
    }

    sub(vector) {
        this.x -= vector.x;
        this.y -= vector.y;

        return this;
    }

    difference(vector) {
        const xDiff = this.x - vector.x;
        const yDiff = this.y - vector.y;
        return new Vector(xDiff, yDiff);
    }

    getMagnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}
