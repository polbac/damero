var columns = [
    new ColumnScroll(1, $('.columna1')),
    new ColumnScroll(-1, $('.columna2')),
    new ColumnScroll(1, $('.columna3'))
];

$('body').on('mousewheel', mouseWheel.bind(this));

function mouseWheel(event) {
    const delta = event.originalEvent.wheelDelta;
    columns.forEach(c => {
        c.setWheel(delta);
    });
}