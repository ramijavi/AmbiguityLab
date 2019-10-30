//This is a simple template for you to experiment with

//This is a comment  ... the two slashes at the start mean that the computer ignores it

//You can look up more commands here ... https://p5js.org/reference/

function setup()
{
    //this function runs once at the start of your program
    
    //this command creates a drawing area in the browser - it should only be called once
    createCanvas(600, 600);
}

var whatToShow = 0;

function draw()
{   
    //this command clears the background to black (try changing the numbers)
    background(255,255,255);
    
    if(whatToShow == 1){
        strokeWeight(1);
    
        fill(48,68,249);
        rect(200,200,200,200);

        fill(178,219,255);
        quad(200,200,280,120,480,120,400,200);
        quad(480,120,400,200,400,400,480,320);
    }
    
    if(whatToShow == 2){
        strokeWeight(1);
    
        fill(178,219,255);
        quad(280,120,280,320,200,400,200,200);
        fill(101,168,226);
        quad(200,400,280,320,480,320,400,400);
    }
    
    strokeWeight(3);
    
    line(200,200,200,400);
    line(200,400,400,400);
    line(400,400,400,200);
    line(400,200,200,200);
    
    line(280,120,280,320);
    line(280,320,480,320);
    line(480,320,480,120);
    line(480,120,280,120);
    
    line(200,200,280,120);
    line(200,400,280,320);
    line(400,400,480,320);
    line(400,200,480,120);
    
     if(whatToShow == 1){
        strokeWeight(2.5);
    
        fill(48,68,249);
        rect(200,200,200,200);
    }
    
    if(whatToShow == 2){
        strokeWeight(2.5);
        
        fill(48,68,249);
        rect(280,120,200,200);
    }

}

function keyPressed(){
    if (whatToShow == 1){
        whatToShow = 2;
    } else if (whatToShow == 2){
        whatToShow = 0;
    } else {
        whatToShow = 1;
    }
}