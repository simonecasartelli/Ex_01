function setup() {
  createCanvas(800,600);
  background(200);
  angleMode(DEGREES);
}

function draw() {
  translate(width/2,height/2);
 
  //Antenna
  stroke(50)
  strokeWeight(10);
  line(10,0,10,-270)
  line(-10,0,-10,-240)
 
  //BodyBall
  stroke(50);
  strokeWeight(2)
  fill(250);
  ellipse(0,100,400,400)
  stroke(50)
  strokeWeight(10);
  line(0,50,0,-90)
  line(0,50,0,290)
  line(0,50,-190,50)
  line(0,50,190,50)
  stroke(50);
  strokeWeight(2)
  fill(255,102,0);
  ellipse(0,50,200,200)
  fill(250);
  ellipse(0,50,150,150)
  
  //Head
  stroke(50);
  strokeWeight(2)
  fill(250);
  arc(0,-120,200,200,-180,0)
  rect(-100,-120,200,20);
  ellipse(0,-150,50,50)
  //GreyEye
  fill(50);
  rect(-100,-100,200,20);
  ellipse(0,-150,80,80);
  //BlackEye
  fill(0);
  ellipse(0,-150,50,50);
  //OrangeHead
  fill(255,102,0);
  rect(-100,-120,30,20);
  rect(-60,-120,30,20);
  rect(70,-120,30,20);
  //WhiteEye
  fill(255);
  ellipse(-15,-165,15,15);
  
  //Text
  noStroke()
  fill(0);
  textSize(20)
  text("BB-8",-350,-200)
  text("Resistance Droid",-350,-220)
  
  //OrangeBall
  noStroke()
  fill(255,102,0)
  quad(-20,-30,20,-30,15,10,-15,10)
  rotate(180)
  translate(0,-100)
  quad(-20,-30,20,-30,15,10,-15,10)
  rotate(90)
  translate(50,-50)
  quad(-20,-30,20,-30,15,10,-15,10)
  rotate(-180)
  translate(0,-100)
  quad(-20,-30,20,-30,15,10,-15,10)
}