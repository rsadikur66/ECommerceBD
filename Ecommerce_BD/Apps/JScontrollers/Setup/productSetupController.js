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
    function ddd() {
        var productsListData = productSetupService.GetProductsList();
        productsListData.then(function (data) {
            $scope.obj.productsList = JSON.parse(data);
        })
    }
    //3rd try
    //3rd try
    
    $scope.hide = function () {
        document.getElementById("image1").style.display = "none";
        document.getElementById("close").style.display = "none";
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



    ///3rd try
    $scope.preview_image = function (files) {
        for (var i = 0; i < files.length; i++) {
            $scope.indx = i;
            var reader = new FileReader();
            reader.onload = function () {
                var output = document.getElementById('output_image');
                $($.parseHTML('<img>')).attr('src', reader.result).appendTo(output);
               // output.src = reader.result;
            }

            reader.readAsDataURL(files[i]);
        }
        
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

    //Upload
    $scope.UploadFiles = function (files) {
        $scope.SelectedFiles = files;
        
        if ($scope.SelectedFiles && $scope.SelectedFiles.type == "image/jpeg") {
            for (var i = 0; i < $scope.SelectedFiles; i++) {
                /*document.getElementById("#imagePreview").innerHTML = "<div>This is inside my element with id=" + $scope.SelectedFiles+" </div>"*/
                console.log($scope.SelectedFiles);
            }
           
            //Upload.upload({
            //    url: '/ProductSetup/PicUpload/',
            //    data: {
            //        files: $scope.SelectedFiles
            //    }
            //}).then(function (response) {
            //    $timeout(function () {
            //        $scope.Result = response.data;
            //    });
            //}, function (response) {
            //    if (response.status > 0) {
            //        var errorMsg = response.status + ': ' + response.data;
            //        alert(errorMsg);
            //    }
            //}, function (evt) {
            //    var element = angular.element(document.querySelector('#dvProgress'));
            //    $scope.Progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            //    element.html('<div style="width: ' + $scope.Progress + '%">' + $scope.Progress + '%</div>');
            //});
        }
    };
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