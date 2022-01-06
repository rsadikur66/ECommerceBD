/// <reference path="../scripts/angular.min.js" />
/// <reference path="../../../scripts/angular_intellisense.js" />
var app = angular.module('EcommerceBD', ['ui.select', 'ngSanitize', 'angularUtils.directives.dirPagination', 'ngFileUpload','ngRoute']);

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
  $routeProvider.
    when("/about", {
      templateUrl: "views/about.html"
    }).
    when("/page2", {
      templateUrl: "~/Views/Home/Contact.cshtml"
    }).
    otherwise({
      redirectTo:"~/Views/Home/HomePage.cshtml"
    });
}])
                                     