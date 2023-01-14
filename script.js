let gameloop = new GameLoop();
let input = new InputHandler();
let settingPage = new SettingPage();
let ball = new Ball();
let paddl = new paddle(30,400);
let bricks = [];
actionKeys = [];
inactionKeys = [];



gameloop.init = function(){
	ball.init(gameloop.canvas);
 
}
gameloop.update = function(){
	if(bricks.length>0){
		for(j=40; j >=0;j--){
			
		ball.update(canvas);
		paddl.update(canvas);
		for(i=0;i<bricks.length;i++){
			bricks[i].update(canvas);
		}
		}
	}
}
gameloop.render = function(){
	gameloop.ctx.fillStyle = '#1bafbd'
	gameloop.ctx.fillRect(0,0,gameloop.canvas.width,gameloop.canvas.height);
	ball.render(gameloop.ctx);
	paddl.render(gameloop.ctx);
	for(let i = 0; i < bricks.length; i++){
		bricks[i].render(gameloop.ctx);
		
	}
	
	
}
gameloop.resize = function(){
	ball.resize(gameloop.canvas);
}

window.onload = function(){
	
}

window.onresize = function() {
	gameloop.onresize();
}

function startGame(){
	console.log('startGame')
	gameloop.start();
	if(bricks.length===0){spawner(1);}
}
function settings(){
	console.log('startsettings')
	settingPage.startSettings();
}
function returnToMain(){
	settingPage.endSettings();
}
