import { GameView } from 'gameView'
import { spritesManager } from '../common/spritesManager'

export class Game {
    private gameView: GameView;

    constructor(width: number, height: number) {
        this.gameView = new GameView(width, height);

        let spriteName = 'flyFly1';
        setInterval(() => {
            if(spriteName == 'flyFly1') {
                spriteName = 'flyFly2';
            } else {
                spriteName = 'flyFly1';
            }
        }, 500);
        this.gameView.foregroundObjects = [
            {
                drawInContext: (ctx: CanvasRenderingContext2D) => {
                    spritesManager.drawSpriteInContext(spriteName, ctx);
                }
            }
        ]
    }

    appendTo(element: HTMLElement): void {
        element.appendChild(this.gameView.canvas);
    }
}
