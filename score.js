function scoreRender(ctx){
    ctx.fillStyle='white';
	ctx.font = '50px EightBit Atari-Regular';		
    ctx.fillText(score,canvas.width/2,canvas.height/2);
    ctx.fillText('lives: ' +(lives+1),30,40)
   
    ctx.strokeStyle = 'white'
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(0,49)
    ctx.lineTo(canvas.width,49);
    ctx.stroke()
    }
