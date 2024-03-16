class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this)
        scene.physics.add.existing(this)
        this.direction = 'right' 
        this.isJumping = false
        this.isMoving = false
        this.canGoDown = false
        this.isShooting = false
        this.Died = false
        this.jumpSound = this.scene.sound.add('jumpsound')
    }

    create() {
    }

    update() {
        
        if (keyW.isDown && keyA.isDown){
            this.isMoving = true
            if (this.isJumping == false){
            this.isJumping = true
            this.setFrame(6)
            this.body.setVelocityY(-500)
            this.body.setVelocityX(-200)
            this.scene.sound.play('jumpsound')
            }
        }
        else if (keyW.isDown && keyD.isDown){
            this.isMoving = true
            if (this.isJumping == false){
            this.isJumping = true
            this.setFrame(6)
            this.body.setVelocityY(-500)
            this.body.setVelocityX(200)
            this.scene.sound.play('jumpsound')
            }
        }
        else if (keyD.isDown){
            this.isMoving = true
            //console.log("before direction:",this.direction)
            if (this.direction == 'left'){
                this.direction = 'right'
                this.setFlipX(true)
                //console.log("after direction: Right")
            }
            if (this.isJumping == false){
            this.anims.play('runningplayerone',true)
            }
            this.body.setVelocityX(200)
        }
        else if (keyA.isDown){
            this.isMoving = true
            //console.log("before direction:", this.direction)
            if (this.direction == 'right'){
                this.direction = 'left'
                this.setFlipX(false)
                //console.log("after direction: left")
                
            }
            if (this.isJumping == false){
                this.anims.play('runningplayerone',true)
                }
            this.body.setVelocityX(-200)
            
        }
        else if (keyW.isDown && this.isJumping == false){
            this.isMoving = true
            if (this.isJumping == false){
                //console.log("went in")
                //console.log(this.jumpSound.isPlaying)
            this.isJumping = true
            this.setFrame(6)
            this.body.setVelocityY(-500)
            if (!this.jumpSound.isPlaying) { // Check if sound is not already playing
                this.jumpSound.play(); // Update flag
            }
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