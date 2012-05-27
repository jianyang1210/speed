enchant();
var game , sprite , startScene , gameScene, playerCardSlot,emenyCardSlot ;
window.onload = function(){
	game = new Game(320, 320);

	game.preload('images/cards.png', 'images/start.png', 'images/end.png');
	game.rootScene.backgroundColor = 'darkGreen';
	game.onload = function(){
		sprite = new Sprite(236, 48);
		sprite.image = game.assets['images/start.png'];
		sprite.addEventListener(enchant.Event.TOUCH_START, function(e){
			console.log('touch event');
			playerCardSlot = new CardSlot(1, 50, 10);
			emenyCardSlot = new CardSlot(2, 50, 200);
			for(var i = 0; i < 4 ; i++){
				playerCardSlot.pushCard(new Card(1, 1, 0, i*50, 0));
				emenyCardSlot.pushCard(new Card(1, 1, 0, i*50, 0));
			}

			gameScene = new Scene();
			gameScene.addChild(playerCardSlot);
			gameScene.addChild(emenyCardSlot);
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
