baani.directive('playList', function(){
	return	{
		restrict	: 'E',
		templateUrl	:	'views/playlist.html',
		controller	:	'play-list',
		controllerAs	:	'chnl'
	};
})

.directive('playerApi', function(){
	return	{
		restrict	:	'E',
		templateUrl	:	'views/player.html',
		controller	:	'player-api',
		controllerAs	:	'player'
	};
})

.directive('aboutUs', function(){
	return	{
		restrict	:	'E',
		templateUrl	:	'views/aboutus.html'
	};
})

.directive('msgBox', function(){
	return	{
		restrict	:	'E',
		templateUrl	:	'views/msgbox.html'
	};
});