var Customer = require("../dao/Customer");

//Customer
exports.getCustomerList = function (req, res) {
  Customer.getCustomerList(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.postCustomer = function (req, res) {
  Customer.postCustomer(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.putCustomer = function (req, res) {
  Customer.putCustomer(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.deleteCustomer = function (req, res) {
  Customer.deleteCustomer(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
//Visit
exports.getVisitList = function (req, res) {
  Customer.getVisitList(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.postVisit = function (req, res) {
  Customer.postVisit(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.putVisit = function (req, res) {
  Customer.putVisit(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.deleteVisit = function (req, res) {
  Customer.deleteVisit(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

//Sales
exports.getSalesList = function (req, res) {
  Customer.getSalesList(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.postSales = function (req, res) {
  Customer.postSales(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.putSales = function (req, res) {
  Customer.putSales(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.deleteSales = function (req, res) {
  Customer.deleteSales(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
