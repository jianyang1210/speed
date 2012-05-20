var Player = function(userId,name){
	this.userId = userId;
	this.name = name;
	// 場に出せるカード
	this.availableCards = [];		
	// 場に出せないカード
	this.notavailableCards = [];
	// だそうとするカード
	this.sendCardIdx ;
	this.remainingNum = 0;
	// ゲーム参加通知をする
	this.fire('newPlayer', this);
};
Player.prototype = {
	// カードを出す
	// 引数はカードオブジェクト
	sendCard: function(idx){
		var nextCard;

		this.sendCardIdx  = idx;
		
		// 場にカードを出す
		if(this.fire('receiveCard', this) === false){
			return ;
		}
		// カードを出すことができれば、自分の持ち場から減らす.
		this.availableCards[idx] = null;

		// 場に出せないカードから1枚減らす
		if(this.notavailableCards.length != 0){
			nextCard = this.notavailableCards.shift();
		}
		// 残り枚数から減らす
		remainingNum--;
		this.fire('update', this);
	},
	// 勝利時の動き
	onWinEvent: function(){
		console.log('win');
	},
	// 敗北時の動き
	onLoseEvent: function(){
		console.log('close');
	}
};
