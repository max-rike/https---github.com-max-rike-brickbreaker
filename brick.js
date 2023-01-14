class brick{
    constructor(xpos,ypos,health){
		this.xPos = xpos;
		this.yPos = ypos;
		this.health = health;
		this.height = 75;
        this.width = 30;
		this.color= 'white';
		this.markedForDeletion = false;
		this.beenHit = false;
		
	}
    init(canvas){
		this.resize(canvas);	
	}
	resize(canvas){
		
	}
    update(canvas){
		if (this.health <= 0) this.markedForDeletion= true;
        if(this.markedForDeletion===true){
            bricks.splice(i,1);
        }
		if(this.beenHit===true)this.beenHit=false;
    }
    render(ctx){
		if(this.health===3) this.color = 'black'
		else if(this.health === 2) this.color = 'brown'
		else this.color = 'white';
		ctx.fillStyle = this.color;
		ctx.fillRect(this.xPos,this.yPos,this.width,this.height);
	}
}