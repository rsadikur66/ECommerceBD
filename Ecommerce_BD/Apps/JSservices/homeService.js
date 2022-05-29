app.service("homeService", ["$http", function ($http) {
    var dataService = {
        //menudata: MenuData,
        GetProdDataByCat: GetProdDataByCat,
        GetProductsData: GetProductsData,
         getcategoryList: getcategoryList
    };
    return dataService;

    function GetProductsData() {
        try {
            var url = "/Home/GetHomeData";
            var params = {};
            return $http({
                url: url,
                method: "GET",
                data: params
            }).then(function (results) {
                return results.data;
            }).catch(function (ex) {
                throw ex;
            });
        } catch (ex) {
            throw ex;
        }
    }
    function getcategoryList() {
        try {
            var url = "/Home/GetcategoryList";
            var params = {};
            return $http({
                url: url,
                method: "GET",
                data: params
            }).then(function (results) {
                return results.data;
            }).catch(function (ex) {
                throw ex;
            });
        } catch (ex) {
            throw ex;
        }
    }
    function GetProdDataByCat(catId) {
        try {
            var params = { catId: catId };
            var url = "/Home/GetProductsByCat";
            return $http({
                url: url,
                method: "POST",
                contentType: "application/json",
                data: params
            }).then(function (results) {
                return results.data;
            }).catch(function (ex) {
                throw ex;
            });
        } catch (ex) {
            throw ex;
        }
    }

}]);