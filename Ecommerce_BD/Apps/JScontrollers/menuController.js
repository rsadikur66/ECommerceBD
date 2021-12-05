app.controller('menuController', ["$scope", "$window", "$location", "$filter", "$timeout", "menuService", function ($scope, $window, $location, $filter, $timeout, menuService) {
    $scope.name = "DokanBD";
    $scope.obj = {};
    $scope.obj.formsList = {};
    $scope.obj.labelDataList = {};
    getgriddata();
    
    function getgriddata() {
        debugger;
        $scope.menudata = [];
        var gridData = menuService.GetMenuData();
        gridData.then(function (data) {
            $scope.obj.formsList = JSON.parse(data);
            $scope.Menuheader = $scope.obj.formsList[0].formtype_name;
            $scope.formCode = $scope.obj.formsList[0].T_FORM_CODE;
            getLabel($scope.formCode);
            console.log($scope.obj.formsList);
        });
    }

    function getLabel(formCode) {
        if (formCode != undefined) {
            var labelData = menuService.GetLabelData($scope.formCode);
            labelData.then(function (data) {
                $scope.labelDataList = JSON.parse(data);
                
                console.log($scope.obj.labelDataList);
            });
        } else {
            return;
        }        
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


