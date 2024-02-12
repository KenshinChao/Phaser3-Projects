// ENDLESS RUNNER
// Name: Kenshin Chao

/*
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
    }
    },
    scene: [ Menu, Play ]
}



let game = new Phaser.Game(config)

let keyFIRE, keyRESET, keyLEFT, keyRIGHT;

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
*/

'use strict'

const config = {
    parent: 'phaser-game',  // for info text
    type: Phaser.WEBGL,     // for tinting
    width: 400,
    height: 300,
    pixelArt: true,
    zoom: 2,
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    },
    scene: [ Load, MainMenu, Play ]
}

const game = new Phaser.Game(config)

let keySTART