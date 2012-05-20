var playTable = {
	// 場に出てるカード情報
	cards: [],
	player: [],

	// プレイヤー情報を追加
	initialize: function(player){
		this.player.push(player);
	},
	start: function(){
		this.fire('distributeCard', this);
	},
	// カード受け取る
	receiveCard: function(idx, userCard){
		var card = cards[i],
			isSuccess = false; // カードを出せるか？

		// 今のカード情報から出せるか？判断
		isSuccess = _isReceive(idx, userCard);
		if(!isSuccess){
			return false;
		}
		cards[i] = userCard;
	},
	// 強制的にカードを受け取る
	receiveForeCard: function(idx, userCard){
		cards[idx] = card;
	},
	// ゲーム画面に描画
	update: function(player){
		player[player.userId] = player;
		this.fire('check', this);
	},
	_isReceive: function(idx, userCard){
		var card = cards[idx],
			userCardNum = userCard.num;
			cardNum;

		// カードがないときには出せる
		if(card === 'undefined'){
			return true;
		}
		cardNum = card.num;

		// 1の時は2,13が出せる
		if(cardNum === 1){
			if(userCardNum === 2 || userCardNum === 13){
				return true;
			}
		// 13の時には1,12が出せる
		} else if(cardNum === 13){
			if(userCardNum === 1 || userCardNum === 12){
				return true;
			}
		// 場に出てるカードが2-12の時には、前後1のカードを出せる
		} else {
			if(cardNum === userCardNum + 1 || cardNum === userCardNum - 1){
				return true;
			}
		}
		return false;
	}
};
