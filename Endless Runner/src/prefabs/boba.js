//spike
class Boba extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, roundSpeed) {
        super(scene, x, y, texture)
        this.parentScene = scene;   
        this.parentScene.add.existing(this)
        this.parentScene.physics.add.existing(this)
        this.body.setCollideWorldBounds(false)
        this.setVelocityX(roundSpeed)
        this.outOfRange = false
        //this.setImmovable(); 
        this.setImmovable(false)
        this.newBoba = true
        
        
    }

    update() { 
        

        if(this.x < 200) {
            if (this.newBoba == true){
            this.parentScene.addBoba(this.parentScene, this.parentScene.game.config.width + Phaser.Math.Between(0, 50), this.parentScene.game.config.height/2+94, 'boba', -(this.spikeSpeedForGuy))
            this.newBoba = false
            //console.log('destroyed!')
            }
        }
        }
    }
