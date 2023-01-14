function Reset(){
    brickCount += 12
    spawner(brickCount);
    balls.push(new Ball(canvas.width/2,canvas.height/2),.12,.12)


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