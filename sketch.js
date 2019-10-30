//This is a simple template for you to experiment with

//This is a comment  ... the two slashes at the start mean that the computer ignores it

//You can look up more commands here ... https://p5js.org/reference/

function setup()
{
    //this function runs once at the start of your program
    
    //this command creates a drawing area in the browser - it should only be called once
    createCanvas(1000, 480);
}

//Global variable
var changingVariable = -1; 

function draw()
{
    var xReferencePoint = 500;
    
    background(255,255,255);
    
    //Black rectangle
    fill(0,0,0);
    rect(xReferencePoint + (400*changingVariable), 50, 25, 800);
    
    //Blue square
    fill(47,86,233);
    if (changingVariable > 0){
        rect(xReferencePoint + (368*changingVariable), 215, 90, 90);   
    }else{
        rect(xReferencePoint + (432*changingVariable), 215, 90, 90);
    }
    
    //Black circle
    fill(0,0,0);
    circle(xReferencePoint - (400*changingVariable),260,30);

}

//Function to reverse the image when any key is pressed
function keyPressed(){
        if (changingVariable > 0){
            changingVariable = -1;
        } else{
            changingVariable = 1;
        }
}