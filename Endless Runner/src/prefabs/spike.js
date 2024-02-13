//spike
class Spike extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)
        scene.add.existing(this)
        scene.physics.add.existing(this)
        this.body.setCollideWorldBounds(false)
        this.roundSpeed = 1
        this.outOfRange = false
    }

    update() {
        this.x -= this.roundSpeed

        if (this.x <= 0 - this.width){
            this.outOfRange = true
        }
        if (this.outOfRange == true){
            this.x = game.config.width + Math.random(0,200)
            this.outOfRange = false
        }
    }
}