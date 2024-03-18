    class Robot extends Phaser.Physics.Arcade.Sprite {
        constructor(scene, x, y, texture, frame) {
            super(scene, x, y, texture, frame);
            scene.add.existing(this)
            scene.physics.add.existing(this)
            //when to make warning 
            this.side = 'left'
            this.tag = false
            this.robotTimer = this.scene.time.addEvent({
                delay: Phaser.Math.Between(1000, 5000), // Set a random delay between minDelay and maxDelay
                callback: ()=> {
                    //console.log("started")
                    if (this.scene.gameover == false){
                    if (this.side == 'left'){
                    //console.log("normal")
                    this.tag = true
                    this.setVelocityX(200)
                    this.scene.time.delayedCall(500, ()=> {
                    this.setVelocityX(0)
                    this.scene.time.delayedCall(500, ()=> {
                    this.setVelocityX(-200) 
                    this.scene.time.delayedCall(500, ()=> {
                        this.setVelocityX(0)
                        this.robotTimer.delay =  Phaser.Math.Between(1000, 5000);
                        this.tag = false
                        //console.log("finished")
                        })
                    })
                })
                }
                else {
                    //console.log("it broke")
                    this.tag = true
                    this.setVelocityX(-200)
                    this.scene.time.delayedCall(500, ()=> {
                    this.setVelocityX(0)
                    this.scene.time.delayedCall(500, ()=> {
                    this.setVelocityX(200) 
                    this.scene.time.delayedCall(500, ()=> {
                        this.setVelocityX(0)
                        this.robotTimer.delay =  Phaser.Math.Between(1000, 5000);
                        this.tag = false
                        })
                    })
                })
            }
        }
            },
                callbackScope: this.scene,
                loop: true // If you want the timer to repeat
            });
        }

    }
