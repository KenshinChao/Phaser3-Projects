class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
    }

init() {
    console.log('Play Scene: init')
}

create() {

    this.cameras.main.setBackgroundColor('#59cbff')

    this.input.keyboard.on('keydown-D', function() {
        this.physics.world.drawDebug = this.physics.world.drawDebug ? false : true
        this.physics.world.debugGraphic.clear()
    }, this)

    this.cameras.main.setBounds(0, 0, game.config.width, game.config.height)
    this.physics.world.setBounds(0, 0, game.config.width, game.config.height)
    this.clouds = this.physics.add.sprite(game.config.width/2, game.config.height - (this.game.config.height * .6), 'clouds').setBodySize(1,1)
    this.add.image(game.config.width/2, game.config.height/2, 'floor')
    this.add.image(game.config.width/2, game.config.height/2, 'arrow').setScale(1)
    this.tutorialguy = this.physics.add.sprite(game.config.width/2-40, game.config.height/2+85, 'tutorialguy').setScale(1)
    // music
    //this.backgroundMusic = this.sound.add()

    //this.add.sprite(game.config.width/2, game.config.height/2, 'loadingCat')
    this.add.sprite(game.config.width/2, game.config.height/2, 'boba').setOrigin(0,0).setScale(.5)
    this.add.sprite(game.config.width/2, game.config.height/2, '+100').setOrigin(0,0)
    console.log('Play Scene: create')
    this.cursorKeys = this.input.keyboard.createCursorKeys()
    this.cat = new Cat(this, 0, 0,'loadingCat', 0)
    this.cat.body.setOffset(6,16)
    this.cat.setPosition(game.config.width/4,game.config.height/2)
    this.floor = this.physics.add.sprite(0, 0,'floor')

    this.roundSpeed = 50
    this.cat.setGravityY(200)
    this.floor.body.setSize(2000,99)
    this.floor.setY(game.config.height)
    this.floor.setImmovable(true)
    this.physics.add.collider(this.cat,this.floor,(cat, floor) => {
        if (cat.isJumping == true){
            cat.isJumping = false
            //console.log('its not jumping anymore')
            cat.anims.play('land')
        }
    })


    this.score = 0
    this.spikeGroup = this.add.group({
        runChildUpdate: true
    })

    this.bobaGroup = this.add.group({
        runChildUpdate: true
    })


    this.clouds.setVelocityX(-2)
    this.gameover = false
    this.start = false

    let menuConfig = {
        fontFamily: 'Comic Sans MS', 
        fontSize: '28px',
        backgroundColor: '',
        color: '#FFFFFF',
        align: 'left',
        padding: {
            top: 5,
            bottom: 5,
        },
        fixedWidth: 0
    }

    let overConfig = {
        fontFamily: 'Courier', 
        fontSize: '28px',
        backgroundColor: '',
        color: '#FFFFFF',
        align: 'middle',
        padding: {
            top: 2,
            bottom: 2,
        },
        fixedWidth: 0
    }
    
    this.scoreboard = this.add.text(20,0,this.score, menuConfig)

    this.physics.add.collider(this.cat, this.bobaGroup, () => {
        this.hun = this.physics.add.sprite(this.cat.x, this.cat.y, '+100')
        this.bobaGroup.getFirst(true).destroy()
        this.time.delayedCall(2000, () => {this.hun.destroy()})
        //this.cat.x = this.cat.x
        //this.cat.setX(this.cat.x+1)
        this.score +=100    
        this.scoreboard.destroy()
        this.scoreboard = this.add.text(20,0,this.score, menuConfig)
    })

    this.physics.add.collider(this.cat, this.spikeGroup, () => {
        //console.log("hit")
    
        if (this.gameover == false){
        this.lives -= 1
    
        if (this.lives < 1){
        this.add.text(game.config.width/2, game.config.height/2, 'Nice try!',
            overConfig).setOrigin(0.5);
            this.gameover = true
            this.cat.destroy();
        }
        else{
            this.cat.setY(-10)
            this.cat.setVelocity(0)
            this.cat.isJumping = false
            this.cat.tint = this.color
            this.time.delayedCall(500, ()=> {
                this.cat.tint = 0xFFFFFF
            })
        }

    }}, null)
    
    this.gameover = false
    this.lives = 2

    // this.roundclock = this.time.delayedCall(2000, () => {
    //     console.log('its been 2 secs!')
    //     });
    /*this.time.delayedCall(1000, () => { 
        this.addSpike(); 
    });*/
    this.started = false
    console.log(this.started)

    this.color =  0xFF7171
    //white = FxFFFFFF
}

addSpike() {
    let speedVar =  Phaser.Math.Between(0, this.roundSpeed *.8);
    this.spikeSpeedForGuy = -(this.roundSpeed + speedVar)
    let spike = new Spike(this, this.game.config.width + Phaser.Math.Between(0, 30), this.game.config.height/2+94, 'spike', (this.spikeSpeedForGuy)).setScale(.5);
    this.spikeGroup.add(spike);
}

addBoba() {
    let boba = new Boba(this, this.game.config.width + Phaser.Math.Between(0, 100), this.game.config.height/2+65, 'boba', (this.spikeSpeedForGuy)).setScale(.3);
    this.bobaGroup.add(boba);
}

update() {
    
    if (this.gameover == false){
        this.cat.setVelocityX(0)
        if (this.cursorKeys.up.isDown && this.cat.isJumping == false){
            if(this.started == false){
                this.addSpike(); 
                this.addBoba();
                this.started = true
                this.tutorialguy.setVelocityX(this.spikeSpeedForGuy)
                this.time.delayedCall(3000, ()=> {
                    if (this.tutorialguy.x < this.game.config.width){
                        //console.log('he died')
                        this.tutorialguy.destroy()
                    }
                })
            }
            this.cat.setVelocityY(-150)
            this.cat.isJumping = true
            this.cat.anims.play('jump')
            this.start = true
            this.roundSpeed += .1
            
    }
}

    if (this.cursorKeys.down.isDown && this.cat.isJumping == true){
        this.cat.setVelocityY(100)
        //console.log('weee!')
    }
    if (this.gameover == true && this.cursorKeys.up.isDown){
        this.scene.restart()
    }
}

}
