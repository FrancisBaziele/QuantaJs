export class Engine {
    constructor(options) {
        this.gravity = 1;
        this.width = options.width;
        this.height = options.height;
        this.bodies = [];
    }

    addBody(body) {
        this.bodies.push(body);
    }

    update() {
        this.bodies.forEach((body) =>
            body.update({ width: this.width, height: this.height })
        );
    }
}
