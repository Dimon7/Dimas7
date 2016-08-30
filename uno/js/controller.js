angular.module('myApp', []).controller('namesCtrl', function($scope) {
  $scope.names = [{
      name: 'Dima',
      count: 0
    }

  ];

  $scope.add = function() {
   $scope.names.push({
        name: $scope.value,
        count: 0
    });


  }

    

 $scope.removeItem = function (x) {
        $scope.errortext = "";
        $scope.names.splice(x, 1);
    }



});
