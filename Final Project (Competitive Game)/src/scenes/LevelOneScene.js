class LevelOne extends Phaser.Scene {
    constructor() {
        super('levelOneScene')
    }

    create() {
        this.floor = this.physics.add.sprite(game.config.width/2-190, game.config.height/2+190,'floor').setScale(3)
        this.floor1 = this.physics.add.sprite(game.config.width/3+60, game.config.height/2+190,'floor').setScale(3)
        this.floor4 = this.physics.add.sprite(game.config.width/3+420, game.config.height/2+190,'floor').setScale(3)
        this.movingfloor = this.physics.add.sprite(game.config.width/2 + 120, game.config.height/2+67,'platform').setScale(2)
        this.floor2 = this.physics.add.sprite(game.config.width/2 + 320, game.config.height/2+70,'floor').setScale(3)
        this.floor3 = this.physics.add.sprite(game.config.width/8+20, game.config.height/2+70,'floor').setScale(3)
        
        
    }

    update() {
        
    }

}
