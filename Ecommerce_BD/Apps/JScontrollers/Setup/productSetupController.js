/*const { forEach } = require("angular");*/

app.controller('productSetupController', ["$scope", "$window", "$location", "$filter", "$timeout", "productSetupService", "categorySetupService","Upload", function ($scope, $window, $location, $filter, $timeout, productSetupService, categorySetupService, Upload) {
    $scope.obj = {};
    $scope.obj.ambulance = [];
    $scope.files = [];
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
    //3rd try
    $scope.hide = function (index) {
        if (index > -1) {
            console.log($scope.files.splice(index, 1));
        }
        
        /*document.getElementById("image"+index).style.display = "none";*/
        //document.getElementById("close").style.display = "none";
    }
    $scope.$on("fileSelected", function (event, args) {
        var item = args;
        $scope.files.push(item);
        var reader = new FileReader();

        reader.addEventListener("load", function () {
            $scope.$apply(function () {
                item.src = reader.result;
            });
        }, false);

        if (item.file) {
            reader.readAsDataURL(item.file);
        }
        //alert('function call.....');
    });   
}
]);

app.directive('fileUpload', function () {
    return {
        scope: true, //create a new scope
        link: function (scope, el, attrs) {
            el.bind('change', function (event) {
                var files = event.target.files;
                //iterate files since 'multiple' may be specified on the element
                for (var i = 0; i < files.length; i++) {
                    //emit event upward
                    scope.$emit("fileSelected", {
                        file: files[i]
                    });
                }
            });
        }
    };
});
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