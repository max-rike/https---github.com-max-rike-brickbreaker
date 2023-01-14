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
		this.toggleScreen('start-screen',false);
		this.toggleScreen('canvas',true);
		this.prepareCanvas();
		this.init();
		this.loop = setInterval(() => {
		
		this.update();
		this.render();


	},1000/this.fps);
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



