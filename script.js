var app = angular.module("myApp", "routeApp" ['ngRoute']);
app.controller("Ctrl",['$scope', function($scope $routeProvider) {
  $scope.nameregex = /^[a-zA-ZéèÉÈôîêûÛÊÔÎùÙïöëüËÏÖÜ']{2,40}[- ']?[a-zA-ZéèÉÈôîêûÛÊÔÎùÙïöëüËÏÖÜ]{0,40}$/;
  $scope.mailregex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
  $scope.textregex = /^[a-zA-ZéèÉÈôîêûÛÊÔÎùÙïöëüËÏÖÜ' ]{2,15}[- ']?[a-zA-ZéèÉÈôîêûÛÊÔÎùÙïöëüËÏÖÜ ]{0,15}[a-zA-ZéèÉÈôîêûÛÊÔÎùÙïöëüËÏÖÜ ]{0,15}$/;
  $scope.comregex = /^[a-zA-ZéèÉÈôîêûÛÊÔÎùÙïöëüËÏÖÜ']{30,140}[- ']?[a-zA-ZéèÉÈôîêûÛÊÔÎùÙïöëüËÏÖÜ ]{30,140}[a-zA-ZéèÉÈôîêûÛÊÔÎùÙïöëüËÏÖÜ ]{30,140}$/;

  $scope.tableau = [];
  $scope.AfficherArray = function(){
    $scope.tableau.push({
    Name: $scope.Name,
    Mail: $scope.Mail,
    Sujet: $scope.Sujet,
    Commentary: $scope.Commentary
  });
}
}]);
