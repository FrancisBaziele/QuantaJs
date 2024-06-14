import Quanta from "../dist/quanta.js";
import { Vector } from "./common/Vector.js";

const canvas = document.querySelector("canvas");

const world = new Quanta.Engine({ width: innerWidth, height: innerHeight });
const renderer = new Quanta.Renderer(world, canvas, innerWidth, innerHeight);
const circle = new Quanta.Circle(
    new Quanta.Vertex(100, 200, new Vector(5, -2)),
    15
);

const particle = new Quanta.Body(circle, {});

world.addBody(particle);

Quanta.Runner(world, renderer);
