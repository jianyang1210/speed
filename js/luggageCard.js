var LuggageCard = enchant.Class.create(enchant.Sprite, {
	currentCard: {},
	BUFFER_X: 10,
	BUFFER_Y: 10,
	WIDTH: 32,
	HEIGHT: 64,

	initialize : function(id, x, y){
		enchant.Sprite.call(this, this.WIDTH, this.HEIGHT);
		this.image = game.assets['images/cards.png'];
		this.frame = 43;
		this.id = id;
		this.x = x;
		this.y = y;
	}
});
LuggageCard.prototype.putCard = function(card){
	var posX = card.x, posY = card.y,
		currentCard = this.currentCard, 
		cardNum = card.getCardNum(),
		canPutCard = false;
	
	console.log('this.x=' + this.x + ', this.y='+ this.y);
	console.log('card.x=' + card.x + ', card.y='+ card.y);
	// カードが重なっていればチェックする
	if(this.intersect(card)){
		console.log('intersect');
		if(!currentCard){
			canPutCard = true;
		}else if(currentCard.getCardNum() === 1 && 
				(cardNum === 2 || cardNum === 13)){
			canPutCard = true;
		}else if(currentCard.getCardNum() === 13 && 
				(cardNum === 1 || cardNum === 12)){
			canPutCard = true;
		}else{
			canPutCard = currentCard.getCardNum()-1 === cardNum || currentCard.getCardNum()+1 == cardNum;
		}
		
		if(canPutCard === true){
			this.currentCard = card;
			this.frame = 15*card.getCardCategory() + (card.getCardNum());
			return true;
		}
		return false;
	}
};
