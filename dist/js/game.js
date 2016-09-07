define("common/sharedInterfaces", ["require", "exports"], function (require, exports) {
    "use strict";
});
define("game/gameView", ["require", "exports"], function (require, exports) {
    "use strict";
    var GameView = (function () {
        function GameView(width, height) {
            this.foregroundObjects = [];
            var canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            this.canvas = canvas;
            this.context = canvas.getContext('2d');
            this.drawingLoop();
        }
        GameView.prototype.drawingLoop = function () {
            var _this = this;
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.foregroundObjects.forEach(function (obj) {
                obj.drawInContext(_this.context);
            });
            window.requestAnimationFrame(function () {
                _this.drawingLoop();
            });
        };
        return GameView;
    }());
    exports.GameView = GameView;
});
define("common/spritesManager", ["require", "exports"], function (require, exports) {
    "use strict";
    var SpritesManager = (function () {
        function SpritesManager() {
            this.spriteSheets = {};
            this.spritesInfo = {};
            this.loadSpriteSheets();
            this.addSpriteInfo('flyDead', 'enemies', { x: 143, y: 0 }, { width: 59, height: 33 });
            this.addSpriteInfo('flyFly1', 'enemies', { x: 0, y: 32 }, { width: 72, height: 36 });
            this.addSpriteInfo('flyFly2', 'enemies', { x: 0, y: 0 }, { width: 75, height: 31 });
        }
        SpritesManager.prototype.drawSpriteInContext = function (name, context, offset) {
            if (offset === void 0) { offset = { x: 0, y: 0 }; }
            var spriteInfo = this.spritesInfo[name];
            if (spriteInfo.spriteSheet.complete) {
                context.drawImage(spriteInfo.spriteSheet, spriteInfo.offset.x, spriteInfo.offset.y, spriteInfo.size.width, spriteInfo.size.height, offset.x, offset.y, spriteInfo.size.width, spriteInfo.size.height);
            }
        };
        SpritesManager.prototype.loadSpriteSheet = function (name, path) {
            var image = new Image();
            image.src = 'assets/sprites/' + path;
            this.spriteSheets[name] = image;
        };
        SpritesManager.prototype.loadSpriteSheets = function () {
            this.loadSpriteSheet('enemies', 'enemies_spritesheet.png');
        };
        SpritesManager.prototype.addSpriteInfo = function (name, spriteSheetName, offset, size) {
            this.spritesInfo[name] = {
                spriteSheet: this.spriteSheets[spriteSheetName],
                offset: offset,
                size: size
            };
        };
        return SpritesManager;
    }());
    exports.spritesManager = new SpritesManager();
});
define("game/game", ["require", "exports", "game/gameView", "common/spritesManager"], function (require, exports, gameView_1, spritesManager_1) {
    "use strict";
    var Game = (function () {
        function Game(width, height) {
            this.gameView = new gameView_1.GameView(width, height);
            var spriteName = 'flyFly1';
            setInterval(function () {
                if (spriteName == 'flyFly1') {
                    spriteName = 'flyFly2';
                }
                else {
                    spriteName = 'flyFly1';
                }
            }, 300);
            this.gameView.foregroundObjects = [
                {
                    drawInContext: function (ctx) {
                        spritesManager_1.spritesManager.drawSpriteInContext(spriteName, ctx);
                    }
                }
            ];
        }
        Game.prototype.appendTo = function (element) {
            element.appendChild(this.gameView.canvas);
        };
        return Game;
    }());
    exports.Game = Game;
});
//# sourceMappingURL=game.js.map