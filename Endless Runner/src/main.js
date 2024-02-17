// Boba Run
// Name: Kenshin Chao
// Hours: 30
/*
Something cool this game does is that every time you jump, the game gets faster and harder as u progress. As in the spikes get faster and the boba somewhat obstructs your chance to 
live by blocking you for a nano second
I'm proud of the way I made the art. I'm not good at drawing, especially in pixel art. However, I love the look of the cat 
and how smooth the animation is by utilizing the frame names I saw in class.


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
            debug: false
        }
    },
    scene: [ Load, MainMenu, Credits, Play ]
}

const game = new Phaser.Game(config)

let keySTART