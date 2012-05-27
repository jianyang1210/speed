enchant();
var SPADE = 0, CLOVER= 1, HEART = 2, DIA = 3, CARD_NUM_PER_CATEGORY = 13;
var game,mainScene;
window.onload = function() {
	makePublisher(Card.prototype);
	makePublisher(DeckGroup.prototype);
	Card.prototype.on('remove', 'drawCard', DeckGroup.prototype);

	game = new Game(320, 320);
	game.preload('images/cards.png', 'images/start.png', 'images/end.png');
	game.rootScene.backgroundColor = 'darkgreen';
	game.onload = function(){
		var startScene = new Scene();
		var sprite = new Sprite(236, 48);
		sprite.image = game.assets['images/start.png'];
		startScene.addChild(sprite);
		startScene.x = parseInt((game.width-sprite.width) / 2);
		startScene.y = parseInt((game.height-sprite.height) / 2);
		startScene.addEventListener(enchant.Event.TOUCH_START, function(e){
			var playerCards = new DeckGroup(4);
			for(var i = 0; i < 4; i++){
				playerCards.addCard(new Card(i, 1, 4, 60*(i+1), 30));
			}
			makePublisher(playerCards);

			var emenyCards = new DeckGroup(4);
			for(var i = 0; i < 4; i++){
				emenyCards.addCard(new Card(i, 1, 4, 60*(i+1), 250));
			}
			makePublisher(emenyCards);

			var playTable = new DeckGroup();
			playTable.addChild(new PlayTable(0, 128, 145));
			playTable.addChild(new PlayTable(1, 200, 145));
			makePublisher(playTable);

			mainScene = new Scene();
			mainScene.addChild(playTable);
			mainScene.addChild(playerCards);
			mainScene.addChild(emenyCards);
			game.replaceScene(mainScene);
		});
		game.pushScene(startScene);
	};
	//game.start();
	game.debug();
};

var PlayTable = enchant.Class.create(enchant.Sprite, {
	currentCard:{},
	initialize: function(id, x, y){
		enchant.Sprite.call(this, 32, 64);
		this.image = game.assets['images/cards.png'];
		this.frame = 43;
		this.id = id;
		this.x = x;
		this.y = y;
	},
	canPut: function(cardNum){
		if(!currentCard){
			return true;
		}
		if(this.currentCard.getCardNum() < cardNum){
			return true;
		}
		return false;
	},
	put: function(card){
		currentCard = card;
	}
});

var Player = function(userId, userName, isPlayer){
	this.userId = userId;
	this.userName = userName;
	this.cnt = 0;
	this.isPlayer = isPlayer;
};
Player.prototype = {
	sendCard : function(){
		this.cnt ++;
	}
};

