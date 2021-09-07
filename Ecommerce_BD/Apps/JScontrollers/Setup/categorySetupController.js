app.controller('categorySetupController', ["$scope", "$window", "$location", "$filter", "$timeout", "categorySetupService", function ($scope, $window, $location, $filter, $timeout, categorySetupService) {
    $scope.obj = {};
    $scope.obj.cat = {};

    getCategoriesData();
    $scope.filteredTodos = [];

    $scope.buttonText = "Save";
    //getBrandsData();
    function getCategoriesData() {
        var categoriesData = categorySetupService.GetCategories();
        categoriesData.then(function (data) {
            $scope.obj.categories = JSON.parse(data);
            console.log($scope.obj.categories);
        });

    }

    function getBrandsData() {
        var brandsData = productSetupService.GetBrands();
        brandsData.then(function (data) {
            $scope.obj.brands = JSON.parse(data);
            console.log($scope.obj.brands);
        });

    }
    $scope.Save = function () {
        if ($scope.buttonText == "Save") {
            if ($scope.obj.cat.T_LANG2_NAME != undefined && $scope.obj.cat.T_LANG1_NAME != undefined) {
                var insert = categorySetupService.insertData($scope.obj.cat);
                insert.then(function (data) {
                    alert(data);
                    getCategoriesData();
                    clear();
                })
            } else {
                alert("You Must input both field.")
            };
        } else if ($scope.buttonText == "Update") {
            if ($scope.obj.cat.T_LANG2_NAME != undefined && $scope.obj.cat.T_LANG1_NAME != undefined) {
                var update = categorySetupService.updateData($scope.obj.cat);
                update.then(function (data) {
                    alert(data);
                    getCategoriesData();
                    clear();
                })
            } else {
                alert("You Must input both field.")
            };
        }

    };
    $scope.rowSelect = function (data) {
        $scope.obj.cat.CATEGORY_ID = data.CATEGORY_ID;
        $scope.obj.cat.T_LANG2_NAME = data.T_LANG2_NAME;
        $scope.obj.cat.T_LANG1_NAME = data.T_LANG1_NAME;
        $scope.buttonText = "Update";
    };
    $scope.Print = function () {
        //$window.open("../Q74001/R74001ReportWaittingAmbulance? popup",
        //    "width= 600, height = 600, left = 100, top = 50");
        $window.open("../CategorySetup/PrintReport?popup", "width = 600,height=600,left = 100, top = 50")
    }
    function clear() {
        $scope.obj.cat.T_LANG1_NAME = "";
        $scope.obj.cat.T_LANG2_NAME = "";
    }
    $scope.Delete = function () {
        if ($scope.obj.cat.CATEGORY_ID == undefined) {
            "Select any record."
        } else {
            var deletedata = categorySetupService.deleteCategory($scope.obj.cat.CATEGORY_ID)
            deletedata.then(function (data) {
                if (data == "true") {
                    getCategoriesData();
                    alert("Data Delete Successfully");
                } else {
                    getCategoriesData();
                    alert("Data not Delete");
                }
            })
        }
    }
}
]);