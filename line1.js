
// simple lines

var stage = new Kinetic.Stage({
	container: 'container',
	width	 : 1024,
	height	 : 2000
});

var line0 = new Kinetic.Line({
	x: 100,
	y: 100,
	points: [100, 200, 300, 400, 450, 120, 454, 20],
	stroke: 'blue',
	draggable: true
});

var line1 = new Kinetic.Line({
	x: 100,
	y: 50,
	points: [73, 70, 340, 23, 450, 60, 500, 20],
	stroke: 'red'
});

var line2 = new Kinetic.Line({
	x : 100,
	y : 50,
	points : [100, 200, 300, 400],
	stroke: 'green',
	dashArray: [66, 5],
	shadowColor: 'black',
	shadowBlur: 20,
	shadowOffset: 2,
	shadowOpacity: 135,
	draggable: true,
	strokeWidth: 5
});

var layer = new Kinetic.Layer();
layer.add(line0);
layer.add(line1);
layer.add(line2);
//layer.draw();


stage.add(layer);

