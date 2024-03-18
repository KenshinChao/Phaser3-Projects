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
    this.load.image('floor','./assets/floor.png')    
    this.load.image('platform','./assets/platform.png')
    this.load.image('orb', './assets/orb.png')
    this.load.image('rip','./assets/rip.png')
    this.load.image('robot','./assets/robot.png')
    this.load.audio('jumpsound','./assets/sounds/jump sound.mp3')
    this.load.audio('selection','./assets/sounds/selectionsound.mp3')
}
    create() {

        

        this.anims.create({
            key: 'runningplayerone',
            frameRate: 7,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('playerone', {
                start: 1,
                end: 6  
            })})

        this.anims.create({
                key: 'runningplayertwo',
                frameRate: 7,
                repeat: -1,
                frames: this.anims.generateFrameNumbers('playertwo', {
                    start: 1,
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
    this.cursors = this.input.keyboard.createCursorKeys()
    this.playerOneMenu = this.add.sprite(game.config.width/6, game.config.height/2, 'playershooting').setScale(6).setFlipX(true)
    this.playerOneMenu.play('runningplayerone')
    this.playerTwoMenu = this.add.sprite(game.config.width-70, game.config.height/2, 'playertwo' , 0).setScale(6)
    this.playerTwoMenu.play('runningplayertwoload')
    this.title = this.add.bitmapText(game.config.width/150, game.config.height/6,'upheaval_font','COMPETITIVE GAME').setScale(.7)
    this.startText = this.add.bitmapText(game.config.width/2, game.config.height/2+40,'upheaval_font','START').setScale(.8)
    this.creditsText = this.add.bitmapText(game.config.width/2-60, game.config.height/2+80,'upheaval_font','CREDITS').setScale(.3)
    this.playerOneWText = this.add.bitmapText(game.config.width/2-180, game.config.height/2+80,'upheaval_font','W').setScale(.4)
    this.playerOneAText = this.add.bitmapText(game.config.width/2-200, game.config.height/2+100,'upheaval_font','A').setScale(.4)
    this.playerOneSText = this.add.bitmapText(game.config.width/2-180, game.config.height/2+100,'upheaval_font','S').setScale(.4)
    this.playerOneDText = this.add.bitmapText(game.config.width/2-160, game.config.height/2+100,'upheaval_font','D').setScale(.4)
    this.playerOneShoot = this.add.bitmapText(game.config.width/2-220, game.config.height/2+125,'upheaval_font',"TO SHOOT : C").setScale(.2)

    let basicTween = this.tweens.add({
        targets: this.playerOneMenu,
        scale: { from: 0.1, to: 6 },
        x: {from:game.config.width/9999, to: game.config.width/6 },
        ease: 'Sine.easeInOut',
        duration: 1500,
    })
    let basicTween2 = this.tweens.add({
        targets: this.playerTwoMenu,
        scale: { from: 0.1, to: 6 },
        x: {from:game.config.width, to: game.config.width-70 },
        ease: 'Sine.easeInOut',
        duration: 1500,
    })
    let textin = this.tweens.add({
        targets: this.startText,
        scale: { from: 0.1, to: .8 },
        x: {from: game.config.width/2-40, to: game.config.width/2-90},
        y: {from: game.config.height/2+40, to: game.config.height/2+20},
        ease: 'Sine.easeInOut',
        duration: 600,
    })
    



    this.playerTwoIText = this.add.bitmapText(game.config.width/2+180, game.config.height/2+80,'upheaval_font','I').setScale(.4)
    this.playerTwoJText = this.add.bitmapText(game.config.width/2+160, game.config.height/2+100,'upheaval_font','J').setScale(.4)
    this.playerTwoKText = this.add.bitmapText(game.config.width/2+180, game.config.height/2+100,'upheaval_font','K').setScale(.4)
    this.playerTwoLText = this.add.bitmapText(game.config.width/2+200, game.config.height/2+100,'upheaval_font','L').setScale(.4)
    this.playerTwoShoot = this.add.bitmapText(game.config.width/2+120, game.config.height/2+125,'upheaval_font',"TO SHOOT : SHIFT").setScale(.2)
    this.selected = "levelOneScene"
    this.cursors = this.input.keyboard.createCursorKeys()
    this.tut = this.playerTwoIText = this.add.bitmapText(game.config.width/2+65, game.config.height/2+175,'upheaval_font','Arrow Keys to navigate').setScale(.2)
    this.tut = this.playerTwoIText = this.add.bitmapText(game.config.width/2+100, game.config.height/2+185,'upheaval_font','SPACE to select').setScale(.2)
    // check for local storage browser support
    if(window.localStorage) {
        console.log('Local storage supported');
    } else {
        console.log('Local storage not supported');
    }
}

update() {
    if(Phaser.Input.Keyboard.JustDown(this.cursors.down) && this.selected == "levelOneScene") {
        this.sound.play('selection',{volume: 0.5})
            this.selected = "creditScene"
            let creditsOnSelect = this.tweens.add({
                paused: false,
                targets: this.creditsText,
                scale: { from: 0.3, to: .8 },
                x: {from: game.config.width/2-60, to: game.config.width/2-110} ,
                y: {from: game.config.height/2+80, to: game.config.height/2},
                ease: 'Sine.easeInOut',
                duration: 300,
            }) 
            let startdeselected = this.tweens.add({
                targets: this.startText,
                scale: { from: 0.8, to: .3 },
                x: {from: game.config.width/2-90, to: game.config.width/2-40},
                y: {from: game.config.height/2+20, to: game.config.height/2-20},
                ease: 'Sine.easeInOut',
                duration: 300,
            })
    }
    if(Phaser.Input.Keyboard.JustDown(this.cursors.up) && this.selected == "creditScene"){
        this.sound.play('selection',{volume: 0.5})
        this.selected = "levelOneScene"
        let creditsOnDeelect = this.tweens.add({
            paused: false,
            targets: this.creditsText,
            scale: { from: 0.8, to: .3 },
            x: {from:game.config.width/2-110, to: game.config.width/2-60} ,
            y: {from: game.config.height/2, to: game.config.height/2+80},
            ease: 'Sine.easeInOut',
            duration: 300,
        })
        let startselected = this.tweens.add({
            targets: this.startText,
            scale: { from: 0.3, to: .8 },
            x: {from: game.config.width/2-40, to: game.config.width/2-90},
            y: {from: game.config.height/2-20, to: game.config.height/2+20},
            ease: 'Sine.easeInOut',
            duration: 300,
        })
    }
    // wait for player input
    if(Phaser.Input.Keyboard.JustDown(this.cursors.space)) {
        this.scene.start(this.selected)
    }
}


}