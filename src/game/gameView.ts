import { DrawableObject } from '../common/sharedInterfaces'

export class GameView {
    canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    foregroundObjects: DrawableObject[] = [];

    constructor(width: number, height: number) {
        let canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        this.canvas = canvas;
        this.context = canvas.getContext('2d');

        this.drawingLoop();
    }

    private drawingLoop(): void {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.foregroundObjects.forEach(obj => {
            obj.drawInContext(this.context);
        });
        window.requestAnimationFrame(() => {
            this.drawingLoop();
        });
    }
}
