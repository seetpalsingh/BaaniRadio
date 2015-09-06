baani.controller('play-list', function($scope, $http){

	$scope.got_list	=	false;

	$scope.actived	=	function(chnl){
		if(chnl.name == $scope.playtitle){
			return 'playing';
		}
		return	'';
	};
	
	var	last_month	=	window.localStorage.getItem("last_month");
	var	play_data	=	window.localStorage.getItem("play_data");
	var	play_data	=	JSON.parse(play_data);
	
	//console.log($scope.mm	+ ' , ' + last_month + ' , ' + play_data);
	
	$scope.fetch_list	=	function(){
		$http.get('http://blog.codemode.in/wp-admin/admin-ajax.php?action=channels').
			success(function (data) {
				//console.log('received');
				$scope.playlist =   data;
				window.localStorage.setItem("play_data", JSON.stringify(data));
				last_month	=	window.localStorage.setItem("last_month", $scope.mm);
			});
	};
	
	if($scope.mm	+ ' , ' + last_month &&	!play_data){		//	get list if its 
		$scope.fetch_list();
	}
	else{
		//console.log('loaded-local');
		$scope.playlist	=	play_data;
	};
	
	
	document.addEventListener("offline", onOffline, false);
	document.addEventListener("online", available, false);
	
	function available() {
			//$scope.inform('online');
			$scope.offline = false;
			$scope.$apply();
	};
	
	function onOffline() {
		$scope.changeMedia('nthing');
		$scope.inform('Check Connection to connect Waheguru');
		$scope.offline = true;
		$scope.$apply();
	};
});
	

	