import { Brick } from './brick'
import { Sprite } from './sprite'
export class HardBrick extends Brick {

  hit: number = 2;
  score: number = 50;

    markHit(){
      this.sprite.classList.add('hit');
    }

}