class PlayerTwo extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this)
        scene.physics.add.existing(this)
        this.direction = 'left' 
        this.isJumping = false
        this.isMoving = false
        this.canGoDown = false
        this.isShooting = false
        this.Died = false
        this.jumpSoundisPlaying = false
    }

    create() {
    }

    update() {
        
        if (keyI.isDown && keyJ.isDown){
            
            this.isMoving = true
            if (this.isJumping == false){
            this.isJumping = true
            this.setFrame(6)
            this.body.setVelocityY(-500)
            this.body.setVelocityX(-200)
            this.scene.sound.play('jumpsound')            }
        }
        else if (keyI.isDown && keyL.isDown){
            this.isMoving = true
            if (this.isJumping == false){
            this.isJumping = true
            this.setFrame(6)
            this.body.setVelocityY(-500)
            this.body.setVelocityX(200)
            this.scene.sound.play('jumpsound')
            }
        }
        else if (keyL.isDown){
            this.isMoving = true
            //console.log("before direction:",this.direction)
            if (this.direction == 'left'){
                this.direction = 'right'
                this.setFlipX(true)
                //console.log("after direction: Right")
            }
            if (this.isJumping == false){
            this.anims.play('runningplayertwo',true)
            }
            this.body.setVelocityX(200)
        }
        else if (keyJ.isDown){
            this.isMoving = true
            //console.log("before direction:", this.direction)
            if (this.direction == 'right'){
                this.direction = 'left'
                this.setFlipX(false)
                //console.log("after direction: left")
                
            }
            if (this.isJumping == false){
                this.anims.play('runningplayertwo',true)
                }
            this.body.setVelocityX(-200)
            
        }
        else if (keyI.isDown && this.isJumping == false){
            this.isMoving = true
            if (this.isJumping == false){
            this.isJumping = true
            this.setFrame(6)
            this.body.setVelocityY(-500)
            if (this.jumpSoundisPlaying == false) { // Check if sound is not already playing
                this.jumpSoundisPlaying = true
                 this.scene.sound.play('jumpsound')
                this.scene.time.delayedCall(1000,()=>{
                    this.jumpSoundisPlaying = false
                },null,this)
            }
            //this.scene.sound.play('jumpsound')
            }
        }
        else {
            this.isMoving = false
            this.setVelocityX(0)
            this.setFrame(0)
        }
   
       
        
    }

    reset() {

}   
}