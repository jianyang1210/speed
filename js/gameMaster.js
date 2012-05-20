var gameMaster = {
	distributeCard: function(playTable){
		var players = playTable.player,
			player, distributedCard,
			i, playerLen= players.length,
			notavailableCards,
			cardNum, cardKind,
			j, CARD_MAX = parseInt(54/playerLen)-1
			;

		for(i=0; i < playerLen; i++){
			notavailableCards = players[i].notavailableCards;
			for(j = 0; notavailableCards.length < CARD_MAX; j++){
				cardNum = parseInt(Math.random()*13);
				if(cardNum === 0){
					continue;
				}
				cardKind = parseInt(Math.random()*3);
				// TODO 割り当てられているカードは除外する
				notavailableCards.push({cardKind: cardKind, cardNum: cardNum});
			}
		}
	},
	check: function(playTable){
		// 残り枚数が0になったら、勝利(敗北)イベントを呼ぶ
		
		// 次がだせるか？
		
		// 出せない時にはそれぞれを出す
	}
}
