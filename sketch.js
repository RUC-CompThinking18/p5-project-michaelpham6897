function setup() {
  /*
  windowWidth and windowHeight expands the canvas to fit the window
  I chose this option for the canvas because when I used 400 x 400 pixels, the circles would
  go off the canvas
  */
  createCanvas(windowWidth, windowHeight);
	//Creates all the multi-colored circles
	blueLocation = createVector(50, 50);
	yellLocation = createVector(350, 350);
	greeLocation = createVector(300, 50);

}

function draw() {
  background(220);

	//Locates location of mouse
	var blue = createVector(mouseX,mouseY);
	//Determines the distance between mouse and circle
	var blueDistance = blue.dist(blueLocation);
	//Sets the speed of the circle at a set speed
	var blueMappedDistance = map(blueDistance, 50, 0, 2.5, 2.5);
	//How the circle determines location of mouse
	blue.sub(blueLocation);
	blue.normalize();
	blue.mult(blueMappedDistance);
	blueLocation.add(blue);
	//Creates blue circle
	blueColor = fill(0, 76, 255);
	ellipse(blueLocation.x, blueLocation.y, 30, 35);

	//Locates location of mouse
	var yell = createVector(mouseX,mouseY);
	//Determines the distance between mouse and circle
	var yellDistance = yell.dist(yellLocation);
	//Sets the speed of the circle at a set speed
	var yellMappedDistance = map(yellDistance, 50, 0, 3.5, 3.5);
	//How the circle determines location of mouse
	yell.sub(yellLocation);
	yell.normalize();
	yell.mult(yellMappedDistance);
	yellLocation.add(yell);
	//Creates yellow circle
	yellColor = fill(246, 255, 0)
	ellipse(yellLocation.x, yellLocation.y, 30, 35);

	//Locates location of mouse
	var gree = createVector(mouseX, mouseY);
	//Determines the distance between mouse and circle
	var greeDistance = gree.dist(greeLocation);
	//Sets the speed of the circle at a set speed
	var greeMappedDistance = map(greeDistance, 50, 0, 5, 5);
	//How the circle determines location of mouse
	gree.sub(greeLocation);
	gree.normalize();
	gree.mult(greeMappedDistance);
	greeLocation.add(gree);
	//Creates green circle
	greeColor = fill(0, 255, 63);
	ellipse(greeLocation.x, greeLocation.y, 30, 35);
}

function mousePressed() {
	//Whenever the mouse is clicked, the circles will restart at their original locations
	blueLocation = createVector(50, 50);
	yellLocation = createVector(350, 350);
	greeLocation = createVector(300, 50);

}
