var CardSlot = enchant.Class.create(enchant.Group, {
	initialize: function(userId, x, y){
		enchant.Group.call(this);
		this.id = userId;
		this.x = x;
		this.y = y;
	}
});
// カードを削除
CardSlot.prototype.removeCard = function(card){
	this.removeChild(card);
};
// カードをセットする
CardSlot.prototype.pushCard  = function(card){
	this.addChild(card);
};
