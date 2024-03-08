class Credits extends Phaser.Scene {
    constructor() {
        super('creditScene')
    }

    init() {
        console.log('Credit: init')
    }

    create(){
        keyB = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);

        this.add.bitmapText(game.config.width/2-180,game.config.height/2-100,'upheaval_font','Programming: Kenshin Chao').setScale(.2)
        this.add.bitmapText(game.config.width/2-180,game.config.height/2-80,'upheaval_font','move sound: Creator Assets').setScale(.2)
        this.add.bitmapText(game.config.width/2+90,game.config.height/2+100,'upheaval_font','Back (B)').setScale(.2)
    }

    update() {
        
        if(Phaser.Input.Keyboard.JustDown(keyB)) {
            this.scene.start('loadScene')
        }
    
    }

}