
app.service("productSetupService", ["$http", function ($http) {
    var dataService = {
        GetCategories: GetCategories,
        GetMeasureUnitData: GetMeasureUnitData
    };
    return dataService;

    function GetCategories() {
        try {
            var url = "/CategorySetup/GetCategories";
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

    function GetMeasureUnitData() {
        try {            
            var params = {};
            var url = "https://localhost:44312/api/test/getMeasureUnitData";
            return $http({
                url: url,
                method: "GET",
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


    //Insert and Update Function start
    function insertData(cat) {

        try {
            var url = '/CategorySetup/InsertData';
            return $http({
                url: url,
                method: "POST",
                data: JSON.stringify(cat)
            }).then(function (results) {
                return results.data;
            }).catch(function (ex) {
                throw ex;
            });
        } catch (ex) {
            throw ex;
        }
    }

    function updateData(cat) {

        try {
            var url = '/CategorySetup/UpdateData';
            return $http({
                url: url,
                method: "POST",
                data: JSON.stringify(cat)
            }).then(function (results) {
                return results.data;
            }).catch(function (ex) {
                throw ex;
            });
        } catch (ex) {
            throw ex;
        }
    }
    //Insert and Update Function End

    function deleteCategory(catId) {
        try {
            var url = '/CategorySetup/DeleteCategoryRecord';
            var params = { catId: catId };
            return $http({
                url: url,
                method: "POST",
                data: params
            }).then(function (results) {
                return results.data;
            }).catch(function (ex) {
                throw ex;
            })
        } catch (ex) {
            throw ex;
        }
    }
}]);