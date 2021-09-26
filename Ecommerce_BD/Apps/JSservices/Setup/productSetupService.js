app.service("productSetupService", ["$http", function ($http) {
    var dataService = {
        //menudata: MenuData,
        //UserLogout: UserLogout,
        GetCategories: GetCategories,
        GetBrands: GetBrands,
        GetProductsList: GetProductsList

    };
    return dataService;
    function GetProductsList() {
        try {
            var url = "/ProductSetup/GetProductsList";
            var params = {};
            return $http({
                url: url, method:
                    "GET",
                data: params
            }).then(function (results) {
                return results.data;
            }).catch(function (ex) {
                throw ex;
            })
        } catch (ex) {

        }
    }
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

    function GetCategories() {
        try {
            var url = "/ProductSetup/GetCategories";
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
    function GetBrands() {
        try {
            var url = "/ProductSetup/GetBrands";
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