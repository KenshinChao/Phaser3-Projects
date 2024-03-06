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
    this.title = this.add.bitmapText(game.config.width/150, game.config.height/6,'upheaval_font','COMPETITIVE GAME').setScale(.7)
    this.startText = this.add.bitmapText(game.config.width/2-70, game.config.height/2,'upheaval_font','PRESS SPACE TO START').setScale(.2)
    this.playerOneWText = this.add.bitmapText(game.config.width/2-180, game.config.height/2+80,'upheaval_font','W').setScale(.4)
    this.playerOneAText = this.add.bitmapText(game.config.width/2-200, game.config.height/2+100,'upheaval_font','A').setScale(.4)
    this.playerOneSText = this.add.bitmapText(game.config.width/2-180, game.config.height/2+100,'upheaval_font','S').setScale(.4)
    this.playerOneDText = this.add.bitmapText(game.config.width/2-160, game.config.height/2+100,'upheaval_font','D').setScale(.4)
    this.playerOneShoot = this.add.bitmapText(game.config.width/2-220, game.config.height/2+125,'upheaval_font',"TO SHOOT : C").setScale(.2)


    this.playerTwoIText = this.add.bitmapText(game.config.width/2+180, game.config.height/2+80,'upheaval_font','I').setScale(.4)
    this.playerTwoJText = this.add.bitmapText(game.config.width/2+160, game.config.height/2+100,'upheaval_font','J').setScale(.4)
    this.playerTwoKText = this.add.bitmapText(game.config.width/2+180, game.config.height/2+100,'upheaval_font','K').setScale(.4)
    this.playerTwoLText = this.add.bitmapText(game.config.width/2+200, game.config.height/2+100,'upheaval_font','L').setScale(.4)
    this.playerTwoShoot = this.add.bitmapText(game.config.width/2+120, game.config.height/2+125,'upheaval_font',"TO SHOOT : SHIFT").setScale(.2)

    this.cursors = this.input.keyboard.createCursorKeys()
}

update() {
    // wait for player input
    if(Phaser.Input.Keyboard.JustDown(this.cursors.space)) {
        this.scene.start("levelOneScene")
    }
}


}