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
			e.dataTransfer.effectAllowed = 'copyMove';
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
		$(dragId).ondragover = function(event){
		var i,len =event.dataTransfer.types.length;
		for(i=0; i < len ; i++){
			if(event.dataTransfer.types[i] === 'text/plain'){
				event.preventDefault();
				event.dataTransfer.dropEffect = 'move';
				break;
			}
		}
	};
	$(dragId).ondrop= function(event){
		var idx,card;
		event.preventDefault();
		card = event.dataTransfer.getData('text/plain');
		if(card != ''){
			console.log(JSON.parse(card));
		}else{
			console.error('not found data');
		}
	}
}
