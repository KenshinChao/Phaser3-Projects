// Competitive Game (Final)
// Name: Kenshin Chao
// Hours: 

'use strict'

const config = {
    parent: 'phaser-game',  // for info text
    //type: Phaser.WEBGL,     // for tinting
    width: 500,
    height: 400,
    pixelArt: true,
    zoom: 2,
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
    scene: [ Load ]
}

const game = new Phaser.Game(config)
