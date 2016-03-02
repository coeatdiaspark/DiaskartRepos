var rwOperation = require('./DAL/mongoosProcess.js');

exports.addDetails = function (req, resp) {    
    var modifiedContact = { FullName: req.body.FirstName + ' ' + req.body.LastName, Address: req.body.Address, City: req.body.City, State: req.body.State, Pincode: req.body.Pincode, Email: req.body.Email };          
    rwOperation.add(modifiedContact , resp)    
};

exports.getDetails = function (req, resp) {
    rwOperation.get(req , resp)
};
exports.deleteDetails = function (req, resp) {
    rwOperation.delete(req , resp)
};