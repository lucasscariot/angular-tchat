angular.module('chatApp',["firebase" ])
.controller('chatController',function($scope,$firebase){


  var ref = new Firebase("https://vivid-inferno-5873.firebaseio.com/demcrud");
  var sync = $firebase(ref);

  var name = ['Batman', 'Superman', 'Spiderman', 'Captain America', 'Hulk', 'Thor']

  $scope.DB = sync.$asArray();

  $scope.name= name[Math.floor(Math.random()*name.length)];

  $scope.add=function(){
    $scope.DB.$add({name: $scope.name, msg: $scope.msg});
  }

  $scope.edit=function(message){
    $scope.app=message
  }
  $scope.delete=function(item){
    $scope.DB.$remove(item)
  }
})
