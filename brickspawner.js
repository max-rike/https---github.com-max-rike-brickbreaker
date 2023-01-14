function spawner(limit){
    limits = limit;
    xposition = canvas.width - (40) ;
    yposition = 10;
    
    for(i = limits;i>0;i--){
        HealthBoost = Math.random();
        if(HealthBoost>=.50)health =1;
        else if(HealthBoost>=.20) health = 2;
        else health = 3;
        bricks.push(new brick(xposition,yposition,health))
        if(yposition<canvas.height-(85)){
            yposition+=(85);
        }
        else{
            xposition -= (40);
            yposition = 10;
        }
    }


}