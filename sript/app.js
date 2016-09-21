var app = angular.module('friendsList', [])

app.controller('mainCtrl', ['$scope', function ($scope) {

$scope.myName = 'Thomas';
$scope.nums = []
for (var i = 0; i <= 20; i++){
  $scope.nums.push(i);
}
$scope.myFriends = ['Michael', 'Mark', 'Sam', 'Harry'];
$scope.addFriend = function (name) {
  $scope.myFriends.push(name);
}
}])
