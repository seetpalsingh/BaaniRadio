baani.service('fetchlist', function($http, $q){

    this.getthelist	=	function(){
		var defer = $q.defer();
		var	dt = new Date(); 
		var	mm = dt.getMonth(); 
		
		var	last_month	=	window.localStorage.getItem("last_month");
		var	play_data	=	window.localStorage.getItem("play_data");
		var	play_data	=	JSON.parse(play_data);
		
		//console.log($scope.mm	+ ' , ' + last_month + ' , ' + play_data);
		
		if(mm	+ ' , ' + last_month &&	!play_data){		//	get list if its 
			$http.get('http://blog.codemode.in/wp-admin/admin-ajax.php?action=channels').
				success(function (data) {
					window.localStorage.setItem("play_data", JSON.stringify(data));
					last_month	=	window.localStorage.setItem("last_month", mm);
					//$scope.playlist =   data;
					console.log('received');
					 defer.resolve(data);
				});
		}
		else{
			console.log('local data');
			defer.resolve(play_data);
		}
		return defer.promise;
	}
});