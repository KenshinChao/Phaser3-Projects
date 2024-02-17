class MainMenu extends Phaser.Scene {
    constructor() {
        super('menuScene')
    }

    init() {
        //console.log('menu Scene: init')
    }
    
    create() {
        keySTART = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        let menuConfig = {
            fontFamily: 'Courier', 
            fontSize: '14px',
            backgroundColor: '',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.cameras.main.setBackgroundColor('#59cbff')
  
    this.add.image(game.config.width/2-70, game.config.height/2-65, 'boba').setScale(1)
    this.add.image(game.config.width/2, game.config.height/2-50, 'bobarun').setScale(7)
        //this.add.text(game.config.width/2, game.config.height/2-40, 'BOBA RUN', menuConfig).setOrigin(0.5)
    this.add.text(game.config.width/2/2 + 100, game.config.height/2 + 70, 'Up arrow to start!', menuConfig).setOrigin(0.5)
    this.add.image(game.config.width/2/2, game.config.height/2 + 70, 'arrow')
    this.add.text(game.config.width/2/2 + 100, game.config.height/2 + 100, 'Right arrow to Credits', menuConfig).setOrigin(0.5)
          //console.log('menu Scene: create')



    }

    update(){
        
        if (keySTART.isDown){
            this.sound.play('confirm', { volume: 0.5 });         // play confirm
            this.scene.start('playScene')
        }
        if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT).isDown){
            this.sound.play('confirm', { volume: 0.5 });  
            this.scene.start('creditScene')
            
        }
    }

}