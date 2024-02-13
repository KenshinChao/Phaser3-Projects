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

    //this.add.sprite(game.config.width/2, game.config.height/2, 'loadingCat')
    this.add.sprite(game.config.width/2, game.config.height/2, 'boba').setOrigin(0,0).setScale(.5)
    this.add.sprite(game.config.width/2, game.config.height/2, '+100').setOrigin(0,0)
    console.log('Play Scene: create')
    this.cursorKeys = this.input.keyboard.createCursorKeys()
    this.cat = new Cat(this, 0, 0,'loadingCat', 0)
    this.cat.body.setOffset(6,16)
    this.cat.setPosition(game.config.width/4,game.config.height/2)
    this.floor = this.physics.add.sprite(0, 0,'floor')
    this.cat.setGravityY(200)
    this.floor.body.setSize(2000,99)
    this.floor.setY(game.config.height)
    this.floor.setImmovable(true)
    this.physics.add.collider(this.cat,this.floor,(cat, floor) => {
        if (cat.isJumping == true){

        cat.isJumping = false
        console.log('its not jumping anymore')
        cat.anims.play('land')
        }
    })

    //this.spikes = this.physics.add.sprite(game.config.width/2, game.config.height/2+94, 'spike').setScale(.5)
    this.spike = new Spike(this, game.config.width, game.config.height/2 + 92, 'spike').setScale(.5)
    this.clouds.setVelocityX(-2)
    this.start = false
    this.physics.add.collider(this.cat, this.spike, () => {
        this.scene.restart()
    })
    
}

update() {
    if (this.start == true){
        this.spike.update()
    }

    if (this.cursorKeys.up.isDown && this.cat.isJumping == false){
        this.cat.setVelocityY(-150)
        this.cat.isJumping = true
        this.cat.anims.play('jump')
        this.start = true
        //console.log('weee!')
    }
    if (this.cursorKeys.down.isDown && this.cat.isJumping == true){
        this.cat.setVelocityY(100)
        //console.log('weee!')
    }
    
}
}

