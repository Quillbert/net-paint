let socket;

function setup() {
	createCanvas(600,600);
	background(100);
	socket = io.connect(location.origin);
	socket.on('message', function(data) {
		fill(0);
		ellipse(data.x, data.y, 10, 10);
	});
}

function mouseDragged() {
	var data = {
		x: mouseX,
		y: mouseY
	};
	socket.emit('message', data);
	console.log(data);
}
