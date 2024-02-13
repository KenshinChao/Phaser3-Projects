class Load extends Phaser.Scene {
    constructor() {
        super('loadScene')
    }

    init() {
        console.log('Load: init')
    }

    preload() {
        // load the visual goodz
        console.log('Load: preload')
        this.load.spritesheet('loadingCat','./assets/spritesheets/loading2.png',{ 
            frameWidth: 32, 
            frameHeight: 32
        })
        console.log('Loaded Spritesheets')
        this.load.image('boba','./assets/boba.png')
        this.load.image('+100','./assets/+100.png')
        this.load.image('clouds','./assets/clouds.png')
        this.load.image('floor','./assets/floor.png')
        this.load.image('spike','./assets/spike.png')
        this.load.image('tutorialguy','./assets/tutorial.png')

        console.log('Loaded Images')
        
    }

    create() {

            console.log('Load Scene: create')
            this.anims.create({
                key: 'loading',
                frameRate: 15,
                repeat: -1,
                frames: this.anims.generateFrameNumbers('loadingCat', {
                    start: 0,
                    end: 4  
                }
                )
            })
            this.anims.create({
                key: 'jump',
                frameRate: 15,
                repeat: 0,
                frames: this.anims.generateFrameNames('loadingCat', {
                    frames: [0, 1, 2, 3, 4, 5, 4, 3, 3, 3, 3]
                })
            })
            this.anims.create({
                key: 'land',
                frameRate: 15,
                repeat: 0,
                frames: this.anims.generateFrameNames('loadingCat', {
                    frames: [3, 2, 1, 0]
                })
            })
            this.scene.loadingCat = this.add.sprite(game.config.width/2, game.config.height/2 - 80, 'loadingCat').setScale(3).play('loading')
        // proceed once loading completes
        this.add.text(game.config.width/2, game.config.height/2, 'Done Loading!', {
            
            fontFamily: 'Courier', 
            fontSize: '28px',
            backgroundColor: '',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }).setOrigin(0.5)
        //turn back on after done
        //this.clock = this.time.delayedCall(2000, () => {this.scene.start('menuScene')})
        
        this.scene.start('menuScene')
    }
}