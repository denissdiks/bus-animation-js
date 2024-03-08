function draw(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    //bus body
    ctx.save();

    ctx.scale(-1, 1);
    ctx.translate(-tx , 0, 0);
    ctx.drawImage(busImg, 450 + startPos, 140, busImg.width*0.2, busImg.height*0.2);
    //drawShape(ctx, 0 + startPos, 100);

    ctx.restore();

    //wheel 1
    ctx.save();

    ctx.translate(135 + tx + startPos, 470, 0);
    ctx.rotate(rx);
    ctx.translate(-135 - startPos, -470, 0);

    drawWheel(135 + startPos, 470);

    ctx.restore();

    //wheel 2
    ctx.save();

    ctx.translate(490 + tx + startPos, 470, 0);
    ctx.rotate(rx);
    ctx.translate(-490 - startPos, -470, 0);
    
    drawWheel(490 + startPos, 470);

    ctx.restore();

    //****TRanslating condition *****/
    if (tx > 1400) {
        tx = 1;
    }

    tx += 4; // bus translation increment
    rx += 5 * toRadians;  // wheels rotation increment
}

function loop(timestamp){
    draw();
    window.requestAnimationFrame(loop)
}

/************* MAIN Program Entry point **************/
let ctx = document.querySelector("canvas").getContext("2d");
const busImg = document.getElementById("bus");

let startPos = -500;

let toRadians = Math.PI / 180;
let tx = 1;  // bus translation
let rx = 0;  // wheels rotation
const segSize = 45; // segment size on the wheel

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

function drawWheel(posX, posY) {
    ctx.beginPath();
    ctx.arc(posX, posY, 40, 0 * toRadians, 360 * toRadians);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.stroke();

    for (let index = 1; index <= 360 / segSize; index++) {
        if (index % 2) {
            color = 'white';
        } else
            color = 'darkGrey';

        drawSegment(posX, posY, 28, (index - 1) * 45 * toRadians, index * 45 * toRadians, color);
    }

    ctx.beginPath();
    ctx.arc(posX, posY, 10, 0, 360 * toRadians);
    ctx.fill();
    ctx.stroke();
}

function drawSegment(posX, posY, rad, from, to, color) {
    ctx.beginPath();
    ctx.lineTo(posX, posY);
    ctx.arc(posX, posY, rad, from, to);
    ctx.lineTo(posX, posY);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
}