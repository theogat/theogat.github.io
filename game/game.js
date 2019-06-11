var gameState = {
  speed: 240,
  ups: 380,
};

const config = {
	type: Phaser.AUTO,
	width: screen.width,
	height: screen.height,
	backgroundColor: "b9baff",
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 800 },
			enableBody: true,
		}
	},
	scene: [StartScene, Level1, Level2, Level3, Level4, Level5, EndScene]
};

const game = new Phaser.Game(config);


