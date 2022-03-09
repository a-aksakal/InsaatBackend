// 'use strict';
const express = require("express");
const router = express.Router();

var contentController = require("../controllers/ContentController");

var cors = require("cors");
const app = express();

// Set up a whitelist and check against it:
var whitelist = ["http://localhost:3000", "http://example2.com"];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// Then pass them to cors:
app.use(cors(corsOptions));

app.use(require("body-parser").json());
// app.use(express.bodyParser({limit: '250mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,language"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

var bodyParser = {
  json: { limit: "500mb", extended: true },
  urlencoded: { limit: "500mb", extended: true },
};

//City
router.get("/getCityList", contentController.getCityList);
router.post("/postCity", contentController.postCity);
router.put("/putCity", contentController.putCity);
router.delete("/deleteCity", contentController.deleteCity);
//Flat Type
router.get("/getFlatTypeList", contentController.getFlatTypeList);
router.post("/postFlatType", contentController.postFlatType);
router.put("/putFlatType", contentController.putFlatType);
router.delete("/deleteFlatType", contentController.deleteFlatType);
//Gender
router.get("/getGenderList", contentController.getGenderList);
router.post("/postGender", contentController.postGender);
router.put("/putGender", contentController.putGender);
router.delete("/deleteGender", contentController.deleteGender);
//Income Type
router.get("/getIncomeTypeList", contentController.getIncomeTypeList);
router.post("/postIncomeType", contentController.postIncomeType);
router.put("/putIncomeType", contentController.putIncomeType);
router.delete("/deleteIncomeType", contentController.deleteIncomeType);
//Project Status
router.get("/getProjectStatusList", contentController.getProjectStatusList);
router.post("/postProjectStatus", contentController.postProjectStatus);
router.put("/putPtojectStatus", contentController.putProjectStatus);
router.delete("/deleteProjectStatus", contentController.deleteProjectStatus);
//Flat Status
router.get("/getFlatStatusList", contentController.getFlatStatusList);
//Login
router.post("/postLogin", contentController.postLogin);

module.exports = router;
