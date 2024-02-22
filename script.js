function draw(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    //bus body
    ctx.save();

    ctx.translate(tx , 0, 0);
    drawShape(ctx, 0 + startPos, 100);

    ctx.restore();

    //****TRanslating condition *****/
    if (tx > 1400) {
        tx = 1;
    }
    tx += 4;
}

function loop(timestamp){
    draw();
    window.requestAnimationFrame(loop)
}

/************* MAIN Program Entry point **************/
let ctx = document.querySelector("canvas").getContext("2d");

let startPos = -500;

let toRadians = Math.PI / 180;
let tx = 1;

drawShape(ctx, 0, 100); // bus body

//drawWheel();
//drawWheel();

window.requestAnimationFrame(loop);

function drawShape(ctx, xoff, yoff) {
    ctx.beginPath();

    ctx.strokeStyle = 'red';
    ctx.lineWidth = 3;

    ctx.moveTo(84 + xoff, 367 + yoff);
    ctx.bezierCurveTo(84 + xoff, 352 + yoff, 85 + xoff, 236 + yoff, 85 + xoff, 221 + yoff);
    ctx.bezierCurveTo(85 + xoff, 202 + yoff, 53 + xoff, 189 + yoff, 396 + xoff, 191 + yoff);
    ctx.bezierCurveTo(398 + xoff, 191 + yoff, 398 + xoff, 300 + yoff, 398 + xoff, 300 + yoff);
    ctx.bezierCurveTo(399 + xoff, 301 + yoff, 409 + xoff, 300 + yoff, 422 + xoff, 303 + yoff);
    ctx.bezierCurveTo(431 + xoff, 305 + yoff, 428 + xoff, 358 + yoff, 426 + xoff, 358 + yoff);
    ctx.bezierCurveTo(395 + xoff, 358 + yoff, 407 + xoff, 359 + yoff, 380 + xoff, 360 + yoff);
    ctx.bezierCurveTo(365 + xoff, 361 + yoff, 368 + xoff, 333 + yoff, 336 + xoff, 332 + yoff);
    ctx.bezierCurveTo(297 + xoff, 331 + yoff, 307 + xoff, 362 + yoff, 292 + xoff, 361 + yoff);
    ctx.bezierCurveTo(277 + xoff, 360 + yoff, 212 + xoff, 362 + yoff, 191 + xoff, 363 + yoff);
    ctx.bezierCurveTo(176 + xoff, 364 + yoff, 188 + xoff, 334 + yoff, 152 + xoff, 333 + yoff);
    ctx.bezierCurveTo(110 + xoff, 332 + yoff, 130 + xoff, 367 + yoff, 92 + xoff, 367 + yoff);
    ctx.closePath();
    ctx.stroke();
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
}