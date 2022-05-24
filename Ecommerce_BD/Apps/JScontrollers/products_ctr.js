app.controller("products_ctr", ['$scope', '$routeParams', "homeService", function ($scope, $routeParams, homeService) {
    $scope.routevalue = $routeParams.a;
    $scope.categoryId = $routeParams.b;
    $scope.qty_input_val = 1;
    $scope.disableQty = true;
    $scope.currentTab = 'tabRequisition.tpl.html';
    getProdDataByCategory($scope.categoryId);
    function getProdDataByCategory(catId) {
        var catData = homeService.GetProdDataByCat(catId);
        catData.then(function (data) {
            $scope.productList = JSON.parse(data);
            //for (var i = 0; i < $scope.productList.length; i++) {
            //    $scope.productList[i].QuantityName = $scope.productList[i].QuantityName == null ? '&nbsp;' : $scope.productList[i].QuantityName;
            //}
            console.log($scope.productList);
        })
    }

    //$scope.onClickTab = function () {        
    //    $scope.currentTab = 'tabRequisition.tpl.html';
    //    /*document.getElementById('exampleModal').style.display = 'none';*/
        
    //}

    $scope.AddToBag = function (d) {
        console.log(d);
        $scope.itemName = d.ProductName;
    }
    $scope.modalClick = function (d) {
        debugger;
        $scope.MdlProImage = d.ImageName;
        $scope.ProName = d.ProductName;
        $scope.ProQuantityName = d.QuantityName;
        $scope.ProPrice = d.Price;
        // $scope.Pro = d.ProductName;
        // $scope.Pro = d.ProductName;
        // $scope.ProName = d.ProductName
    }
    $scope.addQty = function () {
        let add = $scope.qty_input_val + 1;
        $scope.qty_input_val = add;
    }
    $scope.subtractQty = function () {
        if ($scope.qty_input_val < 1) {
            return;
        } else {
            let subtract = $scope.qty_input_val - 1;
            $scope.qty_input_val = subtract;
        }
    }

}]);