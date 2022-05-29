app.controller('homeController', ["$scope", "$routeParams", "$window", "$location", "$filter", "$timeout", "homeService", function ($scope, $routeParams, $window, $location, $filter, $timeout, homeService) {
    //$scope.routevalue = $routeParams.a;
    //$scope.categoryId = $routeParams.b;
    //console.log($scope.routevalue + 'and' + $scope.categoryId);
  $scope.obj = {};
  //$scope.name = "sadik";
  //  $scope.obj.homeData = {};
    //getHomeData();
    getcategoryList();
    //function getHomeData() {
    //    var gridData = homeService.GetProductsData();
    //    gridData.then(function (data) {
    //        $scope.obj.homeData = data;
    //        console.log($scope.obj.homeData);
    //    });
    //}
    function getcategoryList() {
        $scope.categoriesList = [];
        var categoryData = homeService.getcategoryList();
        categoryData.then(function (data) {
            $scope.obj.categoriesList = JSON.parse(data);
        });
    }
}
]);

//app.config(["$routeProvider", function ($routeProvider) {

//    var d = window.location.host;
//    $routeProvider.
//        when("/product/:a/:b", {
//            templateUrl: '/Html_Views/products.html',
//            controller: 'products_ctr'
//        }).
//        otherwise({
//            redirectTo: '/'
//        })
//    // $locationProvider.html5Mode(true).hashPrefix('!')
//}]);



