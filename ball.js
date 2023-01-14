class Ball{
	constructor(){
		this.xPos = canvas.width/2;
		this.yPos = canvas.height/2;
		this.xVel = .12;
		this.yVel = .12;
		this.size= 30;
		this.color= 'white';
		
	}
	init(canvas){
		this.resize(canvas);	
	}
	resize(canvas){
		this.xPos = (canvas.width - this.size)/2;
		this.yPos = (canvas.height - this.size)/2;
		
	}
	render(ctx){
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.xPos,this.yPos,this.size,0,Math.PI*2,true)
		ctx.fill();
	}
	update(canvas){
		this.yPos += this.yVel;
		this.xPos += this.xVel;
		this.bounce(canvas)
	}
	bounce(canvas){
		if(this.xPos-this.size<0 || this.xPos+this.size>canvas.width)
		{
			this.xVel= this.xVel*-1;
		}
		
		if(this.yPos-this.size < 0 || this.yPos+this.size > canvas.height){
			this.yVel = this.yVel*-1;
		}
		
		if(this.xPos-this.size <= paddl.xPos+paddl.width &&this.xPos-this.size>= paddl.xPos-.5+paddl.width&& (this.yPos>paddl.yPos)&&(this.yPos<paddl.yPos+paddl.height)){
			this.xVel= this.xVel*-1;
		}
		else if(this.yPos-this.size <= paddl.yPos+.5+paddl.height &&this.yPos-this.size>= paddl.yPos-.5+paddl.height&&(this.xPos>=paddl.xPos)&&(this.xPos<=paddl.xPos+paddl.width)){
			if(this.yVel<0){this.yVel= this.yVel*-1;}
			
			}

		else if(this.yPos+this.size <= paddl.yPos+.5 &&this.yPos+this.size>= paddl.yPos-.5&&(this.xPos>=paddl.xPos)&&(this.xPos<=paddl.xPos+paddl.width)){
			if(this.yVel>0){this.yVel= this.yVel*-1;}
		}
		else if(PointWithin(this.xPos,this.yPos,paddl.xPos+paddl.width,paddl.yPos,this.size)){
			if(this.xVel<0){
				this.xVel= this.xVel*-1;
			}
			if(this.yVel>0){
				this.yVel= this.yVel*-1;
			}
			}
		else if(PointWithin(this.xPos,this.yPos,paddl.xPos+paddl.width,paddl.yPos+paddl.height,this.size)){
			if(this.xVel<0){
				this.xVel= this.xVel*-1;
			}
			if(this.yVel<0){
				this.yVel= this.yVel*-1;
			}
			}



		//check top and bottoms of the bricks and the corners
		for(i = 0;i<bricks.length;i++){
			
			if(this.xPos+this.size >= bricks[i].xPos-.5 && this.xPos+this.size <=bricks[i].xPos+.5&&this.yPos+this.size/2>=bricks[i].yPos&&this.yPos+this.size/2<=bricks[i].yPos+bricks[i].height){
				this.xVel= this.xVel*-1;
				bricks[i].markedForDeletion = true
			}
			else if(this.xPos-this.size >= bricks[i].xPos-.5+bricks[i].width && this.xPos-this.size<=bricks[i].xPos+.5+bricks[i].width&&this.yPos+this.size/2>=bricks[i].yPos&&this.yPos+this.size/2<=bricks[i].yPos+bricks[i].height){
				this.xVel= this.xVel*-1;
				bricks[i].markedForDeletion = true
				
			}
			else if((this.yPos-this.size <= bricks[i].yPos+.5+bricks[i].height &&this.yPos-this.size>= bricks[i].yPos-.5+bricks[i].height&&(this.xPos>=bricks[i].xPos)&&(this.xPos<=bricks[i].xPos+bricks[i].width))){
				this.yVel= this.yVel*-1;
				bricks[i].markedForDeletion = true
			}
			else if(this.yPos+this.size <= bricks[i].yPos+.5 &&this.yPos+this.size>= bricks[i].yPos-.5&&(this.xPos>=bricks[i].xPos)&&(this.xPos<=bricks[i].xPos+bricks[i].width)){
				this.yVel= this.yVel*-1;
				bricks[i].markedForDeletion = true
			}
			else if(PointWithin(this.xPos,this.yPos,bricks[i].xPos,bricks[i].yPos,this.size)){
				bricks[i].markedForDeletion = true
				if(this.xVel>0){
					this.xVel= this.xVel*-1;
				}
				if(this.yVel>0){
					this.yVel= this.yVel*-1;
				}
			}
			else if(PointWithin(this.xPos,this.yPos,bricks[i].xPos+bricks[i].width,bricks[i].yPos,this.size)){
				bricks[i].markedForDeletion = true
				if(this.xVel<0){
					this.xVel= this.xVel*-1;
				}
				if(this.yVel>0){
					this.yVel= this.yVel*-1;
				}
			}
			else if(PointWithin(this.xPos,this.yPos,bricks[i].xPos,bricks[i].yPos+bricks[i].height,this.size)){
				bricks[i].markedForDeletion = true
				if(this.xVel>0){
					this.xVel= this.xVel*-1;
				}
				if(this.yVel<0){
					this.yVel= this.yVel*-1;
				}
			}
			else if(PointWithin(this.xPos,this.yPos,bricks[i].xPos+bricks[i].width,bricks[i].yPos+bricks[i].height,this.size)){
				bricks[i].markedForDeletion = true
				if(this.xVel<0){
					this.xVel= this.xVel*-1;
				}
				if(this.yVel<0){
					this.yVel= this.yVel*-1;
				}
			}
		}
		
	}


}
	function PointWithin(x,y,x2,y2,radius){
		var distanceSquared = ((x2-x)*(x2-x)+ (y2-y)*(y2-y));
		
		return distanceSquared <= radius*radius;

		}