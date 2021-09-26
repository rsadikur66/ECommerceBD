

app.controller('productSetupController', ["$scope", "$window", "$location", "$filter", "$timeout", "productSetupService", function ($scope, $window, $location, $filter, $timeout, productSetupService) {
    $scope.obj = {};
    $scope.obj.ambulance = [];
    getCategoriesData();
    
    getProductListData();
    function getCategoriesData() {
        var categoriesData = productSetupService.GetCategories();
        categoriesData.then(function (data) {
            $scope.obj.categories = JSON.parse(data);
            console.log($scope.obj.categories);
        });
    }

    function getProductListData() {
        var productsListData = productSetupService.GetProductsList();
        productsListData.then(function (data) {
            $scope.obj.productsList = JSON.parse(data);
        })
    }
    function getBrandsData() {
        var brandsData = productSetupService.GetBrands();
        brandsData.then(function (data) {
            $scope.obj.brands = JSON.parse(data);
            console.log($scope.obj.brands);
        });

    }

}
]);

app.filter('propsFilter', function () {
    return function (items, props) {
        var out = [];

        if (angular.isArray(items)) {
            var keys = Object.keys(props);

            items.forEach(function (item) {
                var itemMatches = false;

                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var text = props[prop].toLowerCase();
                    if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                        itemMatches = true;
                        break;
                    }
                }

                if (itemMatches) {
                    out.push(item);
                }
            });
        } else {
            // Let the output be the input untouched
            out = items;
        }

        return out;
    };
});