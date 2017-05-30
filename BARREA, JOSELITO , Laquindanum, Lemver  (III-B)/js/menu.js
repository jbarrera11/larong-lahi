var menuState = {
	create: function(){
		game.add.sprite(0,0,'bg');

		var nameLabel1 = game.add.text(80,80,'Tsato Game',{fill:'#FFF'});

		var StartLabel = game.add.text(60, game.world.height - 50,'Press the "SPACEBAR" to START',{fill:'#FFF'});

		var wkey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		wkey.onDown.addOnce(this.start, this);
	},

	start:function(){
		game.state.start('play')
		//console.log('PLAY')
	}
};