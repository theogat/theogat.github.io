class StartScene extends Phaser.Scene {
	constructor() {
		super({ key: 'StartScene' })
	}

	create() {
    console.log(window.devicePixelRatio);
		this.add.text( config.width/2-250, config.height/2-200, 'Theodoros Gatsios\' C.V.\n\nGame Version', {fill: '0x000000', fontFamily: 'Ubuntu', fontSize: '40px', align: 'center'})
		this.add.text( config.width/2-180, config.height/2+100, 'Jump: Space\nUp/Down/Left/Right: Arrows', {fill: '0x000000', fontFamily: 'Ubuntu', fontSize: '25px', align: 'center'})
		this.input.on('pointerdown', () => {
			this.scene.stop('StartScene')
			this.scene.start('Level1')
		})
	}
}

