app.controller('homeController', ["$scope", "$routeParams", "$window", "$location", "$filter", "$timeout", "homeService", function ($scope, $routeParams, $window, $location, $filter, $timeout, homeService) {
    $scope.routevalue = $routeParams.a;
    $scope.categoryId = $routeParams.b;
    console.log($scope.routevalue + 'and' + $scope.categoryId);
  $scope.obj = {};
  $scope.name = "sadik";
    $scope.obj.homeData = {};
    //getHomeData();
    
    function getHomeData() {
        var gridData = homeService.GetProductsData();
        gridData.then(function (data) {
            $scope.obj.homeData = data;
            console.log($scope.obj.homeData);
        });
    }
}
]);





