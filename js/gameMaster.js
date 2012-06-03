var gameMaster = {
	playerSlot : {},
	emenySlot: {},
	initialize: function(playerUserId, emenyUserId){
		this.playerSlot = new UserSlot(playerUserId, 50, 10, 4);
		this.emenySlot = new UserSlot(emenyUserId, 50, 200, 4);
		for(var i = 0; i < 4 ; i++){
			this.addCard(i, new Card(playerUserId, playerUserId+'_'+i, 1, 0, i*50, 0));
			this.addCard(i, new Card(emenyUserId, emenyUserId+'_'+i, 1, 0, i*50, 0));
		}
	},
	addCard : function(idx, card){
		var slot = this.getSlot(card.userId);
		slot.addCard(idx, card);
	},
	removeCard : function(card){
		var slot = this.getSlot(card.userId);
		if(slot != null){
			slot.removeCard(card);
		}
	},
	getSlot : function(userId){
		if(this.playerSlot.userId === userId){
			return this.playerSlot;
		}else if(this.emenySlot.userId === userId){
			return this.emenySlot;
		}
		return null;
	},
	getPlayerCardSlot: function(){
		return this.playerSlot.getCardSlot();
	},
	getEmenyCardSlot: function(){
		return this.emenySlot.getCardSlot();
	}
};

var UserSlot = function(userId, x, y, slotSize){
	this.userId = userId;
	this.cardslot = new CardSlot(userId, x, y);
	this.cards = new Array(slotSize);
};
UserSlot.prototype = {
	addCard: function(idx, card){
		this.cardslot.pushCard(card);
		// FIXME
		this.cards.push(card);
	},
	getCardSlot : function(){
		return this.cardslot;
	},
	removeCard: function(card) {
		var i, len = this.cards.length;
		this.cardslot.removeCard(card);
		for(i = 0 ; i < len ; i++){
			if(this.cards[i] === card){
				delete this.cards[i];
			}
		}
	}
};
