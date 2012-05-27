var Card = enchant.Class.create(enchant.Sprite, {
	_originX:0,
	_originY:0,
	_moveX:0,
	_moveY:0,
	_cardNum:0,
	_cardCategory:0,
	initialize: function(id, cardCategory, cardNum, x, y){
		enchant.Sprite.call(this, 32, 64);
		this.image = game.assets['images/cards.png'];
		this.frame = 15*cardCategory + (cardNum);
		this.id = id;
		this.x = x;
		this.y = y;
		this._originX = x;
		this._originY = y;
		this._cardNum = cardNum;

		// 移動開始イベント
		this.addEventListener(enchant.Event.TOUCH_START, function(e){
			console.log('touch start');
			_moveX = e.x - this.x;
			_moveY = e.y - this.y;
		});

		// 移動中のイベント
		this.addEventListener(enchant.Event.TOUCH_MOVE, function(e){
			console.log('touch move');
			this.x = e.x - _moveX;
			this.y = e.y - _moveY;
		});

		// 移動終了イベント
		this.addEventListener(enchant.Event.TOUCH_END, function(e){
			// 山における条件を満たしていなければ、もとに戻す
			this.moveUndo();
		});
	}
});
Card.prototype.moveUndo = function(){
	this.x = this._originX;
	this.y = this._originY;
};
Card.prototype.getCardNum = function(){
	return this._cardNum;
};
Card.prototype.getCardCategory = function(){
	return this._cardCategory;
};
