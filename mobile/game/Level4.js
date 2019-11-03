class Level4 extends Phaser.Scene {
	constructor(){
		super({ key: 'Level4' })
    this.heights = [5, null, 4, 7, null, 7, null, 5, 4];
	}

	preload() {
    this.load.image('platform4', 'platforms/orangeBook.png');
    this.load.spritesheet('diploma4', 'goals/bsc.png',
      { frameWidth: 790, frameHeight: 535});
    this.load.spritesheet('theo', 'sprites/theo.png', { frameWidth: 72, frameHeight: 100});

    this.load.image('bg8', 'scenes/cities/city4.png');
    console.log('running');
    this.load.image('bg9', 'scenes/buildings/university.png');
    this.load.image('bg3', 'scenes/street.png');
	}


	create() {
    gameState.active = true
    gameState.scoreText = this.add.text(195, 485, 'Score: 0', { fontSize: '15px', fill: '#000000' });

    // Create gameState.bgColor here!
		gameState.bgColor = this.add.rectangle(0, 0, config.width, config.height, 0x00aaff).setOrigin(0, 0);
    //Create Parallax Backgrounds    
    gameState.bg1 = this.add.image(0, 0, 'bg8');
    gameState.bg2 = this.add.image(0, 20, 'bg9');
    gameState.bg3 = this.add.image(0, 0, 'bg3');

    gameState.bg1.setOrigin(0, 0);
    gameState.bg2.setOrigin(0, 0);
    gameState.bg3.setOrigin(0, 0);

    const game_width = parseFloat(gameState.bg3.getBounds().width)
    gameState.width = game_width;
    const window_width = config.width

    const bg1_width = gameState.bg1.getBounds().width
    const bg2_width = gameState.bg2.getBounds().width
    const bg3_width = gameState.bg3.getBounds().width

    if (gameState.bgColor) {
    	gameState.bgColor .setScrollFactor(0);
    }
    
    gameState.bg1.setScrollFactor((bg1_width - window_width) / (game_width - window_width));
    gameState.bg2.setScrollFactor((bg2_width - window_width) / (game_width - window_width));

    gameState.player = this.physics.add.sprite(125, 110, 'theo').setScale(1.3);

    gameState.platforms = this.physics.add.staticGroup();

    //Create Animations
    this.anims.create({
      key: 'run4',
      frames: this.anims.generateFrameNumbers('theo', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'idle4',
      frames: this.anims.generateFrameNumbers('theo', { start: 4, end: 5 }),
      frameRate: 3,
      repeat: -1
    });

    this.anims.create({
      key: 'jump4',
      frames: this.anims.generateFrameNumbers('theo', { start: 2, end: 3 }),
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: 'diploma4',
      frames: this.anims.generateFrameNumbers('diploma4'),
      frameRate: 3,
      repeat: -1
    })


    //Level Setup
    for (const [xIndex, yIndex] of this.heights.entries()) {
      //Create Platforms
      if (typeof yIndex === 'number' && typeof xIndex === 'number') {
        gameState.platforms.create((220 * xIndex),  yIndex * 70, 'platform4').setOrigin(0, 0.5).refreshBody();
      }
    } 
    
    gameState.goal = this.physics.add.sprite(gameState.width - 60, 100, 'diploma4').setScale(0.1);

    this.physics.add.overlap(gameState.player, gameState.goal, function() {
      this.cameras.main.fade(800, 0, 0, 0, false, function(camera, progress) {
        if (progress > .9) {
          this.scene.stop('Level4');
          this.anims.remove;
          console.log(gameState);
          gameState.bg1.remove;
          console.log(gameState);
          this.scene.start('Level5');
        }
      });
    }, null, this);

    this.cameras.main.setBounds(0, 0, gameState.bg3.width, gameState.bg3.height);
    this.physics.world.setBounds(0, 0, gameState.width, gameState.bg3.height + gameState.player.height);

    this.cameras.main.startFollow(gameState.player, true, 0.5, 0.5)
    gameState.player.setCollideWorldBounds(true);

    this.physics.add.collider(gameState.player, gameState.platforms);
    this.physics.add.collider(gameState.goal, gameState.platforms);

    gameState.cursors = this.input.keyboard.createCursorKeys();
  }


	update() {
    if(gameState.active){
      gameState.goal.anims.play('diploma4', true);
      if (gameState.cursors.right.isDown) {
        gameState.player.flipX = false;
        gameState.player.setVelocityX(320);
        gameState.player.anims.play('run4', true);
      } else if (gameState.cursors.left.isDown) {
        gameState.player.flipX = true;
        gameState.player.setVelocityX(-320);
        gameState.player.anims.play('run4', true);
      } else {
        gameState.player.setVelocityX(0);
        gameState.player.anims.play('idle4', true);
      }

      if (Phaser.Input.Keyboard.JustDown(gameState.cursors.space) && gameState.player.body.touching.down) {
        gameState.player.anims.play('jump4', true);
        gameState.player.setVelocityY(-500);
      }

      if (!gameState.player.body.touching.down){
        gameState.player.anims.play('jump4', true);
      }

      if (gameState.player.y > gameState.bg3.height) {
        this.cameras.main.shake(240, .01, false, function(camera, progress) {
          if (progress > .9) {
            this.scene.restart('Level4');
          }
        });
      }
    }
  }
}

