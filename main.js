var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
// Draw text

// Draw background elements
context.fillStyle = "skyblue";
context.fillRect(0, 0, canvas.width, canvas.height * 0.6);

context.fillStyle = "blue";
context.fillRect(
  0,
  canvas.height * 0.6,
  canvas.width,
  canvas.height * 0.4
);

context.fillStyle = "green";
context.beginPath();
context.moveTo(0, canvas.height * 0.6);
context.lineTo(canvas.width * 0.2, canvas.height * 0.5);
context.lineTo(canvas.width * 0.4, canvas.height * 0.7);
context.lineTo(canvas.width * 0.6, canvas.height * 0.6);
context.lineTo(canvas.width * 0.8, canvas.height * 0.7);
context.lineTo(canvas.width, canvas.height * 0.5);
context.lineTo(canvas.width, canvas.height * 0.6);
context.lineTo(0, canvas.height * 0.6);
context.closePath();
context.fill();

// Draw mountains
context.fillStyle = "gray";
context.beginPath();
context.moveTo(0, canvas.height * 0.6);
context.lineTo(canvas.width * 0.2, canvas.height * 0.2);
context.lineTo(canvas.width * 0.4, canvas.height * 0.4);
context.lineTo(canvas.width * 0.6, canvas.height * 0.3);
context.lineTo(canvas.width * 0.8, canvas.height * 0.5);
context.lineTo(canvas.width, canvas.height * 0.2);
context.lineTo(canvas.width, canvas.height * 0.6);
context.lineTo(0, canvas.height * 0.6);
context.closePath();
context.fill();

// Draw trees
context.fillStyle = "green";


context.beginPath();
context.arc(canvas.width * 0.85, canvas.height * 0.5, 50, 0, 2 * Math.PI);
context.fill();

// Draw sun
context.beginPath();
context.arc(canvas.width * 0.8, canvas.height * 0.2, 50, 0, 2 * Math.PI);
context.fillStyle = "yellow";
context.fill();

// Draw houses
context.fillStyle = "brown";
context.fillRect(canvas.width * 0.1, canvas.height * 0.4, 100, 100);

// Draw chimney
context.fillStyle = "red";
context.fillRect(canvas.width * 0.15, canvas.height * 0.35, 20, 30);

// Draw windows
context.fillStyle = "white";
context.fillRect(canvas.width * 0.125, canvas.height * 0.45, 30, 30);
context.fillRect(canvas.width * 0.175, canvas.height * 0.45, 30, 30);

// Draw grass
for (var i = 0; i < canvas.width; i += 30) {
  context.beginPath();
  context.moveTo(i, canvas.height * 0.6);
  context.lineTo(i + 15, canvas.height * 0.65);
  context.lineTo(i + 30, canvas.height * 0.6);
  context.closePath();
  context.fillStyle = "green";
  context.fill();
}

context.font = "3rem Arial";
context.fillStyle = "black";
context.fillText("Some text", 50, 100);
