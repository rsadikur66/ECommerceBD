app.service("menuService", ["$http", function ($http) {
    var dataService = {
        //menudata: MenuData,
        //UserLogout: UserLogout,
      GetMenuData: GetMenuData,
      getcategoryList: getcategoryList

    };
    return dataService;

  function getcategoryList() {
    try {
      var url = "/Menu/GetcategoryList";
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
    }

}]);