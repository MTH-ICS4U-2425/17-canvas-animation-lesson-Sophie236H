/**
 * ICS4U - Mr. Brash 🐿️
 * 
 * 17 - Canvas Animation
 * 
 * Author: Sophie Holland 
 * 
*/

'use strict';

import Player from "./player.js";
import { CANVAS, CTX, MS_PER_FRAME, KEYS, dino1,dino2,dino3 } from "./globals.js";


function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


// Globals
const HERO = new Player(dino1,25, 230,95,95);
// (dino1,1670,0,95,95,-5,230,95,95)
let ground = new Image();
let ground2 = new Image();
ground.src = "../images/dino_large.png"
ground2.src = "../images/dino_large.png"
ground.x_pos = 0
ground2.x_pos = 1200

let x = 1200
let y = 1200
let z = 1200
let num;
let num2;
let rannn;

//Cactus images
let counter = 0
let cactus1 = new Image()
cactus1.src = "../images/dino_large.png"
let cactus2 = new Image()
cactus2.src = "../images/dino_large.png"
let cactus3 = new Image();
cactus3.src = "../images/dino_large.png"
let space = new Image()
space.src =  "../images/dino_large.png"
let star = new Image()
star.src = "../images/dino_large.png"


// CTX.drawImage(ground,0,102,1300,23,ground2.x_pos,300,2300,23)

let frame_time = performance.now()

// Event Listeners
document.addEventListener("keydown", keypress);

// Disable the context menu on the entire document
document.addEventListener("contextmenu", (event) => { 
  event.preventDefault();
  return false; 
});

/**
 * The user pressed a key on the keyboard 
 */
function keypress(event) {
  if([KEYS.W, KEYS.UP_ARROW, KEYS.SPACE].includes(event.keyCode)){
    HERO.jump()
  }
}


/**
 * The main game loop
 */
function update() {
  counter++
  // Prepare for the next frame
  requestAnimationFrame(update)
  
  /*** Desired FPS Trap ***/
  const NOW = performance.now()
  const TIME_PASSED = NOW - frame_time
  
  if (TIME_PASSED < MS_PER_FRAME) return
  
  const EXCESS_TIME = TIME_PASSED % MS_PER_FRAME
  frame_time = NOW - EXCESS_TIME
  /*** END FPS Trap ***/
  
  // Clear the canvas
  CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
  CTX.drawImage(ground,0,102,2300,23,ground.x_pos,300,2300,23)
  //Draw the ground
    ground.x_pos -= 5
    
    
  if(ground.x_pos <= -1100){
    CTX.drawImage(ground,0,102,1300,23,ground2.x_pos,300,2300,23)
    ground2.x_pos -=5
    if(ground2.x_pos <= -1100){
      ground.x_pos = 0
      ground2.x_pos = 1100
    }
  }


  if(counter >= 20){

    if(z == -50){
      console.log("ici")
      z = 1200
      CTX.drawImage(star,175,0,78,85,z,100,60,90)
    }
    z-=1
    CTX.drawImage(star,175,0,78,85,z,100,60,90)
    if(counter == 20){
      num = randInt(1,3)
    }

    if(num == 1){
      x -= 5
      CTX.drawImage(cactus3,515,0,33,85,x,240,60,90)
    }
    if(num == 2){
      x-=5
      CTX.drawImage(cactus1,850,0,104,95,x,240,100,95)
    }
    if(num == 3){
      x-=5
      CTX.drawImage(cactus2,751,0,50,95,x,240,80,95)
    }
  }

  if(counter == 150){
    rannn = randInt(150,185)
    console.log(rannn)
    CTX.drawImage(star,175,0,78,85,z,100,60,90)
  }
  if(counter >= rannn){
    //if counter is bigger or 150
    if(counter == rannn){
    //when counter is equal to rannn so that it keeps the right pace 
      num2 = randInt(1,3)
    }

    if(num2 == 1){
      y -= 5
      CTX.drawImage(cactus3,515,0,33,85,y,240,60,90)
    }
    if(num2 == 2){
      y-=5
      CTX.drawImage(cactus1,850,0,104,95,y,240,100,95)
    }
    if(num2 == 3){
      y-=5
      CTX.drawImage(cactus2,751,0,50,95,y,240,80,95)
    }

    if(counter >= 435 && y <= 0 && x <= 0){
      // z-=1
      // CTX.drawImage(star,175,0,78,85,z,100,60,90)
      console.log("heeeee")
      y = 1200
      counter = 0
      x = 1200
    }
  }

CTX.drawImage(star,175,0,78,85,z,100,60,90)
  
  // Draw our hero
  HERO.update();
  }

// Start the animation
update()
