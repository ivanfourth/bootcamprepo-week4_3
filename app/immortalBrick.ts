import { Brick } from './brick'
import { HardBrick } from './hardbrick'

export class ImmortalBrick extends HardBrick {
  wasHit():boolean {
    return false;
  }
    hit: number = 1000000000000000000000000000000000000000000000000;
}
