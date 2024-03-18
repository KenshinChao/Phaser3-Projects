// Competitive Game (Final)
// Name: Kenshin Chao
// Hours: 10

'use strict'

const config = {
    parent: 'phaser-game',  // for info text
    //type: Phaser.WEBGL,     // for tinting
    backgroundColor: 'f0eaff',
    width: 500,
    height: 400,
    pixelArt: true,
    zoom: 1,
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    },
    scale: {
        
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [ Load, Credits, LevelOne ]
}

let highScore;
let newHighScore = false;
let keyA, keyS, keyD, keyW, keyI, keyK, keyJ, keyL, keyC, keySHIFT, keyRESTART, keyB

const game = new Phaser.Game(config)
