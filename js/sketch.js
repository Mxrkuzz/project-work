let spotSize = [10, 30, 60, 80]; // an array
let spotIndex = 0; // a variable

var circleX = 0;
var circleY = 0;
var sunColor = 254



function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}

function draw() {
    
    
 if(circleY<700){
          background(circleY-100, circleX/10, circleY-280+circleX/3);
         
          fill(15*cos(frameCount*0.005), 176, sunColor, 75);
          stroke( 255, 255, 255, 125)
          ellipse(400, circleY, 100, 100);
          circleY = circleY + 1
      
        
      
        }else if(circleY==1000){
          circleY=0;
          circleX=10;
          if(circleX == 1000){
            circleX=0;
          }
        }
        fill('#0090C1');
    waves(0.7 * height, spotSize[spotIndex]);
      
}


function waves(h, freq) {
	let amp = 20 + 5 * sin(frameCount / (freq / 2 + 10));
	beginShape();
	vertex(0, height);
	for (let i = 0; i < width; i++) {
		vertex(i, h + amp * sin((i + frameCount) / freq));
	}
	vertex(width, height);
	endShape();
}


function mousePressed(){
    if (spotIndex  == spotSize.length-1) {
        spotIndex = 0;
    }   else {
        spotIndex = spotIndex + 1; //adds one everytime you press your mouse, choosing the next element in the array
    }
}