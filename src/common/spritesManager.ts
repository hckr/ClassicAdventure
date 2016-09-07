import { Pos, Size } from 'sharedInterfaces'

interface SpriteInfo {
    spriteSheet: HTMLImageElement,
    offset: Pos,
    size: Size
}

export class SpritesManager {
    private spriteSheets: { [name: string]: HTMLImageElement };
    private spritesInfo: { [name: string]: SpriteInfo };

    constructor(private context: CanvasRenderingContext2D) {
        this.loadSpriteSheets();

        this.addSpriteInfo('flyDead', 'enemies', { x: 143, y: 0 }, { width: 59, height: 33 });
        this.addSpriteInfo('flyFly1', 'enemies', { x: 0, y: 32 }, { width: 72, height: 36 });
        this.addSpriteInfo('flyFly2', 'enemies', { x: 0, y: 0 }, { width: 75, height: 31 });
    }

    drawSprite(name: string, position: Pos) {
        let spriteInfo = this.spritesInfo[name];
        if(spriteInfo.spriteSheet.complete) {
            this.context.drawImage(spriteInfo.spriteSheet,
                                spriteInfo.offset.x, spriteInfo.offset.y,
                                spriteInfo.size.width, spriteInfo.size.height);
        }
    }

    private loadSpriteSheet(name: string, path: string) {
        let image = new Image();
        image.src = 'assets/sprites/' + path;
        this.spriteSheets[name] = image;
    }

    private loadSpriteSheets() {
        this.loadSpriteSheet('enemies', 'enemies_spritesheet.png');
    }

    private addSpriteInfo(name: string, spriteSheetName: string, offset: Pos, size: Size) {
        this.spritesInfo[name] = {
            spriteSheet: this.spriteSheets[spriteSheetName],
            offset: offset,
            size: size
        };
    }
}
