app.service("menuService", ["$http", function ($http) {
    var dataService = {
        //menudata: MenuData,
        GetLabelData: GetLabelData,
        GetMenuData: GetMenuData

    };
    return dataService;

    function GetMenuData() {
        try {
            var url = "/Menu/GetMenuData";
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
    }//

    function GetLabelData(formCode) {
        try {
            var url = "/Menu/GetLabelData";
            var params = { formCode: formCode };
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
    }//

}]);