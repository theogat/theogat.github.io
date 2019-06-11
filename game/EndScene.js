class EndScene extends Phaser.Scene {
	constructor() {
		super({ key: 'EndScene' })
	}

	create() {
    console.log(window.devicePixelRatio);
		this.add.text( config.width/2-50, config.height/2-50, 'The End', {fill: '0x000000', fontFamily: 'Ubuntu', fontSize: '40px', align: 'center'})
		this.add.text( config.width/2-50, config.height/2+80, '...but just for now', {fill: '0xff0000', fontFamily: 'Ubuntu', fontSize: '25px', align: 'center'});
    this.input.on('pointerdown', () => {
			window.location.href = 'http://www.theogat.info';
		})
}
}
