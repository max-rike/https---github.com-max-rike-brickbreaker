function spawner(limit){
    limits = limit;
    xposition = canvas.width - (40) ;
    yposition = 10;
    
    for(i = limits;i>0;i--){
       
        bricks.push(new brick(xposition,yposition))
        if(yposition<canvas.height-(85)){
            yposition+=(85);
        }
        else{
            xposition -= (40);
            yposition = 10;
        }
    }


}