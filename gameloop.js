class GameLoop{
	constructor(){
		this.fps = 90;
		this.ctx = null;
		this.canvas = null;
		this.loop = null;
	}
	prepareCanvas(){
	this.canvas = document.getElementById('canvas');
	this.ctx = canvas.getContext('2d');
	document.body.style.padding = 0;
	document.body.style.margin = 0;
	this.onresize();
	}
	
	start(){
		if(gameStarted===true){
		this.toggleScreen('start-screen',false);
		this.toggleScreen('canvas',true);
		}
		else {
		this.toggleScreen('start-screen',false);
		this.toggleScreen('canvas',true);
		this.prepareCanvas();
		this.init();
		gameStarted = true
		this.loop = setInterval(() => {
		if(breakOn===false)	this.update();
		else{
			if(breakCount<timeBreak){
				breakCount++
				console.log(4-Math.round((24+breakCount)/50))
			}
			else if(breakCount>= timeBreak){
				breakCount = 0;
				breakOn = false;
				if(lives>=0 && balls.length<=0)balls.push(new Ball(canvas.width/2,this.canvas.height/2, .12,.12))
			}
		}
		this.render();


	},1000/this.fps);}
	}

	toggleScreen(id,toggle){
		let element = document.getElementById(id);
		let display = (toggle) ? 'block' : 'none';
		element.style.display = display;
	}
	onresize(){
		if(this.canvas){
		
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		this.resize(); 
		}
	}

	init(){
		
	}

	resize(){
		
	}
	update(){}
	render(){}
}

class SettingPage{
	startSettings(){
		this.toggleScreen('start-screen',false);
		this.toggleScreen('setting-screen',true);
		console.log('yo')
	}
	endSettings(){
		this.toggleScreen('setting-screen',false);
		this.toggleScreen('start-screen',true);
		console.log(':)');
	}
	toggleScreen(id,toggle){
		let element = document.getElementById(id);
		let display = (toggle) ? 'block' : 'none';
		element.style.display = display;
	}
}



