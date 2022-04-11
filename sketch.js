let flowers = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
   background(50);
  angleMode(DEGREES);
}

function mousePressed(){
  // let r = random (80,100);
  let b = new Flower(mouseX,mouseY);
  flowers.push(b); 
}


function draw() {
 
 for (let i = 0; i< flowers.length; i++){
 flowers[i].draw();
 }
  title(); 
  }

function title(){
  textSize(20);
  fill(255);
  textFont('Courier-Oblique');
  text('click to plant flowers!', windowWidth/9, 70);
}

//각기 다른 꽃 그리기
class Flower {
  constructor(x,y,r){
    this.x = x;
    this.y = y; 
    this.r = random(8,35);
    this.s = random(1,3);
    this.colvary = random(150,255);
    
    this.stem = random(65,120);
    this.alpha = random(150,255);
    this.leafSize = 26;
    this.leafWidth = 13;
   
    
  
  }

    draw() {
      noStroke(); 
      
      //stem and leaf
      fill(255);
      rect(this.x-11,this.y-10,this.s * 2,this.stem);
      ellipse(this.x + 3 , this.y+ this.stem/2, 26, 13);
    
      
      
      
      //petals
      fill(255,random(255),random(255),this.alpha);
      ellipse(this.x,this.y,this.r*2);
      ellipse(this.x-15,this.y+5,this.r*2);
      ellipse(this.x-25,this.y-5,this.r*2);
      ellipse(this.x-17,this.y-20,this.r*2);
      ellipse(this.x,this.y-15,this.r*2);
    
      // for (let i = 0; i <10; i++){
      //   ellipse(this.x.this.y,this.r, this.r);
      //   rotate(PI/5);
      // }
    
   
      //bud
      fill(255,this.colvary,0);
      ellipse(this.x-12,this.y-7,24,20);
      
      
      
    }
  }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


//function mousePressed(){
// flower(mouseX,mouseY,random(80,100));
//}
// function drawFlower(x,y,diameter){
//   diameter = random(50,100);
//   fill(0,200,255); 
//   rect(x-10,y-10,20,150);  

//   fill(255,0,255);
//   ellipse(x,y,diameter,diameter);
// }
