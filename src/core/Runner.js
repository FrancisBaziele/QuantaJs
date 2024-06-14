export function Runner(engine, renderer, options) {
    engine.update();
    renderer.render();
    requestAnimationFrame(() => Runner(engine, renderer, options));
}
