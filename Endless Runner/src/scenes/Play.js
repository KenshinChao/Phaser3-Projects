class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
    }

init() {
    //console.log('Play Scene: init')
}

create() {
    this.bgm = this.sound.add('song', { volume: 0.1, loop: true }) 
    this.cameras.main.setBackgroundColor('#59cbff')
    let menuConfig = {
        fontFamily: 'Comic Sans MS', 
        fontSize: '28px',
        backgroundColor: '',
        color: '#000000',
        align: 'left',
        padding: {
            top: 5,
            bottom: 5,
        },
        fixedWidth: 0
    }

    let overConfig = {
        fontFamily: 'Comic Sans MS', 
        fontSize: '200px',
        backgroundColor: '',
        color: '#000000',
        align: 'left',
        padding: {
            top: 2,
            bottom: 2,
        },
        fixedWidth: 0
    }

    /*this.input.keyboard.on('keydown-D', function() {
        this.physics.world.drawDebug = this.physics.world.drawDebug ? false : true
        this.physics.world.debugGraphic.clear()
    }, this)*/

    this.cameras.main.setBounds(0, 0, game.config.width, game.config.height)
    this.physics.world.setBounds(0, 0, game.config.width, game.config.height)
    this.clouds = this.physics.add.sprite(game.config.width/2, game.config.height - (this.game.config.height * .6), 'clouds').setBodySize(1,1)
    this.add.image(game.config.width/2, game.config.height/2, 'floor')
    this.tutDownarrow = this.add.image(game.config.width/2 + 40, game.config.height/2+70, 'arrow').setRotation(3.141592653589793238462643383279502884197) //PI
    this.tutarrow = this.add.image(game.config.width/2 + 40, game.config.height/2 - 25, 'arrow')
    this.tutDownText = this.add.text(game.config.width/2 + 60, game.config.height/2 + 55,'to go down!',{
        fontFamily: 'Comic Sans MS', 
        fontSize: '200px',
        color: '#000000',
        align: 'left',
        fixedWidth: 0
    }).setScale(.1)
    this.tutboba = this.add.image(game.config.width/2 - 80, game.config.height/2 - 25, 'boba').setScale(.4)
    this.tutEatText = this.add.text(game.config.width/2 - 60, game.config.height/2 - 37,'Eat!',{
        fontFamily: 'Comic Sans MS', 
        fontSize: '200px',
        color: '#000000',
        align: 'left',
        fixedWidth: 0
    }).setScale(.1)
    
    this.tutspike = this.add.image(game.config.width/2 + 40, game.config.height/2 + 20, 'spike').setScale(.8)
    
    
    this.tutjump = this.add.text(game.config.width/2 + 60, game.config.height/2 - 40,'to jump!',{
        fontFamily: 'Comic Sans MS', 
        fontSize: '200px',
        color: '#000000',
        align: 'left',
        fixedWidth: 0
    }).setScale(.1)
    this.tutavoid = this.add.text(game.config.width/2 + 60, game.config.height/2,'avoid',{
        fontFamily: 'Comic Sans MS', 
        fontSize: '200px',
        color: '#000000',
        align: 'left',
        fixedWidth: 0
    }).setScale(.1)


    this.tutorialguy = this.physics.add.sprite(game.config.width/2-40, game.config.height/2+85, 'tutorialguy').setScale(1)
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

    
    
    this.scoreboard = this.add.text(20,0,this.score, menuConfig)

    this.physics.add.collider(this.cat, this.bobaGroup, () => {
        this.sound.play('pickup', {volume: 0.6})
        this.hun = this.physics.add.sprite(this.cat.x, this.cat.y, '+100')
        this.bobaGroup.getFirst(true).destroy()
        this.time.delayedCall(500, () => {this.hun.destroy()})
        this.score +=100    
        this.scoreboard.destroy()
        this.scoreboard = this.add.text(20,0,this.score, menuConfig)
    })
   this.color =  0xFF7171  //white = FxFFFFFF
    this.physics.add.collider(this.cat, this.spikeGroup, () => {
        //console.log("hit")
    
        if (this.gameover == false){
        this.lives -= 1
    
        if (this.lives < 1){
        this.add.text(game.config.width/2, game.config.height/2, 'Press Up to Restart',
            overConfig).setOrigin(.5).setScale(.14)
        this.add.text(game.config.width/2, game.config.height/2 + 40, 'Press Left to go Main Menu',
            overConfig).setOrigin(.5).setScale(.1)
            this.gameover = true   
            this.cat.tint = this.color
            this.time.delayedCall(100, () => {
                this.cat.destroy();
            })
        }
         
            
        }

    }, null)
    
    this.gameover = false
    this.lives = 1
    this.started = false
    //console.log(this.started)
 
    this.bgm.play()
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
                this.tutspike.destroy()
                this.tutarrow.destroy()
                this.tutavoid.destroy()
                this.tutjump.destroy()
                this.tutDownarrow.destroy()
                this.tutDownText.destroy()
                this.tutEatText.destroy()
                this.tutboba.destroy()
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
            this.sound.play('jump', { volume: 0.1 }) 
            this.cat.isJumping = true
            this.cat.anims.play('jump')
            this.start = true
            this.roundSpeed += .1
            
    }

    if (this.cursorKeys.down.isDown && this.cat.isJumping == true){
        this.cat.setVelocityY(100)
        //console.log('weee!')
    }
}
    if (this.gameover == true && this.cursorKeys.up.isDown){
        this.scene.restart()
        this.bgm.stop()
    }
    if (this.gameover == true && this.cursorKeys.left.isDown){
        this.scene.start('menuScene')
    }
}

}
