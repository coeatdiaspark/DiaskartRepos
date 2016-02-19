app.service('mynodeservice', function ($http) {
    this.get = function () {
        var res = $http.get("http://localhost:8080/ContactList/api/Contact");
        return res;
    }

    this.post = function (cnt) {      
        var res = $http.post("http://localhost:8080/ContactList/api/Contact", cnt);
        return res;
    }

    this.put = function (cnt) {
        debugger;
        var res = $http.put("http://localhost:8080/ContactList/api/Contact/", cnt);
        return res;
    }
});