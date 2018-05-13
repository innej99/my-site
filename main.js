const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const triangle = [ [0, -20], [20, 20], [-20, 20] ];
canvas.addEventListener("mousedown", mouseDown);
canvas.addEventListener("contextmenu", e => e.preventDefault() );
function mouseDown(event) {
  const bounds = event.target.getBoundingClientRect();
  const x = event.pageX - bounds.left - scrollX;
  const y = event.pageY - bounds.top  - scrollY;
  if (event.which === 3) { drawShape(x, y, triangle) }
}
function drawShape(x, y, shape) {
  var i = 0;
  ctx.fillStyle = "black";
  ctx.beginPath();
  while (i < shape.length) { ctx.lineTo( shape[i][0] + x, shape[i++][1] + y ) }
  ctx.fill();
}
