class Load extends Phaser.Scene {
    constructor() {
        super('loadScene')
    }

    init() {
        console.log('Load: init')
    }

    preload() {
    this.load.image('playershooting','./assets/spritesheets/player_shooting.png')
    this.load.spritesheet('playerone', './assets/spritesheets/playerOneSheet.png', {
        frameWidth: 20,
        frameHeight: 25
    })
    this.load.spritesheet('playertwo', './assets/spritesheets/playerTwoSheet.png',{
        frameWidth: 20,
        frameHeight: 25
    }) 
    this.load.bitmapFont('upheaval_font','./assets/font/upheaval.png','./assets/font/upheaval.xml')
    }

    create() {
        this.anims.create({
            key: 'runningplayerone',
            frameRate: 7,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('playerone', {
                start: 0,
                end: 6  
            })})

            this.anims.create({
                key: 'runningplayertwoload',
                frameRate: 8,
                repeat: -1,
                frames: this.anims.generateFrameNumbers('playertwo', {
                    start: 0,
                    end: 7  
                })})

    this.playerOneMenu = this.add.sprite(game.config.width/6, game.config.height/2, 'playershooting').setScale(6).setFlipX(true)
    this.playerOneMenu.play('runningplayerone')
    this.playerTwoMenu = this.add.sprite(game.config.width-70, game.config.height/2, 'playertwo' , 0).setScale(6)
    this.playerTwoMenu.play('runningplayertwoload')

    this.startText = this.add.bitmapText(game.config.width/2, game.config.height/2,'upheaval_font','PRESS SPACE TO START')
    }
}