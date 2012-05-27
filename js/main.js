makePublisher(Player.prototype);
makePublisher(playTable);
makePublisher(gameMaster);
Player.prototype.on('newPlayer', 'initialize', playTable);
playTable.on('distributeCard', 'distributeCard', gameMaster);

window.onload = function(){
	$('gameStart').addEventListener('click', function(){
		playTable.start();
		console.log(playTable);
	});
	var elements = document.getElementsByTagName('img');
	for(var i = 0,len=elements.length; i < len; i++){
		elements[i].ondragstart = function(e){
			var data = {
				id: this.id,
				data: e.target.src.split('/').pop().split('.')[0]
			};
			e.dataTransfer.effectAllowed = 'move';
			e.dataTransfer.setData('text/plain', JSON.stringify(data));
		};
	}
	handleDragEnterEvent('cardPlace0');
	handleDragEnterEvent('cardPlace1');

	var playname = 'a';// prompt('add player (name)');
	new Player(1, playname);
	playname = 'b'; // prompt('add player (name)');
	new Player(2, playname);
};

function handleDragEnterEvent(dragId){
	$(dragId).ondragenter = function(e){
		var i,len = e.dataTransfer.types.length;
		for(i=0; i < len ; i++){
			if(e.dataTransfer.types[i] === 'text/plain'){
				e.dataTransfer.dropEffect = 'move';
				break;
			}
		}

	};
	$(dragId).ondragover = function(e){
		var i,len = e.dataTransfer.types.length;
		for(i=0; i < len ; i++){
			if(e.dataTransfer.types[i] === 'text/plain'){
				e.preventDefault();
				break;
			}
		}
	};
	$(dragId).ondrop= function(e){
		var idx,card;
		card = e.dataTransfer.getData('text/plain');
		if(card != ''){
			console.log(JSON.parse(card));
		}else{
			console.error('not found data');
		}
	}
}
