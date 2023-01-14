let gameloop = new GameLoop();
let input = new InputHandler();
let settingPage = new SettingPage();
let brickCount = 96
let paddl = new paddle(30,400);
let balls = [];
let bricks = [];
actionKeys = [];
inactionKeys = [];



gameloop.init = function(){
	for(i=0;i<balls.length;i++){
	balls[i].init(gameloop.canvas);
	}
 
}
gameloop.update = function(){
	if(bricks.length>0){
		for(j=40; j >=0;j--){
		for(i=0;i<balls.length;i++){	
		balls[i].update(canvas);
		}
		paddl.update(canvas);
		for(i=0;i<bricks.length;i++){
			bricks[i].update(canvas);
		}
		}
	}
	else{
		balls.splice(0,balls.length)
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
