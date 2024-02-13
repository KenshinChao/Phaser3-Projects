//this is where you create the cat
class Cat extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)
        scene.add.existing(this)
        scene.physics.add.existing(this)
        this.body.setCollideWorldBounds(true)
        this.isJumping = false
        this.body.setSize(this.width / 2 * 1.3, this.height / 2)
        //test
    }

}
