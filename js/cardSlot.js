var CardSlot = enchant.Class.create(enchant.Group, {
	slot:[],
	initialize: function(userId, x, y){
		enchant.Group.call(this);
		this.id = userId;
		this.x = x;
		this.y = y;
		this.slot = new Array(4);
	}
});

// カードを取り出す
CardSlot.prototype.popCard = function(idx){
	var card = this.slot[idx];
	this.removeChild(card);
	delete this.slot[idx];
	return card;
};
CardSlot.prototype.getPushIndex = function(){
	var i, len = this.slot.length;
	for(i = 0 ; i < len ; i++){
		if(this.slot[i] === undefined){
			return i;
		}
	}
	return -1;
};
// カードをセットする
CardSlot.prototype.pushCard  = function(card){
	var idx = this.getPushIndex();
	if(idx === -1){
		return -1;
	}
	this.slot[idx] = card;
	this.addChild(card);
	return idx;
};
