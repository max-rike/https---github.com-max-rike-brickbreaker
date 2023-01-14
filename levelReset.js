function Reset(){
    
    balls[0].xPos = canvas.width/2
    balls[0].yPos = canvas.height/2
    
    brickCount += 12
    spawner(brickCount);
    

}

function BallDoubler(xpos,ypos,x,y){
    DoublerX = xpos;
    Doublery = ypos;
    xVel = x;
    yVel = y;
    yVel = yVel *-1;
    balls.push(new Ball(DoublerX,Doublery,xVel,yVel))
    console.log(balls)
}