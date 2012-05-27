// デッキオブジェクト
var Deck = function(){
	this.cards = {};
	initialize(SPADE);
	initialize(CLOVER);
	initialize(HEART);
	initialize(DIA);
	initialize : function(category){
		var i,len;
		for(i = 0, len = CARD_NUM_PER_CATEGORY, i < len; i++){
			this.cards[category][i] = 0;
		}
	}
};
Deck.prototype = {
	receveCard: function(category, num){
		this.cards[category][num] = 1;
	},
	hasCard: function(category, num){
		if(this.cards[category][num] === 0){
			return false;
		}else {
			return true;
		}
	}
};

// ユーザのデッキ
var UserDeck = function(){
};
UserDeck.prototype = new Deck();
