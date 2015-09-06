document.addEventListener("deviceready", onDeviceReady, false); 
function onDeviceReady() {
	document.addEventListener('menubutton', showMenu, false);
}
function showMenu() {
	if( document.getElementById('playlist').length ) {
		document.getElementById('playlist').className	=	'';
	}
	else {
		document.getElementById('playlist').className	=	'go_away';
	}
}

var baani	=	angular.module('Bradio',[]);
	

	