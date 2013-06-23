
// simple lines and tween

var stage = new Kinetic.Stage({
	container: 'container',
	width	 : 1024,
	height	 : 2000
});
var layer = new Kinetic.Layer();


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
	x : 300,
	y : 300,
	points : [100, 100, 300, 300],
	stroke: 'green',
	dashArray: [66, 5],
	shadowColor: 'black',
	shadowBlur: 20,
	shadowOffset: 2,
	shadowOpacity: 135,
	draggable: true,
	strokeWidth: 5
});

 var rect = new Kinetic.Rect({
	x: 100,
	y: 100,
	width: 200,
	height: 50,
	fill: 'yellow',
	stroke: 'red',
	strokeWidth: 2,
	opacity: 0.2
});


// var tween = new Kinetic.Tween({
	// node: rect,
	// duration: 1,
	// x: 300,
	// y: 300,
	// rotation: Math.PI * 2,
	// opacity: 1,
	// storkeWidth: 5,
	// scaleX: 1.5
// });

layer.add(rect);
layer.add(line2);
//line2.setOffset(100, 100);
var tween = new Kinetic.Tween({
	node: line2, 
	duration: 10	,
	x: 0,
	y: 0,
	fill: 'red',
	rotation: Math.PI*2,
	opacity: 1,
	strokeWidth: 1,
	scaleX: 1,
	shadowColor: 'black',
	shadowBlur: 20,
	shadowOffset: 2,
	shadowOpacity: 135,
	draggable: true,
	strokeWidth: 5
});


rect.on('click', function() {
	console.log(this);
	tween.play();
});

// line2.on('click', function() {
	// tween.play();
	// console.log(this);
// });

layer.add(line0);
layer.add(line1);
layer.add(line2);
layer.add(rect);
//layer.draw();


stage.add(layer);

