var Card = enchant.Class.create(enchant.Sprite, {
	userId:0,
	_originX:0,
	_originY:0,
	_moveX:0,
	_moveY:0,
	_cardNum:0,
	_cardCategory:0,
	initialize: function(userId, id, cardCategory, cardNum, x, y){
		enchant.Sprite.call(this, 32, 64);
		this.image = game.assets['images/cards.png'];
		this.frame = 15*cardCategory + (cardNum);
		this.id = id;
		this.userId = userId;
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
			this.moveTo(e.x - _moveX, e.y - _moveY);
		});

		// 移動終了イベント
		this.addEventListener(enchant.Event.TOUCH_END, function(e){
			this.x = this._offsetX;
			this.y = this._offsetY;
			console.log('end this.x = '+this.x + ', this.y = ' + this.y);

			// 手札を出す
			this.fire('putCard', this);
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
