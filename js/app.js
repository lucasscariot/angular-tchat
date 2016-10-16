angular.module('chatApp',["firebase" ])
.controller('chatController',function($scope,$firebase){


  var ref = new Firebase("https://myamazingtchat.firebaseio.com");
  var sync = $firebase(ref);

  var name = ['Batman', 'Superman', 'Spider-man', 'Captain America', 'Hulk', 'Thor', 'Joker', 'Iron Man', 'Wolverine', 'Flash', 'Deadpool']

  $scope.DB = sync.$asArray();

  $scope.title = "Amazing tchat app !";
  $scope.name= name[Math.floor(Math.random()*name.length)];

  $scope.add=function(){
    if ($scope.name && $scope.msg) {
      $scope.DB.$add({name: $scope.name, msg: $scope.msg});
      $scope.msg='';
    }
  }

  $scope.edit=function(message){
    $scope.app=message
  }
  $scope.delete=function(item){
    $scope.DB.$remove(item)
  }
})
