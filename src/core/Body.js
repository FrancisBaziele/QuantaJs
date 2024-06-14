export class Body {
    constructor(shape, properties) {
        this.shape = shape;
        this.mass = properties.mass || 1;
    }

    update(bounds) {
        this.shape.update(bounds);
    }
}
