appUser.controller('Login', function ($scope, $uibModal) {
    debugger;
    $scope.openLogin = function (size){
        var subcatModal = $uibModal.open({
            animation: true,
            templateUrl: 'Views/User/Login.html',
            controller:'modalLogin',
            size: size
        })
    };
        
});

appUser.controller('modalLogin', function ($scope,$uibModalInstance) {
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});