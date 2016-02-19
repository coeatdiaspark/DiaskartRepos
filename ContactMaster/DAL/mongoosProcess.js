var mongooseDrv = require('mongoose');
//var contactDomainProcess = require('./ContactDominProcess.js')

mongooseDrv.connect('mongodb://localhost/ContactDB');
var db = mongooseDrv.Connection; 

if (db == 'undefined') {
    console.log("The Connecion issues");
}
else
    console.log("Connected");


var ContactMasterSchema = mongooseDrv.Schema({
    FullName: String,   
    Address: String,
    City: String,
    State: String
},{ strict: false});

var ContactMasterModel = mongooseDrv.model('ContactMaster', ContactMasterSchema);

exports.add = function (modifiedContact, response) {    
    //var modifiedContact= contactDomainProcess.concatinate(request.body)      
    ContactMasterModel.create(modifiedContact, function (addError, addedContact) {
        if (addError) {
            //response.send(500, { error: addError });
            console.log(addError);
        }
        else {
            response.send({ success: true, cnt: addedContact });
            console.log("Record Inserted");  
        }
    });
};

exports.get = function (req, resp) {
    console.log("Data loading...");
    ContactMasterModel.find().exec(function (error, res) {
        if (error) {
            resp.send(500, { error: error });
        } else {
            resp.send(res);
            console.log("Data loaded !");
        }

    });
};

exports.delete = function (request, response) {   
    var id = request.body._id;
    ContactMasterModel.remove({ _id: id }, function (remError, addedContact) {
        if (remError) {
            response.send(500, { error: remError });
        }
        else {
            response.send({ success: 200 });
            console.log("Record Deleted");
        }
    });
};

