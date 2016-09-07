define("gameView", ["require", "exports"], function (require, exports) {
    "use strict";
    var GameView = (function () {
        function GameView(width, height) {
            var canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            this.canvas = canvas;
            this.context = canvas.getContext('2d');
        }
        return GameView;
    }());
    exports.GameView = GameView;
});
define("game", ["require", "exports", "gameView"], function (require, exports, gameView_1) {
    "use strict";
    var Game = (function () {
        function Game(width, height) {
            this.gameView = new gameView_1.GameView(width, height);
        }
        Game.prototype.appendTo = function (element) {
            element.appendChild(this.gameView.canvas);
        };
        return Game;
    }());
    exports.Game = Game;
});
//# sourceMappingURL=game.js.map