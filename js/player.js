var Player = function(userId, userName){
	this.userId = userId;
	this.userName = userName;
};
Player.prototype.getUserId = function(){
	return this.userId;
};
Player.prototype.getUserName = function(){
	return this.userName;
};
