var playState = {
	create:function(){
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.add.sprite(0,0,'bg');

		//bilog =game.add.sprite(162,150,'bilog');
		// latas = game.add.group();
		// for (var i = 0; i == 1; i)
		// {
		// 	latas.create(305,140,'lata');
		// };

		tapa = game.add.group();

		tapa.enableBody =  true;
		tapa.physicsBodyType = Phaser.Physics.ARCADE;
		tapa.createMultiple(0,'pamato');
		tapa.setAll('anchor',0.5);
		tapa.setAll('anchor',1);
		tapa.setAll('outOfBoundsKilll', true);
		tapa.setAll('checkWorldBounds', true);
		pamatos = game.add.group();
		pamatos.enableBody = true;
		pamatos.physicsBodyType = Phaser.Physics.ARCADE;

		pamatos.createMultiple(50, 'pamato');
		pamatos.setAll('checkWorldBounds', true);
		pamatos.setAll('outOfBoundsKill', true);


		//lata = game.add.sprite(305,140,'lata');
		guard = game.add.sprite(350,50,'guard');
		//Taga bato ng tsinelas
		player = game.add.sprite(500,714,'tagabato');
		player.anchor.setTo(0.5,0.5);
		game.physics.enable(player, Phaser.Physics.ARCADE);
		///game.physics.enable(lata, Phaser.Physics.ARCADE);
		game.physics.enable(guard, Phaser.Physics.ARCADE);

		// lata.enableBody = true;
		 guard.enableBody = true;
		// tapa.scale.x=0.5;
		// tapa.scale.y=0.5;
		 guard.scale.x=1;
		 guard.scale.y=1;
		// bilog.scale.x=0.3;
		// bilog.scale.y=0.3;
		// lata.scale.x=0.2;
		// lata.scale.y=0.2;
		 player.scale.x=0.4;
		 player.scale.y=0.4;


		scoreText=game.add.text(10,20,"length: 0",{fill: 'ff'} );
	    bestText=game.add.text(10,50,"BEST :"+getBest(),{fill: "000"} );
	    gameText=game.add.text(350,300,"",{fill:"000"});


	    keyboard = game.input.keyboard;


		buhay = game.add.group();
		    //game.add.text(490,6, 'PAMATO: ',{ font: '24px Arial',fill: '#000'});
   
    // for (var i = 0; i < 5; i++){
    //     var pamato = buhay.create(490 +(20*i), 60, 'pamato');
    //         pamato.anchor.setTo(0.5, 0.5);
    //         pamato.angle = 0;
    //         pamato.scale.x = 0.2;
    //         pamato.scale.y = 0.2;
    // }
					  },
	update:function(){
		player.body.velocity.setTo(0,0);

		if(keyboard.isDown(Phaser.Keyboard.A)){
			player.body.velocity.x= -200;
		}
		else if(keyboard.isDown(Phaser.Keyboard.D)){
			player.body.velocity.x= 200;
		}
		if(keyboard.isDown(Phaser.Keyboard.W)){
			ibato();
		}

		guard.body.velocity.setTo(0,0);
		if(keyboard.isDown(Phaser.Keyboard.w)){
			guard.body.velocity
		}
		//game.physics.arcade.collide(lata,pamato,killPamato, null);
					  }
					 }

		// function killPamato(){
		// 	var lata = latas.getFirstExists(false);
		// 	score = score + 1;
		// 	score.text = "SCORE" + score;
		// 	pamato.kill();

		// }
	 // //game.btnpause=game.add.button(450,0,"pause",pauseGame,game,0,0,0);
      // function pauseGame(){
        // }
	//game.input.onDown.add(unpause,game);
	//function unpause(){
	//if(game.paused){
	//if(btplay.getBounds().contains(game.input.x,game.input.y)){
	//game.paused=false;
	//game.pauseMenu.visible-true;
// }
// }
		//function ibato(){
			//if(game.time.now > batoTime){
			//	pamato = pamatos.getFirstExists(false);
			//	if (pamato)
				//{
					//pamato.reset(player.x - 8 , player.y + 8);
					//pamato.body.velocity.y = -400;
					//batoTime = game.time.now + 200;

				//}
		//}
//	}
		function saveBest(value){
		localStorage.setItem('gameStorage',value);

		}
		function getBest(){
		return ((localStorage.getItem('gameStorage') == null)|| 
		(localStorage.getItem('gameStorage')==""))
		?0:localStorage.getItem('gameStorage');
		}
	//}
	
	