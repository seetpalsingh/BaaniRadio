baani.controller('play-list', function($scope, $http, fetchlist){

	$scope.got_list	=	false;

	$scope.actived	=	function(chnl){
		if(chnl.name == $scope.playtitle){
			return 'playing';
		}
		return	'';
	};
	
//	$scope.updateList	=	function(){
		fetchlist.getthelist().then(function(data) {
			$scope.playlist = data;
		});
//	}
	
	document.addEventListener("offline", onOffline, false);
	document.addEventListener("online", available, false);
	
	function available() {
		//$scope.inform('online');
		fetchlist.getthelist().then(function(data) {
			$scope.playlist = data;
		});
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
	

	