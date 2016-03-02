sidebar.controller('mainCtrl', ['$scope', function ($scope) {


    var
      productnameList = ['T-Shirt', 'Jeans', 'Computer', 'Mobile', 'Pen Drive'],
      productDescription = ['For Men Wearing', 'Computer Connects Everyone Over Internet', 'Testing Mobile App', 'Pen Driver', 'Jeans'],
      productQuantity = ['10', '200', '3000'],
      productPrice = ['20', '30', '40', '50'];
    id = 1;

    function createRandomItem() {
        var
          productName = productnameList[Math.floor(Math.random() * 5)],
          productDesc = productDescription[Math.floor(Math.random() * 5)],
          productQty = productQuantity[Math.floor(Math.random() * 3)],
          productPric = productPrice[Math.floor(Math.random() * 4)];

        return {
            id: id,
            productName: productName,
            productDesc: productDesc,
            productQty: productQty,
            productPric: productPric
        };
    }

    $scope.itemsByPage = 15;

    $scope.collection = [];
    $scope.displayed = [].concat($scope.collection);
    for (var j = 0; j < 200; j++) {
        $scope.collection.push(createRandomItem());
    }



    function generateRandomItem(id) {

        productName = productnameList[Math.floor(Math.random() * 5)],
         productDesc = productDescription[Math.floor(Math.random() * 5)],
         productQty = productQuantity[Math.floor(Math.random() * 3)],
         productPric = productPrice[Math.floor(Math.random() * 4)];

        return {
            id: id,
            productName: productName,
            productDesc: productDesc,
            productQty: productQty,
            productPric: productPric
        }
    }


    for (id; id < 5; id++) {
        $scope.collection.push(generateRandomItem(id));
    }

    //add to the real data holder
    $scope.addRandomItem = function addRandomItem() {
        $scope.collection.push(generateRandomItem(id));
        id++;
    };

    //remove to the real data holder
    $scope.removeItem = function removeItem(row) {
        var index = $scope.collection.indexOf(row);
        if (index !== -1) {
            $scope.collection.splice(index, 1);
        }
    }


}]);
   
    
