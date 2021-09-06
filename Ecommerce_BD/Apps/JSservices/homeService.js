app.service("homeService", ["$http", function ($http) {
    var dataService = {
        //menudata: MenuData,
        //UserLogout: UserLogout,
        GetProductsData: GetProductsData

    };
    return dataService;

    function LangName() {
        try {
            var url = vrtlDirr + 'LangName';
            var params = {};
            return $http({
                url: url,
                method: "POST",
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

}]);