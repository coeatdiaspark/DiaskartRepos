
app.controller('mycontroller', function ($scope, mynodeservice) {
    
   
    $scope.Contact = {       
        FirstName: "",
        LastName: "",
        Address: "",
        City: "",
        State: "",
        Pincode:"",
        Email:""
    }

    loaddata();
   
    function loaddata() {
        debugger;
        var promise = mynodeservice.get();

        promise.then(function (resp) {
            $scope.ContactList = resp.data;
            $scope.message = "Call is Successful ";
        }, function (err) {
            $scope.message = "Error in Call" + err.status
        });
    };
   
    $scope.save = function () {
        debugger;
        var promisePost = mynodeservice.post($scope.Contact);
        promisePost.then(function (resp) {            
            $scope.message = "Call is Successful";            
            loaddata();
        }, function (err) {
            $scope.message = "Error in Call" + err.status
        });
    };

    $scope.clear = function () {
        $scope.Contact.FirstName = "";
        $scope.Contact.LastName = "";
        $scope.Contact.Address = "";
        $scope.Contact.City = "";
        $scope.Contact.State = "";
        $scope.Contact.Pincode = "";
        $scope.Contact.Email = "";
    };

    $scope.delete = function (cnt) {
        debugger;       
        var promiseDelete = mynodeservice.put(cnt);

        promiseDelete.then(function (resp) {
            $scope.message = "Call is Successful";
            loaddata();
        }, function (err) {
            $scope.message = "Error in Call" + err.status
        });
    }
});