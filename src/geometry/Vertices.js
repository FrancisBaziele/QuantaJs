export class Vertices {
    constructor(vertexArray) {
        this.vertexArray = vertexArray;
    }

    // update() {
    //     this.vertexArray.forEach((vertex) => {
    //         vertex.update();
    //     });
    // }

    transform(x, y) {
        this.vertexArray.forEach((vertex) => {
            vertex.x += x;
            vertex.y += y;
        });
    }
}
