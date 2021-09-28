﻿app.controller('menuController', ["$scope", "$window", "$location", "$filter", "$timeout", "menuService",  function ($scope, $window, $location, $filter, $timeout, menuService) {
    $scope.name = "DokanBD";
    $scope.obj = {};
    $scope.obj.formsList = {};
    getgriddata();
    function getgriddata() {
        $scope.menudata = [];
        var gridData = menuService.GetMenuData();
        gridData.then(function (data) {
            $scope.obj.formsList = JSON.parse(data);
            $scope.Menuheader = $scope.obj.formsList[0].formtype_name;
            console.log($scope.obj.formsList);
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


