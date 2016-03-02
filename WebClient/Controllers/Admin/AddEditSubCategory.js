
sidebar.controller('mycontroller', function ($scope) {


    $scope.SubCategory = {
        Category : "",
        Name: "",
        Discription: "",
        AttributeName: ""        
    }  

    $scope.Categories = {};
    $scope.CategoryId = "2";  
    $scope.Categories.CategoryList = [
        { Id: "1", CategoryName: "Life Style" },
        { Id: "2", CategoryName: "Electronics" },
        { Id: "3", CategoryName: "Home Appliances" },
        { Id: "4", CategoryName: "Automotive" },
        { Id: "5", CategoryName: "Books and More" }
    ];
   
  
    $scope.SubCategories = {};    
    $scope.SubCategories = [
        { SubCategoryId: "1", CategoryName: "Life Style", SubCategoryName: "All Clothing",Attributes: "Brand,Prize,Size" },
        //{ SubCategoryId: "2", CategoryName: "Life Style", SubCategoryName: "Footware",Attributes: "Brand,Prize,Size"  },
        //{ SubCategoryId: "3", CategoryName: "Electronics", SubCategoryName: "Mobile",Attributes: "Brand,Prize,Size,Operating System"  },
        //{ SubCategoryId: "4", CategoryName: "Home Appliances", SubCategoryName: "Furniture", Attributes: "Brand,Prize,Material,Discount" },
        //{ SubCategoryId: "5", CategoryName: "Automotive", SubCategoryName: "Cars", Attributes: "Brand,Prize,Model,color" },
        //{ SubCategoryId: "6", CategoryName: "Automotive", SubCategoryName: "Bikes", Attributes: "Brand,Prize,Model,color" },
        //{ SubCategoryId: "7", CategoryName: "Home Appliances", SubCategoryName: "Kitchen Appliances", Attributes: "Brand,Prize,Material,Discount" },
        //{ SubCategoryId: "8", CategoryName: "Books and More", SubCategoryName: "Musical Instruments", Attributes: "Brand,Prize,Discount" },
        //{ SubCategoryId: "9", CategoryName: "Electronics", SubCategoryName: "Computer", Attributes: "Brand,Prize,Size,Operating System" },

    ];
    $scope.Added = function () {
        alert("Attributes Saved")
    };
});