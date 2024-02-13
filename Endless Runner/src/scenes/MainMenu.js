class MainMenu extends Phaser.Scene {
    constructor() {
        super('menuScene')
    }

    init() {
        console.log('menu Scene: init')
    }
    
    create() {
        keySTART = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        let menuConfig = {
            fontFamily: 'Courier', 
            fontSize: '28px',
            backgroundColor: '',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.add.text(game.config.width/2, game.config.height/2, 'hello!', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 + 20, 'press space to start!', menuConfig).setOrigin(0.5)
        console.log('menu Scene: create')
    }

    update(){
        
        if (keySTART.isDown){
            this.scene.start('playScene')
        }
    }

}