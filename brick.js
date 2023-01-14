class brick{
    constructor(xpos,ypos){
		this.xPos = xpos;
		this.yPos = ypos;
		this.height = 75;
        this.width = 30;
		this.color= 'white';
		this.markedForDeletion = false;
	}
    init(canvas){
		this.resize(canvas);	
	}
	resize(canvas){
		
	}
    update(canvas){
        if(this.markedForDeletion===true){
            bricks.splice(i,1);
        }
    }
    render(ctx){
		ctx.fillStyle = this.color;
		ctx.fillRect(this.xPos,this.yPos,this.width,this.height);
	}
}