//spike
class Spike extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, roundSpeed) {
        super(scene, x, y, texture)
        this.parentScene = scene;   
        this.parentScene.add.existing(this)
        this.parentScene.physics.add.existing(this)
        this.body.setCollideWorldBounds(false)
        this.setVelocityX(roundSpeed)
        //this.setImmovable(); 
        this.tint = Math.random() * 0xFFFFFF
        this.setImmovable()
        //console.log("speed of spike",roundSpeed)
        this.newSpike = true

        
        
    }

    update() {
        if(this.x < 200) {
    

            // (recursively) call parent scene method from this context
            if (this.newSpike == true){
            this.parentScene.addSpike(this.parentScene, this.parentScene.game.config.width + Phaser.Math.Between(0, 30), this.parentScene.game.config.height/2+94, 'spike', -(this.roundSpeed))
            this.newSpike = false
            }
        }
        // destroy paddle if it reaches the left edge of the screen
        if(this.x < -this.width) {
            this.destroy();
            //console.log('destroyed!')
        }
        }
    }
