function setup() {
    createCanvas(400, 400);
    background("purple");
  }
  
  function draw() {
    stroke("yellow");
    fill("red");
    
    if(mouseIsPressed) {
      rect(mouseX, mouseY, 20, 20);
    }
  }