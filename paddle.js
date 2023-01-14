class paddle{
    constructor(xpos,ypos){
		this.xPos = xpos;
		this.yPos = ypos;
		this.height = 180;
        this.width = 70;
		this.color= 'white';
		this.markedForDeletion = false;
	}
    init(canvas){
		this.resize(canvas);	
	}
	resize(canvas){
		
	}
    update(canvas){
        
        if(actionKeys.includes('w') && this.yPos>50){
             this.yPos -= .1;
        }
		
        if(inactionKeys.includes('s')&& this.yPos+this.height<canvas.height-20){
            this.yPos += .1
        }
		
		
	}
    render(ctx){
		ctx.fillStyle = this.color;
		ctx.fillRect(this.xPos,this.yPos,this.width,this.height);
	}
}
class InputHandler{
    constructor(){
    
    
    addEventListener('keydown', e=>{
       if( e.key === 'w' ){
            if(actionKeys.includes('w')){}
            else{
            actionKeys.push(e.key); }
        }
       if(e.key === 's'){
            if(inactionKeys.includes('s')){}
            else{
            inactionKeys.push(e.key);
            }
       }
       
    });
    addEventListener('keyup', e=>{
        if( e.key === 'w' ){
         actionKeys.splice(0,actionKeys.length);
        
        }
        if(e.key === 's'){
            inactionKeys.splice(0,inactionKeys.length);
        }

       
     });

    }
}