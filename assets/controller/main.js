baani.controller('mainctrl', function ($scope) {

	$scope.msg  =   'No Interner available'; 
	$scope.offline  =   false; 
	
	$scope.shareme	=	function(){};

	$scope.dt = new Date(); 
	$scope.mm = $scope.dt.getMonth(); 
	
	$scope.alertBox	=	function(data) {
		$scope.msg    =   data;
		$('#alert_box').click();
	}
	$scope.inform	=	function(info){
		window.plugins.toast.showLongBottom(info);
	}
	
	$scope.playlist	=	[ ];
	$scope.type = 'rec'; 
	
	$scope.loc	=	'From my Soul'; 
	$scope.playtitle	=   'Play from Playlist';
	
	
});