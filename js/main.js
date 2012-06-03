var game , sprite , startScene , gameScene, playerCardSlot,emenyCardSlot ;

(function() {
	enchant();
	makePublisher(Card.prototype);
	makePublisher(playTable);
	playTable.on('popSlot', 'removeCard', gameMaster);
	Card.prototype.on('putCard', 'putCard', playTable);
})();

window.onload = function(){
	game = new Game(320, 320);
	game.fps = 24;

	game.preload('images/cards.png', 'images/start.png', 'images/end.png');
	game.rootScene.backgroundColor = 'darkGreen';
	game.onload = function(){
		sprite = new Sprite(236, 48);
		sprite.image = game.assets['images/start.png'];
		sprite.addEventListener(enchant.Event.TOUCH_START, function(e){
			console.log('touch event');
			playTable.initialize();
			gameMaster.initialize(1, 2);
			gameScene = new Scene();

			var luggageCards = playTable.getLuggageCards();
			for(var i = 0, len = luggageCards.length; i < len; i++){
				gameScene.addChild(luggageCards[i]);
			}
			gameScene.addChild(gameMaster.getPlayerCardSlot());
			gameScene.addChild(gameMaster.getEmenyCardSlot());
			game.removeScene(startScene);
			game.replaceScene(gameScene);
		});
		startScene = new Scene();
		startScene.x = (game.width - sprite.width) / 2;
		startScene.y = (game.height - sprite.height) / 2;
		startScene.addChild(sprite);
		game.pushScene(startScene);
	};
	game.debug();
};

