let gameloop = new GameLoop();
let input = new InputHandler();
let settingPage = new SettingPage();
let brickCount = 20;
let score = 0;
let paddl = new paddle(30,400);
let balls = [];
let bricks = [];
actionKeys = [];
inactionKeys = [];

//next update the spawner to more randomized set ups, and when a limit of bricks are spawned bricks start getting more health
//put a breif break in between levels  balls speed up netween levels or over time
//balls ocasionally break two bricks
gameloop.init = function(){
	for(i=0;i<balls.length;i++){
	balls[i].init(gameloop.canvas);
	}
 
}
gameloop.update = function(){
	if(bricks.length>0){
		for(j=40; j >=0;j--){
		for(k=0;k<balls.length;k++){
			if(balls[k].markedForDeletion===true)balls.splice(k,1)
			else balls[k].update(canvas)
		}
		paddl.update(canvas);
		for(i=0;i<bricks.length;i++){
			bricks[i].update(canvas);
		}
		}
	}
	else{
		if(balls.length>1)balls.splice(1,balls.length-1)
		
		console.log(balls.length)
		Reset();
	}
}
gameloop.render = function(){
	gameloop.ctx.fillStyle = '#1bafbd'
	gameloop.ctx.fillRect(0,0,gameloop.canvas.width,gameloop.canvas.height);
	for(i=0;i<balls.length;i++){
	balls[i].render(gameloop.ctx);
	}
	paddl.render(gameloop.ctx);
	for(let i = 0; i < bricks.length; i++){
		bricks[i].render(gameloop.ctx);
		
	}
	
	scoreRender(gameloop.ctx)
	
}
gameloop.resize = function(){
	for(i=0;i<balls.length;i++){
	balls[i].resize(gameloop.canvas);
	}
}

window.onload = function(){
	
}

window.onresize = function() {
	gameloop.onresize();
}

function startGame(){
	console.log('startGame')
	gameloop.start();
	if(bricks.length===0){spawner(brickCount);}
	balls.push(new Ball(canvas.width/2,canvas.height/2,.12,.12));
}
function settings(){
	console.log('startsettings')
	settingPage.startSettings();
}
function returnToMain(){
	settingPage.endSettings();
}
