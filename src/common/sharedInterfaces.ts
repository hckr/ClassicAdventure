export interface Pos {
    x: number;
    y: number;
}

export interface Size {
    width: number;
    height: number;
}

export interface DrawableObject {
    drawInContext(context: CanvasRenderingContext2D): void;
}
