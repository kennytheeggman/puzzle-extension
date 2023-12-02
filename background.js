var page = await fetch("https://puzzlemadness.co.uk/onestroke/medium"); // TODO: replace with url API
var html = await a.text();
eval(html.split("\n")[53]);

var canvas = document.getElementById("js-puzzle-target");
var ctx = canvas.getContext('2d');

var points = puzzledata.data.points;
var pointsize = .1 * canvas.width / (puzzledata.gridWidth - 1);

var nodes = {}, lines = puzzledata.data.lines;
var grid_offset = 20;


for (let i = 0; i < lines.length; i++) {
	let line = lines[i];
	if (!nodes[line.point1]) { nodes[line.point1] = 0; }
	if (!nodes[line.point2]) { nodes[line.point2] = 0; }

	nodes[line.point1] += line.count;
	nodes[line.point2] += line.count;
}

for (let i = 0; i < points.length; i++) {
	if (nodes[i] % 2 == 1) {
		let x = grid_offset + points[i][0] * (canvas.width - grid_offset*2) / (puzzledata.gridWidth - 1);
		let y = grid_offset + points[i][1] * (canvas.width - grid_offset*2) / (puzzledata.gridHeight - 1);
		
		ctx.fillStyle = "#a9cfc0";
		ctx.beginPath();
		ctx.arc(x, y, pointsize, 0, 2 * Math.PI);
		ctx.fill();
	}
}

