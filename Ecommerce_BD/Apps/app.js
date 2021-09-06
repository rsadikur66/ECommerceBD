/// <reference path="../scripts/angular.min.js" />
/// <reference path="../../../scripts/angular_intellisense.js" />
var app = angular.module('EcommerceBD', ['ui.select', 'ngSanitize']);

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
(function () {
    function PagingController($scope) {

        $scope.pager = {};
        $scope.pagingSize = $scope.pagingSize || 10;
        $scope.itemPerPage = $scope.itemPerPage || 10;

        function setPager(itemCount, currentPage, itemPerPage) {
            currentPage = currentPage || 1;
            var startPage, endPage;

            var totalPages = Math.ceil(itemCount / itemPerPage);
            if (totalPages <= $scope.pagingSize) {
                startPage = 1;
                endPage = totalPages;
            } else {
                if (currentPage + 1 >= totalPages) {
                    startPage = totalPages - ($scope.pagingSize - 1);
                    endPage = totalPages;
                } else {
                    startPage = currentPage - parseInt($scope.pagingSize / 2);
                    startPage = startPage <= 0 ? 1 : startPage;
                    endPage = (startPage + $scope.pagingSize - 1) <= totalPages ? (startPage + $scope.pagingSize - 1) : totalPages;
                    if (totalPages === endPage) {
                        startPage = endPage - $scope.pagingSize + 1;
                    }
                }
            }

            var startIndex = (currentPage - 1) * itemPerPage;
            var endIndex = startIndex + itemPerPage - 1;

            var index = startPage;
            var pages = [];
            for (; index < endPage + 1; index++)
                pages.push(index);

            $scope.pager.currentPage = currentPage;
            $scope.pager.totalPages = totalPages;
            $scope.pager.startPage = startPage;
            $scope.pager.endPage = endPage;
            $scope.pager.startIndex = startIndex;
            $scope.pager.endIndex = endIndex;
            $scope.pager.pages = pages;
        }

        $scope.setPage = function (currentPage) {
            if (currentPage < 1 || currentPage > $scope.pager.totalPages)
                return;

            setPager($scope.totalItems.length, currentPage, $scope.itemPerPage);
            $scope.displayItems = $scope.totalItems.slice($scope.pager.startIndex, $scope.pager.endIndex + 1);
        };

        $scope.setPage(1);
    }

    function PagerController($scope) {
        $scope.pagingSize = 5;
        $scope.dataPerPage = 10;
        $scope.totalItems = [];

        for (var i = 1; i <= 200; i++)
            $scope.totalItems.push(i);

        $scope.displayItems = [];
    }

    app.controller('PagerController', ['$scope', PagerController]).directive('pagingControl', [function () {
        return {
            restrict: 'E',
            templateUrl: 'paging.html',
            controller: ['$scope', PagingController],
            scope: {
                totalItems: "=",
                displayItems: '=',
                pagingSize: '=',
                itemPerPage: '=noofitem'
            }
        };
    }]);
})();

