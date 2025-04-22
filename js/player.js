/**
 * player.js
 * 
 * The Player Class
 * 
 * Acts as a sprite or "hero" for the game
 * 
 * Author: Sophie Holland 
*/

import { CTX, CANVAS, GRAVITY, FLOOR, dino1,dino2,dino3} from "./globals.js"
let counter = 0
let letter = ""
export default class Player {
  constructor(image,x, y, width, height) {
    this.width = width;
    this.height = height;
    if(letter == "B"){ this.image = dino3 }
    else 
    this.image = image

    this.position = {
      x: x,
      y: y
    }
    //velocity is speed in pixels
    this.velocity = {
      x: 0,
      y: 0
    };
  }

  //getters to get math value for right side and bottom (to stop from going off screen)
  get right(){ return this.position.x + this.width }
  get bottom(){ return this.position.y + this.height }
  get left(){return this.position.x}
  get top(){return this.position.y}
  set bottom(location){this.position.y = location - this.height}
  set right(location){this.position.x = location - this.width}
  set top(location){this.position.y = location}
  set left(location){this.position.x = location}

  /**
   * Main function to update location, velocity, and image
   */
  update() {
    //add gravity to the hero

    //only add gravity when in the air
    if(this.bottom < FLOOR){
      this.velocity.y += GRAVITY
    }

    //if we hit the floor, stop falling
    if(this.bottom > FLOOR){
      this.velocity.y = 0
      this.position.y = FLOOR - this.height
    }

    //Update the location of the hero
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
    this.draw();
  }

  /**
   * Draw the player on the canvas
   */
  draw() {
    if(counter < 13 ){letter = "A"}
    if(counter >= 13 && counter <= 26) {letter = "B"}
    if(counter >26){ counter = 0}

    if(this.bottom < FLOOR){
      this.image = dino1
      CTX.drawImage(this.image,1675,0,90,95,this.position.x,this.position.y,95,95)
    }

    else if(letter == "B"){
      CTX.drawImage(this.image,1855,0,86,95,this.position.x,this.position.y,95,95)

    }
    else
      CTX.drawImage(this.image,1943,0,86,95,this.position.x,this.position.y,95,95)
      counter++
  }

  jump(){
    //this jumps and stops from double jumping
    if(this.bottom >= FLOOR){
      this.bottom = FLOOR
      this.velocity.y = -21
    }
  }
}
