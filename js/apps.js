var Oradio       =   angular.module("Oradio", []);

Oradio.controller('channelList', function($scope){
    $scope.channels =   [
        {name:"radio fm 93.5 FM", path:"http://208.115.222.205:9998/;stream.nsv"},
        {name:"sf", path:"http://94.23.0.147:8128"}
    ]

    $scope.playtitle  =   'radio fm 93.5 FM';

    $scope.playThis =   function(data){
        $scope.playing =   $scope.channels[data];
        $scope.playtitle    =   $scope.playing.name;
        changeMedia($scope.playing.path);
    }

});

function changeMedia(data){
    console.log(data);
    $('#jquery_jplayer_1').jPlayer('setMedia', {mp3:data});
    $('#jquery_jplayer_1').jPlayer('play');
}

$("#jquery_jplayer_1").jPlayer({
    ready: function (event) {
        $(this).jPlayer("setMedia", {
            title: "Bubble",
            mp3: 'http://208.115.222.205:9998/;stream.nsv'
        }).jPlayer('play');
    },
    swfPath: "js",
    supplied: "mp3",
    wmode: "window",
    smoothPlayBar: true,
    keyEnabled: true,
    remainingDuration: true,
    toggleDuration: true
});
