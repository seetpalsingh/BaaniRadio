baani.controller('player-api', function($scope){
	
	$scope.resetApp	=	function() {
		$("#jquery_jplayer_1").jPlayer("destroy");
	}
	
	$scope.playThis =   function(id){
		$scope.resetApp();
		$scope.playing	=   $scope.playlist[$scope.playlist.indexOf(id)];
		$scope.playtitle	=   $scope.playing.name;
		$scope.loc	=	$scope.playing.loc;
		$scope.changeMedia($scope.playing.path, 'play');
		$scope.listed	=	true;
	};
	
	$scope.stopIt	=	function(){
		$scope.changeMedia($scope.playing.path, stop);
		$('[role="button"]').removeAttr('style');
	};

	$scope.changeMedia	=	function(data, toDo){
		var JP = $("#jquery_jplayer_1"); var JPdata  =   JP.data('jPlayer');
		
		JP.jPlayer("destroy");
		if(toDo == 'play'){
			$("#seeker").css("display" , "inline-block");
			JP.jPlayer({
				ready: function() {
					JP.jPlayer('setMedia', {mp3:data}).jPlayer('play');
				},
				timeupdate: function(event) {
					if (event.jPlayer.status.currentTime < 2 && event.jPlayer.status.currentTime >= 1) {
						//console.log('playing');
						//$('#console').html('playing');
						$("#seeker").css("display" , "none");
						$scope.inform("Playing Gurbaani");
					}
				}
			});
			
			JP.bind($.jPlayer.event.canplay, function(event) {
				//console.log('can play');
				//$('#console').html('can play');
				$("#seeker").css("display" , "none");
				$scope.inform("Waiting Waheguru to Broadcast");
			});
			JP.bind($.jPlayer.event.error, function(event) {
				//$scope.alertBox("Unable to connect Waheguru");
				$scope.changeMedia($scope.playing.path, stop);
				$scope.inform('Not receiving Gurbaani');
			});
		}
		else{
			$scope.loc	=	'From my Soul';
			$scope.playtitle	=   'Play from Playlist';
		};
	};
	
});