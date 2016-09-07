import { GameView } from 'gameView'

export class Game {
    private gameView: GameView;

    constructor(width: number, height: number) {
        this.gameView = new GameView(width, height);
    }

    appendTo(element: HTMLElement): void {
        element.appendChild(this.gameView.canvas);
    }
}
