﻿var appUser = angular.module("appUser", ['ngRoute','ngAnimate', 'ui.bootstrap']);

    $routeProvider.when('/', {
        templateUrl: 'Views/User/UserDefault.html',
        controller: 'UserDefault'
    })
    //.otherwise({
    //    templateUrl: 'Views/User/UserDefault.html',
    //    controller: 'UserDefault'
    //})
}]);