class LevelOne extends Phaser.Scene {
    constructor() {
        super('levelOneScene')
    }

    create() {
 

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
        this.playerOne = new Player(this,game.config.width/19, game.config.height-80,'playerone',0).setScale(2).setFlip(true)
        this.playerTwo = new PlayerTwo(this,game.config.width+20, game.config.height/2,'playertwo',0).setScale(2)
        this.playerOne.setGravityY(1000).setCollideWorldBounds(true)
        this.playerTwo.setGravityY(1000).setCollideWorldBounds(true)
        
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
    }

    update() {
        if (this.gameover == false) {
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
            }
        }
        
    }

}
