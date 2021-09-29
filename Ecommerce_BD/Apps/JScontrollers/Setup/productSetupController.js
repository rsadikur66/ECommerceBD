
app.controller('productSetupController', ["$scope", "$window", "$location", "$filter", "$timeout", "productSetupService", "categorySetupService","Upload", function ($scope, $window, $location, $filter, $timeout, productSetupService, categorySetupService, Upload) {
    $scope.obj = {};
    $scope.obj.ambulance = [];
    getCategoriesData();   
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

    //Upload
    $scope.UploadFiles = function (files) {
        $scope.SelectedFiles = files;
        if ($scope.SelectedFiles && $scope.SelectedFiles.length) {
            Upload.upload({
                url: '/ProductSetup/PicUpload/',
                data: {
                    files: $scope.SelectedFiles
                }
            }).then(function (response) {
                $timeout(function () {
                    $scope.Result = response.data;
                });
            }, function (response) {
                if (response.status > 0) {
                    var errorMsg = response.status + ': ' + response.data;
                    alert(errorMsg);
                }
            }, function (evt) {
                var element = angular.element(document.querySelector('#dvProgress'));
                $scope.Progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                element.html('<div style="width: ' + $scope.Progress + '%">' + $scope.Progress + '%</div>');
            });
        }
    };
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