export class Renderer {
    constructor(engine, canvas, width, height) {
        this.engine = engine;
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.canvas.width = width;
        this.canvas.height = height;
        this.width = width;
        this.height = height;
    }

    render() {
        this.context.clearRect(0, 0, this.width, this.height);
        // this.context.fillRect(100, 100, 100, 100);

        this.engine.bodies.forEach((body) => {
            if (body.shape.type === "circle" || true) {
                this.context.beginPath();
                this.context.arc(
                    body.shape.center.x,
                    body.shape.center.y,
                    body.shape.radius,
                    0,
                    Math.PI * 2,
                    false
                );
                this.context.closePath();
                this.context.fill();
            }
        });
    }
}
