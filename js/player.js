/**
 * player.js
 * 
 * The Player Class
 * 
 * Acts as a sprite or "hero" for the game
 * 
 * Author: 
 */

import { CTX, CANVAS, GRAVITY, FLOOR } from "./globals.js"

export default class Player {
  constructor(x, y, width, height) {
    this.width = width;
    this.height = height;

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

  /**
   * Main function to update location, velocity, and image
   */
  update() {
    //add gravity to the hero
    this.velocity.y += GRAVITY

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
    CTX.fillStyle = "yellow";
    CTX.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  jump(){
    this.position.y -= 1
    this.velocity.y = -20
  }
}
