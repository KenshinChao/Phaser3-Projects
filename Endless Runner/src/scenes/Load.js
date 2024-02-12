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
            this.scene.loadingCat = this.add.sprite(game.config.width/2, game.config.height/2 - 80, 'loadingCat').setScale(3).play('loading')
        // hero animations (walking)
        /*
        this.anims.create({
            key: 'walk-down',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('hero', { start: 0, end: 3 }),
        })*/

        //adding circular attack ex.
        /*
        this.anims.create({
            key: 'circular-attack',
            frameRate: 24,
            repeat: 0,
            frames: this.anims.generateFrameNames('hero', {
                frames: [16, 16, 16, 17, 18, 24, 25, 26, 21, 22, 30, 29, 28, 18, 19, 19 ,19]
            })
        })*/
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
        this.clock = this.time.delayedCall(2000, () => {this.scene.start('menuScene')})
        
        //this.scene.start('menuScene')
    }
}