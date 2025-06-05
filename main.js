let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;
const startAngle = 0;
const endAngle = 2 * Math.PI; // Full circle
const counterClockwise = false;
let rectX = 100;
let yv  = 0
const radius = 100;
let rectY = 100;
var Rect_width = 40
var Rect_height = 40
var delta = 0
var dvdX = 200
var dvdY = 200
var dvdDX = 1
var dvdYX = 1

var orbitX
var orbitY = 

requestAnimationFrame(loop);
function loop() {
    //Object 1
    yv--
    rectY -= yv
    

    ctx.fillStyle = "white"
    ctx.fillRect(0,0, cnv.width, cnv.height)

    ctx.fillStyle = "orange"
    ctx.fillRect(rectX, rectY, Rect_width, Rect_height)

    if (rectY > 350) {
        yv = 25 * ((Math.random() / 2) + 0.5)
        rectY = 349
    }
    //Object 2
    ctx.fillStyle = "black"
    ctx.fillRect(dvdX,dvdY + 2, 65, -26)
    ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
    ctx.font = "bold 30px Arial";
    ctx.fillText('DVD', dvdX, dvdY);
    dvdX += dvdDX
    dvdY += dvdYX

    if (dvdX > 540 || dvdX < 0) {
        dvdDX *= -1
        dvdX += dvdDX
    }
    if (dvdY < 20 || dvdY > 395) {
        dvdYX *= -1
        dvdY += dvdYX
    }

    //Object 3
    
    delta += 0.01
        ctx.beginPath();
    ctx.arc(300,200, 55 , startAngle, endAngle, counterClockwise);
    ctx.fillStyle = 'rgb(155, 84, 26)';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(300,200, Math.abs(Math.sin(delta)) * 50 , startAngle, endAngle, counterClockwise);
    ctx.fillStyle = 'rgb(245, 120, 18)';
    ctx.fill();
    //Object 3

    ctx.beginPath();
    ctx.arc( 300 + (Math.sin(delta) * 100), 200 + (Math.sin(delta + 100) * 100), 20 , startAngle, endAngle, counterClockwise);
    ctx.fillStyle = 'rgb(245, 120, 18)';
    ctx.fill();

    ctx.beginPath();
    ctx.arc( 300 + (Math.sin(delta * -2) * 100), 200 + (Math.sin(delta * -2 + 800) * 100), 20 , startAngle, endAngle, counterClockwise);
    ctx.fillStyle = 'rgb(146, 84, 34)';
    ctx.fill();


    requestAnimationFrame(loop);
}
