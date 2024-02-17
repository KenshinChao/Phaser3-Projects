/*
jumpy by floraphonic
confirmed sound by obsydianx
pick up sound by pixabay
song by motion array
*/

class Credits extends Phaser.Scene {
    constructor() {
        super('creditScene')
    }

    init() {
    }
    
    create() {
        let menuConfig = {
            fontFamily: 'Courier', 
            fontSize: '14px',
            backgroundColor: '',
            color: '#FFFFFF',
            align: 'left',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.cameras.main.setBackgroundColor('#59cbff')
  
   
    this.add.text(game.config.width/2/2, game.config.height/2-80, 'Art: Kenshin', menuConfig).setOrigin(0.5)
    this.add.text(game.config.width/2/2 + 33, game.config.height/2-60, 'Programming: Kenshin', menuConfig).setOrigin(0.5)
    this.add.text(game.config.width/2/2 + 75, game.config.height/2-40, 'Sounds: Floraphonic, obsydianx', menuConfig).setOrigin(0.5)
    this.add.text(game.config.width/2/2, game.config.height/2-20, 'Art: Kenshin', menuConfig).setOrigin(0.5)
    this.add.text(game.config.width/2/2 + 25, game.config.height/2, 'Music: Motion Array', menuConfig).setOrigin(0.5)
    this.add.text(game.config.width/2/2, game.config.height/2+80, 'Press <- to go back', menuConfig).setOrigin(0.5)
}      

    update(){
        
        if ( this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT).isDown){
            this.sound.play('confirm', { volume: 0.5 });  
            this.scene.start('menuScene')
        }
    }

}