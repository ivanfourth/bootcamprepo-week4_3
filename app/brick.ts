import { Sprite } from './sprite'

export class Brick extends Sprite {
    hit: number = 1;
    score: number = 10;

    wasHit():boolean {
      return --this.hit < 1;
    }

    markHit(){

    }

}