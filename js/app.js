angular.module('chatApp',['firebase'])
.controller('chatController',function($scope,$firebase){

  var ref = new Firebase("https://myamazingtchat.firebaseio.com");
  var sync = $firebase(ref);

  var name = ['Batman', 'Superman', 'Spider-man', 'Captain America', 'Hulk', 'Thor', 'Joker', 'Iron Man', 'Wolverine', 'Flash', 'Deadpool']

  $scope.title = "Amazing tchat app !";
  $scope.name= name[Math.floor(Math.random()*name.length)];

  $scope.messages = sync.$asArray();

  $scope.add=function(){
    if ($scope.name && $scope.msg) {
      $scope.messages.$add({name: $scope.name, msg: $scope.msg});
      $scope.msg='';
    }
  }
  $scope.delete=function(message){
    $scope.messages.$remove(message)
  }
})
