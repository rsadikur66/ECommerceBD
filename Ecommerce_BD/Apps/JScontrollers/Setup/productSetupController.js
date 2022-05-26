app.controller("productSetup_ctr", ["$scope", "productSetupService", function ($scope, productSetupService) {
    $scope.obj = {};
    $scope.price = "Price";
    $scope.DocumentName = "setup product";
    $scope.files = [];
    getCategoriesData();
    function getCategoriesData() {
        var categoriesData = productSetupService.GetCategories();
        categoriesData.then(function (data) {
            $scope.obj.categories = data;
            console.log($scope.obj.categories);
        });
    }

    getMeasureUnitData();
    function getMeasureUnitData() {
        var MeasureUnitData = productSetupService.GetMeasureUnitData();
        MeasureUnitData.then(function (data) {
            $scope.obj.measureUnit = data;
            console.log($scope.obj.measureUnit);
        });
    }
    $scope.Save = function () {
        console.log(document.getElementById('uploadFile').files[0].name);
        console.log($scope.ProductName);
        console.log($scope.Price);
        console.log($scope.QuantityAmount);
        console.log($scope.selectedMeasureUnit);
        console.log($scope.selectedCategory);

    }

    $(function () {
        // Multiple images preview in browser
        var imagesPreview = function (input, placeToInsertImagePreview) {
            if (input.files) {
                var filesAmount = input.files.length;
                for (i = 0; i < filesAmount; i++) {
                    var reader = new FileReader();
                    reader.onload = function (event) {
                        debugger;
                        $($.parseHTML('<img>')).attr('src', event.target.result).appendTo(placeToInsertImagePreview);
                    }
                    reader.readAsDataURL(input.files[i]);
                }
            }
        };

        $('#gallery-photo-add').on('change', function () {
            imagesPreview(this, 'div.gallery');
        });
    });


}]);
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