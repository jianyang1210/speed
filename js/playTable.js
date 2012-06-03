var playTable = {
	_luggageCards: [],
	initialize: function(){
		this._luggageCards.push(new LuggageCard('slot1', 100, 100));
		this._luggageCards.push(new LuggageCard('slot2', 150, 100));
	},
	putCard: function(card){
		var i,
			len = this._luggageCards.length;
		for(i = 0 ; i < len ; i++){
			if(this._luggageCards[i].putCard(card) === true){
				this.fire('popSlot', card);
				return ;
			}
		}
		card.moveUndo();
	},
	getLuggageCards: function(){
		return this._luggageCards;
	}
};
