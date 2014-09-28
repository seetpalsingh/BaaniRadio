var Oradio       =   angular.module("Oradio", []);

Oradio.controller('channelList', function($scope){
    $scope.channels =   [
//        {name:"radio fm 93.5 FM", path:"http://208.115.222.205:9998/;stream.nsv"},
        {type:'rec', name:"All Gurbani Styles ", path:"http://radio2.sikhnet.com:8010/autodj"},
        {type:'rec', name:"Classical Raag", path:"http://radio2.sikhnet.com:8014/autodj"},
        {type:'rec', name:"Simran ", path:"http://radio2.sikhnet.com:8016/autodj"},
        {type:'rec', name:"Sri Akhand Paath Sahib ", path:"http://radio2.sikhnet.com:8018/autodj"},
        {type:'rec', name:"The Classics ", path:"http://radio2.sikhnet.com:8501/autodj"},
        {type:'rec', name:"Katha ", path:"http://radio2.sikhnet.com:8013/autodj"},
        {type:'rec', name:"Sakhian ", path:"http://radio2.sikhnet.com:8017/autodj"},
        {type:'live', name:"Harimandir Sahib", path:"http://radio2.sikhnet.com:8020/live"},
        {type:'live', name:"Dukh Niwaran Sahib ", path:"http://radio2.sikhnet.com:8022/live"},
        {type:'live', name:"Takhat Hazur Sahib ", path:"http://radio2.sikhnet.com:8038/live"},
        {type:'live', name:"Dasmesh Darbar", path:"http://radio2.sikhnet.com:8036/live"},
        {type:'live', name:"Dukh Nivaran Sahib ", path:"http://radio2.sikhnet.com:8037/live"},
        {type:'live', name:"Fremont ", path:"http://radio2.sikhnet.com:8026/live"},
        {type:'live', name:"Dashmesh Culture Center", path:"http://radio2.sikhnet.com:8030/live"},
        {type:'live', name:"Guru Nanak Sikh Gurdwara", path:"http://radio2.sikhnet.com:8034/live"},
        {type:'live', name:"Gurdwara San Jose", path:"http://radio2.sikhnet.com:8031/live"},
        {type:'live', name:"Western Singh Sabha", path:"http://radio2.sikhnet.com:8029/live"},
        {type:'live', name:"Sukh Sagar", path:"http://radio2.sikhnet.com:8023/live"},
        {type:'live', name:"Hacienda De Guru Ram Das", path:"http://radio2.sikhnet.com:8024/live"},
        {type:'live', name:"Singh Sabha Washington", path:"http://radio2.sikhnet.com:8032/live"},
        {type:'live', name:"Singh Sabha Surrey", path:"http://radio2.sikhnet.com:8033/live"},
        {type:'live', name:"Gurdwara SW Houston", path:"http://radio2.sikhnet.com:8035/live"},
        {type:'live', name:"Siri Guru Singh Sabha", path:"http://radio2.sikhnet.com:8040/live"},
        {type:'live', name:"Sacramento Sikh Society", path:"http://radio2.sikhnet.com:8041/live"},
        {type:'live', name:"Nanak Naam Jahaj", path:"http://radio2.sikhnet.com:8042/live"},
        {type:'live', name:"El Sobrante", path:"http://radio2.sikhnet.com:8043/live"},
        {type:'live', name:"Stockton Sikh Temple", path:"http://radio2.sikhnet.com:8045/live"},
        {type:'live', name:"Sri Guru Singh Sabha Malton", path:"http://radio2.sikhnet.com:8039/live"},
        {type:'live', name:"Gurdwara Sahib West Sacramento", path:"http://radio2.sikhnet.com:8019/live"},
        {type:'live', name:"Gurdwara Sahib Glenwood", path:"http://radio2.sikhnet.com:8047/live"}
    ]

    $scope.type = 'rec';

    $scope.getDatetime = function() {
        var d = new Date();
        var curr_hour = d.getHours();
        var curr_min = d.getMinutes();

        return curr_hour +'-'+ curr_min;
    };

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
            mp3: 'http://94.23.0.147:8128'
        }).jPlayer('play');
    },
    cssSelector: {
        duration: ".duration"
    },
    volume: 1,
    swfPath: "js",
    supplied: "mp3",
    wmode: "window",
    smoothPlayBar: true,
    keyEnabled: true,
    remainingDuration: true,
    toggleDuration: true
});
