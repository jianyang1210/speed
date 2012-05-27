var DeckGroup = enchant.Class.create(enchant.Group, {
	deck : [],
	initialize: function(length){
		enchant.Group.call(this);
		this.deck = new Array(length);
	},
	addCard: function(card){
		this.addChild(card);
		this.putCard(card);
	},
	// カードをデッキから抜く
	drawCard: function(idx){
		this.removeChild(this.deck[idx]);
		delete this.deck[idx];
	},
	// カードをデッキに置く
	putCard: function(card){
		var i , len = this.deck.length;
		for(i = 0 ; i < len ; i++){
			if(this.deck[i] === undefined){
				this.deck[i] = card;
				return ;
			}
		}
	}
});
DeckGroup.prototype.dummy = function(){
}
