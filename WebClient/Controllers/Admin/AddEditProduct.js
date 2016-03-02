
sidebar.controller('ModalDemoCtrl', function ($scope, $uibModal, $log) {

    $scope.subcategories = ['computer', 'laptop', 'tablets'];

    //  $scope.animationsEnabled = true;

    $scope.openSubCat = function (size) {

        var subcatModal = $uibModal.open({
            animation: true,
            templateUrl: 'subcatModalContent.html',
            controller: 'subcatModalCtrl',
            size: size,
            resolve: {
                subcategories: function () {
                    return $scope.subcategories;
                }
            }
        });

        subcatModal.result.then(function (selectedsubcat) {
            $scope.selsubcat = selectedsubcat;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

sidebar.controller('subcatModalCtrl', function ($scope, $uibModalInstance, subcategories) {

    $scope.subcategories = subcategories;
    $scope.selected = {
        subcat : $scope.subcategories[0]
    };

    $scope.ok = function () {
        $uibModalInstance.close($scope.selected.subcat);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});
