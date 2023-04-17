var fruit = [
    {name: "Apple", quantity: 20, color: "red"},
    {name: "Orange", quantity: 10, color: "orange"},
    {name: "Banana", quantity: 15, color: "yellow"},
    {name: "Kiwi", quantity: 5, color: "green"},
    {name: "Blueberry", quantity: 5, color: "blue"},
    {name: "Grapes", quantity: 10, color: "purple"}
];

var canvas = document.getElementById("barChart");
var ctx = canvas.getContext("2d");

var inputs = document.querySelectorAll("input");
inputs.forEach(input => {
    input.addEventListener("input", updateChart);
});

function updateChart() {
    fruit.forEach((f, i) => {
        f.quantity = parseInt(inputs[i].value) || 0;
    });

    drawChart();
}

function drawChart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var barHeight = 20;
    var barSpacing = 15;
    var maxQuantity = Math.max.apply(Math, fruit.map(function (f) { return f.quantity; }));
    var chartWidth = canvas.width * 0.9;

    function drawBar(x, y, width, height, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
    }

    function drawText(text, x, y, color = "black") {
        ctx.fillStyle = color;
        ctx.font = "16px Arial";
        ctx.fillText(text, x, y);
    }

    for (var i = 0; i < fruit.length; i++) {
        var y = (barHeight + barSpacing) * i;
        var width = (fruit[i].quantity / maxQuantity) * chartWidth;
        var x = 100;

        drawText(fruit[i].name, x - 60, y + barHeight * 0.75, fruit[i].color);
        drawBar(x, y, width, barHeight, fruit[i].color);
    }
}

drawChart();
