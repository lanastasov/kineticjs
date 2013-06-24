
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
	x : 400,
	y : 400,
	points : [0, 0, 400, 400],
	stroke: 'green',
	dashArray: [80, 20],
	shadowColor: 'black',
	shadowBlur: 20,
	shadowOffset: 2,
	shadowOpacity: 135,
	draggable: true,
	strokeWidth: 5
});

var circle0 = new Kinetic.Circle({
	x: 300,
	y: 300,
	radius: 3,
	fill: 'red',
	stroke: 'black',
});

var circle = new Kinetic.Circle({
	x: 400,
	y: 400,
	radius: 3,
	fill: 'red',
	stroke: 'black',
});

var circle1 = new Kinetic.Circle({
	x: 500,
	y: 500,
	radius: 3,
	fill: 'red',
	stroke: 'black',
});

var circle2 = new Kinetic.Circle({
	x: 700,
	y: 700,
	radius: 3,
	fill: 'red',
	stroke: 'black'
});

layer.add(circle2);
layer.add(circle1);
layer.add(circle);
layer.add(circle0);

layer.add(line2);
// line2.setOffset(100, 100);
var tween = new Kinetic.Tween({
	node: line2, 
	duration: 10,
	x: 0,
	y: 0,
	fill: 'red',
	rotation: Math.PI*2,
	opacity: 1,
	scaleX: 1,
	shadowColor: 'black',
	shadowBlur: 20,
	shadowOffset: 2,
	shadowOpacity: 135,
	draggable: true,
	strokeWidth: 5
});

setTimeout(function(){
	tween.play();
	//tween.reverse();
}, 400);



line2.on('click', function() {
	tween.reverse();
	console.log(this);
});

layer.add(line0);
layer.add(line1);
layer.add(line2);
//layer.draw();


stage.add(layer);

