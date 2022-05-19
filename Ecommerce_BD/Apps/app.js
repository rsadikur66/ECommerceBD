/// <reference path="../scripts/angular.min.js" />
/// <reference path="../../../scripts/angular_intellisense.js" />
var app = angular.module('EcommerceBD', ['ui.select', 'ngSanitize', 'angularUtils.directives.dirPagination', 'ngFileUpload', 'ngRoute', ]);

app.run(function ($rootScope, $templateCache) {
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
        if (typeof (current) !== 'undefined') {
            $templateCache.remove(current.templateUrl);
        }
    });                                                                             
});
app.factory('Data', function () {
    return { obj: '' };
});

app.config(["$routeProvider", function ($routeProvider) {
    var d = window.location;
    $routeProvider.
        when("/product/:a/:b", {
            templateUrl: '/Html_Views/products.html',
            controller: 'products_ctr'
        }).
        otherwise({
            redirectTo: '/'
        })
   // $locationProvider.html5Mode(true).hashPrefix('!')
}]);
                                     