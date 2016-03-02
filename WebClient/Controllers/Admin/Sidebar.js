var sidebar = angular.module("appAdmin", ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'smart-table']);sidebar.config(['$routeProvider',function($routeProvider) {
    $routeProvider.when('/Categories', {
        templateUrl: 'Views/Admin/Categories.html',
        controller: 'Categories'
    })
    .when('/SubCategories', {
        templateUrl: 'Views/Admin/SubCategories.html',
        controller: 'SubCategories'
    })
    .when('/Products', {
        templateUrl: 'Views/Admin/Products.html',
        controller: 'mainCtrl'
    })
    .when('/Orders', {
        templateUrl: 'Views/Admin/Orders.html',
        controller: 'Orders'
    })
    .when('/SalesReport', {
        templateUrl: 'Views/Admin/SalesReport.html',
        controller: 'SalesReport'
    })
    .when('/Customers', {
        templateUrl: 'Views/Admin/Customers.html',
        controller: 'Customers'
    })
        .when('/AddEditCategory', {
            templateUrl: 'Views/Admin/AddEditCategory.html',
            controller: 'AddEditCategory'
        })
         .when('/AddEditProduct', {
             templateUrl: 'Views/Admin/AddEditProduct.html',
             controller: 'ModalDemoCtrl'
         })
        .when('/AddEditSubCategory', {
            templateUrl: 'Views/Admin/AddEditSubCategory.html',
            controller: 'mycontroller'
        })
      .otherwise({
          templateUrl: 'Views/Admin/AdminDefault.html',
        controller: 'AdminDefault'
    }); 
}]);
