class LevelOne extends Phaser.Scene {
    constructor() {
        super('levelOneScene')
    }

    create() {
 
        this.lava = this.physics.add.sprite(game.config.width/2+200, game.config.height/2+205,'floor').setScale(2).setVisible(false).setImmovable(true)
        this.floor = this.physics.add.sprite(game.config.width/2-190, game.config.height/2+190,'floor').setScale(3).setImmovable(true)
        this.floor1 = this.physics.add.sprite(game.config.width/3+60, game.config.height/2+190,'floor').setScale(3).setImmovable(true)
        this.floor4 = this.physics.add.sprite(game.config.width/3+420, game.config.height/2+190,'floor').setScale(3).setImmovable(true)
        this.movingfloor = this.physics.add.sprite(game.config.width/2 + 120, game.config.height/2+67,'platform').setScale(2).setImmovable(true)
        this.floor2 = this.physics.add.sprite(game.config.width/2 + 320, game.config.height/2+70,'floor').setScale(3).setImmovable(true)
        this.floor3 = this.physics.add.sprite(game.config.width/8+20, game.config.height/2+70,'floor').setScale(3).setImmovable(true)
        this.floor3.body.checkCollision.down = false
        this.floor2.body.checkCollision.down = false
        this.floor3.body.checkCollision.down = false
        this.movingfloor.body.checkCollision.down = false
        this.movingFloorVelocity = -100
        this.movingfloor.setVelocityX(this.movingFloorVelocity).setBounceX(1)
        
        this.floorGroup = this.add.group([this.floor, this.floor1, this.floor4])
        
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyI = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
        keyK = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);
        keyJ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
        keyL = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);
        keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        keySHIFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);
        keyRESTART = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyB = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
        this.playerOne = new Player(this,game.config.width/19, game.config.height-80,'playerone',0).setScale(2).setFlip(true)
        this.playerTwo = new PlayerTwo(this,game.config.width+20, game.config.height/2,'playertwo',0).setScale(2)
        this.playerOne.setGravityY(1000).setCollideWorldBounds(true)
        this.playerTwo.setGravityY(1000).setCollideWorldBounds(true)
        this.playerOne.setBodySize(14,25)
        this.playerTwo.setBodySize(14,25)
        this.gameover = false
    
        this.physics.add.collider(this.playerOne,this.floorGroup, ()=> {
            this.playerOne.canGoDown = false
            this.playerOne.isJumping = false
        })
        this.physics.add.collider(this.playerTwo,this.floorGroup, ()=> {
            this.playerTwo.canGoDown = false
            this.playerTwo.isJumping = false
        })
        
        this.physics.add.collider(this.movingfloor,[this.floor2,this.floor3], ()=> {
            this.movingFloorVelocity =  this.movingFloorVelocity *-1
        })
        
        this.physics.add.collider(this.playerOne, this.floor2, () => {
            this.playerOne.canGoDown = true
            this.playerOne.isJumping = false
            //console.log("touched right floor")
        })
        this.physics.add.collider(this.playerTwo, this.floor2, () => {
            this.playerTwo.canGoDown = true
            this.playerTwo.isJumping = false
            //console.log("touched right floor")
        })
        this.physics.add.collider(this.playerOne, this.floor3, () => {
            this.playerOne.canGoDown = true
            this.playerOne.isJumping = false
            //console.log("touched left floor")
            //console.log("state:", this.playerOne.canGoDown)
            
        })
        this.physics.add.collider(this.playerTwo, this.floor3, () => {
            this.playerTwo.canGoDown = true
            this.playerTwo.isJumping = false
            //console.log("touched left floor")
            //console.log("state:", this.playerOne.canGoDown)
            
        })
        
          
        this.physics.add.collider(this.playerOne,this.movingfloor, ()=> {
            this.playerOne.isJumping = false
            this.playerOne.canGoDown = true
            if (this.playerOne.isMoving == true){
                this.movingfloor.setFrictionX(0)
            }
            else{
                this.movingfloor.setFrictionX(1)
            }
        })  
        this.physics.add.collider(this.playerTwo,this.movingfloor, ()=> {
            this.playerTwo.isJumping = false
            this.playerTwo.canGoDown = true
            if (this.playerTwo.isMoving == true){
                this.movingfloor.setFrictionX(0)
            }
            else{
                this.movingfloor.setFrictionX(1)
            }
        })  
        this.physics.add.collider(this.playerOne,this.lava, ()=> {
            this.playerOne.Died = true
        } )

        this.physics.add.collider(this.playerTwo,this.lava, ()=> {
            this.playerTwo.Died = true
        } )

        this.timer = this.time.delayedCall(30000,()=> {
            this.time.delayedCall(100, ()=> {
               this.gameover = true      
            })
        },this)
        this.timerText = this.add.bitmapText(game.config.width/2-60, game.config.height/2-200,'upheaval_font',this.timer.getRemainingSeconds()).setScale(.8)
    }

    update() {
        if (this.gameover == false) {
            this.timerText.setText(this.timer.getRemainingSeconds().toFixed(2))
            this.movingfloor.setVelocityX(this.movingFloorVelocity)
            this.playerOne.update()
            this.playerTwo.update()

            
          

            if (keyS.isDown){
                if (this.playerOne.canGoDown == true && this.playerOne.isJumping == false){
                    //console.log("it work")
                    this.playerOne.setImmovable(true)
                    this.time.delayedCall(100,()=> {
                        this.playerOne.setImmovable(false)
                        this.playerOne.canGoDown = false
                    })
                }
                else if(this.playerOne.isJumping == true){
                    this.playerOne.setVelocityY(400)
            }
            }
            if (keyK.isDown){
                if (this.playerTwo.canGoDown == true && this.playerTwo.isJumping == false){
                    //console.log("it work")
                    this.playerTwo.setImmovable(true)
                    this.time.delayedCall(100,()=> {
                        this.playerTwo.setImmovable(false)
                        this.playerTwo.canGoDown = false
                    })
                }
                else if(this.playerTwo.isJumping == true){
                    this.playerTwo.setVelocityY(400)
            }
        }
            if (Phaser.Input.Keyboard.JustDown(keySHIFT) && this.playerTwo.isShooting == false) {
                console.log("Fire")
                    this.playerTwo.isShooting = true
                    this.playerTwoBullet = this.physics.add.sprite(this.playerTwo.x,this.playerTwo.y,'orb').setScale(.7)
                    if (this.playerTwo.direction == 'right') {
                    this.playerTwoBullet.setVelocityX(800)
                    }
                    else {
                        this.playerTwoBullet.setVelocityX(-800)
                    }
            }
            if (this.playerTwoBullet) {
                if (this.playerTwoBullet.x > game.config.width || this.playerTwoBullet.x < game.config.width/999){
                    this.playerTwoBullet.destroy()
                    this.playerTwo.isShooting = false
                }
                this.physics.add.collider(this.playerTwoBullet, this.playerOne, ()=> {
                    console.log("HIT")
              
                    this.playerOne.Died = true
                })
                
            }
            if (Phaser.Input.Keyboard.JustDown(keyC) && this.playerOne.isShooting == false) {
                console.log("Fire")
                    this.playerOne.isShooting = true
                    this.playerOneBullet = this.physics.add.sprite(this.playerOne.x,this.playerOne.y,'orb').setScale(.7)
                    if (this.playerOne.direction == 'right') {
                    this.playerOneBullet.setVelocityX(800)
                    }
                    else {
                        this.playerOneBullet.setVelocityX(-800)
                    }
            }
            if (this.playerOneBullet) {
                this.physics.add.collider(this.playerOneBullet, this.playerTwo, ()=> {
                    console.log("HIT")
                  
                    this.playerTwo.Died = true
                })
                if (this.playerOneBullet.x > game.config.width || this.playerOneBullet.x < game.config.width/999){
                    this.playerOneBullet.destroy()
                    this.playerOne.isShooting = false
                }
            }
            if (this.playerOne.Died == true){
                this.add.sprite(this.playerOne.x,this.playerOne.y, 'rip').setScale(5)
                this.gameover = true
            }
            if (this.playerTwo.Died == true){
                this.add.sprite(this.playerTwo.x,this.playerTwo.y, 'rip').setScale(5)
                this.gameover = true
            }
        }
        else{
            this.add.bitmapText(game.config.width/2-180,game.config.height/2-80,'upheaval_font','GAME OVER')
            this.add.bitmapText(game.config.width/2-180,game.config.height/2,'upheaval_font','R to restart').setScale(.8)
            this.add.bitmapText(game.config.width/2-200,game.config.height/2+60,'upheaval_font','B to MainMenu').setScale(.8)
            if (Phaser.Input.Keyboard.JustDown(keyRESTART)){
                this.scene.restart()
            }
            if(Phaser.Input.Keyboard.JustDown(keyB)){
                this.scene.start('loadScene')
            }
            this.playerOne.anims.stop()
            this.playerTwo.anims.stop()
            this.playerOne.setVelocity(0)
            this.playerTwo.setVelocity(0)
            
            this.movingfloor.setVelocity(0)
            if(localStorage.getItem('hiscore') != null) {
                let storedScore = parseInt(localStorage.getItem('hiscore'));
                //console.log(`storedScore: ${storedScore}`);
                // see if current score is higher than stored score
                if(level > storedScore) {
                    //console.log(`New high score: ${level}`);
                    localStorage.setItem('hiscore', level.toString());
                    highScore = level;
                    newHighScore = true;
                } else {
                    //console.log('No new high score :/');
                    highScore = parseInt(localStorage.getItem('hiscore'));
                    newHighScore = false;
                }
            } else {
                //console.log('No high score stored. Creating new.');
                highScore = level;
                localStorage.setItem('hiscore', highScore.toString());
                newHighScore = true;
            }
        }
        
    }

}
