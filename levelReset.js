function Reset(){
    
    balls[0].xPos = canvas.width/2
    balls[0].yPos = canvas.height/2
    balls[0].xVel = .12;
    balls[0].yVel = .12;
    
    brickCount += 11
    spawner(brickCount);
    

}

function BallDoubler(xpos,ypos,x,y){
    DoublerX = xpos+5;
    Doublery = ypos+5;
    xVel = x;
    yVel = y;
    yVel = yVel *-1;
    balls.push(new Ball(DoublerX,Doublery,xVel,yVel))
    console.log(balls)
}
