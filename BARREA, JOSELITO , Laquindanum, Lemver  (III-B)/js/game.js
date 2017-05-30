var w = 8000, h = 800;
var scoreText,gameText,bestText,score = 0,pamato;
var batoTime = 0;
var game = new Phaser.Game(w, h, Phaser.CANVAS, 'TP');
var btrestart,btpause,btplay;
game.state.add('boot',bootState);
game.state.add('load',loadState);
game.state.add('menu',menuState);
game.state.add('play',playState);
// game.state.add('win',winState);
// game.state.add('lose',loseState);

game.state.start('boot');