export class Engine {
    constructor(options) {
        this.gravity = 1;
        this.bodies = [];
    }

    addBody(body) {
        this.bodies.push(body);
    }

    update() {
        this.bodies.forEach((body) => body.update());
    }
}
