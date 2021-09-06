app.controller('homeController', ["$scope", "$window", "$location", "$filter", "$timeout", "homeService", function ($scope, $window, $location, $filter, $timeout, homeService) {
    $scope.name = 'Mohammad Sadikur Rahman';
    $scope.obj = {};
    $scope.obj.homeData = {};
    getHomeData();
    function getHomeData() {

        var gridData = homeService.GetProductsData();
        gridData.then(function (data) {
            $scope.obj.homeData = JSON.parse(data);
            console.log($scope.obj.homeData);
        });
    }
}
]);



