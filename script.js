function draw(){}

function loop(timestamp){
    draw();
    window.requestAnimationFrame(loop)
}

/************* MAIN Program Entry point **************/
let ctx = document.querySelector("canvas").getContext("2d");

drawShape(ctx, 0, 100); // bus body

drawWheel();
drawWheel();

window.requestAnimationFrame(loop);