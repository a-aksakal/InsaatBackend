var Project = require("../dao/Project");

//Project
exports.getProjectList = function (req, res) {
  Project.getProjectList(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.postProject = function (req, res) {
  Project.postProject(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.putProject = function (req, res) {
  Project.putProject(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.deleteProject = function (req, res) {
  Project.deleteProject(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
//Flat
exports.getFlatList = function (req, res) {
  Project.getFlatList(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.postFlat = function (req, res) {
  Project.postFlat(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.putFlat = function (req, res) {
  Project.putFlat(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.deleteFlat = function (req, res) {
  Project.deleteFlat(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

//Employee
exports.getEmployeeList = function (req, res) {
  Project.getEmployeeList(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.postEmployee = function (req, res) {
  Project.postEmployee(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.putEmployee = function (req, res) {
  Project.putEmployee(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.deleteEmployee = function (req, res) {
  Project.deleteEmployee(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
