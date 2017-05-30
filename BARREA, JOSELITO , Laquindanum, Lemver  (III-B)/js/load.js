var loadState = {
	preload: function (){
		var loadingLabel = game.add.text(80, 150, 'loading  . . .');

		game.load.image('bg','img/bg.jpg');
		//game.load.image('bg1','img/score1.png');
		game.load.image('tagabato','img/tagabarsak.png');
		//game.load.image('bilog','img/sikrcle.png');
		//game.load.image('lata','img/lata.png');
		//game.load.spritesheet('pamato','img/tsinelas.png',215,215);
		game.load.spritesheet('guard','img/larong lahi.png',140,200);
		 //game.load.spritesheet('button', 'img/buttons.png', 193, 71);
    	game.load.image('background','img/bg.jpg');
    game.load.image('restart','img/restart.png');
    game.load.image('pause','img/pause.png');
    game.load.image('play','img/play.png'); 
   
	},
	create: function(){
		game.add.sprite(0,0,'bg');
		
		game.state.start('menu');
	//	console.log('LOAD')
	}
}