/*Kenshin Chao
Rocket Patrol: Bundled Wires
12 Hours
//Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (5) DONE
//Implement a new timing/scoring mechanism that adds time to the clock for successful hits and subtracts time for misses (5) DONE
//Display the time remaining (in seconds) on the screen (3) DONE
//Allow the player to control the Rocket after it's fired (1) DONE
//Create a new title screen (e.g., new artwork, typography, layout) (3) DONE
//Implement the 'FIRE' UI text from the original game (1) DONE
//Implement the speed increase that happens after 30 seconds in the original game (1) DONE
*/
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ],
    render: {
        pixelArt: true
    }
}

let game = new Phaser.Game(config)

let keyFIRE, keyRESET, keyLEFT, keyRIGHT;

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

//Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (5) DONE
//Implement a new timing/scoring mechanism that adds time to the clock for successful hits and subtracts time for misses (5) DONE
//Display the time remaining (in seconds) on the screen (3) DONE
//Allow the player to control the Rocket after it's fired (1) DONE
//Create a new title screen (e.g., new artwork, typography, layout) (3) DONE
//Implement the 'FIRE' UI text from the original game (1) DONE
//Implement the speed increase that happens after 30 seconds in the original game (1) DONE
