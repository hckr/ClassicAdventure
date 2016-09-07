export class GameView {
    canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor(width: number, height: number) {
        let canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        this.canvas = canvas;
        this.context = canvas.getContext('2d');
    }
}
