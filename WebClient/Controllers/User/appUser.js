var appUser = angular.module("appUser", ['ngRoute','ngAnimate', 'ui.bootstrap']);
appUser.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'Views/User/UserDefault.html',
        controller: 'UserDefault'
    })
    //.otherwise({
    //    templateUrl: 'Views/User/UserDefault.html',
    //    controller: 'UserDefault'
    //})
}]);