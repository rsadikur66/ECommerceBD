app.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function () {
                scope.$apply(function () {
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);
app.service('fileUpload', ['$https:', function ($https) {
    debugger;
    this.uploadFileToUrl = function (file, uploadUrl) {
        var fd = new FormData();
        fd.append('file', file);

        $https.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        })
            .success(function () {
            })
            .error(function () {
            });
    }
}]);
app.controller('productSetupController', ["$scope", "$window", "$location", "$filter", "$timeout", "productSetupService", "categorySetupService", 'fileUpload', function ($scope, $window, $location, $filter, $timeout, productSetupService, categorySetupService, fileUpload) {
    $scope.obj = {};
    $scope.obj.ambulance = [];
    getCategoriesData();
    $scope.uploadFile = function () {
        var file = $scope.myFile;
        console.log('file is ');
        console.dir(file);
        var uploadUrl = "/fileUpload";
        fileUpload.uploadFileToUrl(file, uploadUrl);
    };
    getProductListData();
    function getCategoriesData() {
        var categoriesData = categorySetupService.GetCategories();
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