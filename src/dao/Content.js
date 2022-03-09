const mssqlconfig = require("../../mssqlConfig");
// Include MSSQL Driver
var sql = require("mssql");

// Create Connection Pool
const pool = new sql.ConnectionPool(mssqlconfig, function (err) {
  console.log("Connected to SQL server successfully!");
});

const jwt = require("jsonwebtoken");
let mySecretKey = "aLiCn34";

// METHOD ...
//City
exports.getCityList = function (callback) {
  var FUNCTIONNAME = "getCityList";

  var sqlStatement = `
  SELECT CityID, CityName FROM [dbo].[City] ORDER BY CityName
		`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = [
          {
            Result: "İşlem Başarılı!",
            Message: "",
            CityTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
exports.postCity = function (callback) {
  var FUNCTIONNAME = "postCity";
  var serviceParameters = arguments[1];
  var sqlStatement = `
  INSERT INTO City (CityName) VALUES ('${serviceParameters.CityName}')
		`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = {
          Result: "İşlem Başarılı!",
          Message: "",
          Data: result.recordsets[0],
        };
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
exports.putCity = function (callback) {
  var FUNCTIONNAME = "putCity";
  var serviceParameters = arguments[1];
  var sqlStatement = `
  UPDATE City SET CityName='${serviceParameters.CityName}' WHERE CityID = ${serviceParameters.CityID}
		`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = {
          Result: "İşlem Başarılı!",
          Message: "",
          Data: result.recordsets[0],
        };
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
exports.deleteCity = function (callback) {
  var FUNCTIONNAME = "deleteCity";
  var serviceParameters = arguments[1];
  var sqlStatement = `
  DELETE From City  WHERE CityID = ${serviceParameters.CityID}
		`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = {
          Result: "İşlem Başarılı!",
          Message: "",
          Data: result.recordsets[0],
        };
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
//FlatType
exports.getFlatTypeList = function (callback) {
  var FUNCTIONNAME = "getFlatTypeList";

  var sqlStatement = `
  SELECT FlatTypeID,FlatTypeName FROM dbo.FlatType
		`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = [
          {
            Result: "İşlem Başarılı!",
            Message: "",
            FlatTypeTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
exports.postFlatType = function (callback) {
  var FUNCTIONNAME = "postFlatType";
  var serviceParameters = arguments[1];
  var sqlStatement = `
  INSERT INTO FlatType (FlatTypeName) VALUES ('${serviceParameters.FlatTypeName}')
		`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = {
          Result: "İşlem Başarılı!",
          Message: "",
          Data: result.recordsets[0],
        };
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
exports.putFlatType = function (callback) {
  var FUNCTIONNAME = "putFlatType";
  var serviceParameters = arguments[1];
  var sqlStatement = `
  UPDATE FlatType SET FlatTypeName = '${serviceParameters.FlatTypeName}' WHERE FlatTypeID = ${serviceParameters.FlatTypeID}
		`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = {
          Result: "İşlem Başarılı!",
          Message: "",
          Data: result.recordsets[0],
        };
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
exports.deleteFlatType = function (callback) {
  var FUNCTIONNAME = "deleteFlatType";
  var serviceParameters = arguments[1];
  var sqlStatement = `
  DELETE FlatType WHERE FlatTypeID = ${serviceParameters.FlatTypeID}
		`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = {
          Result: "İşlem Başarılı!",
          Message: "",
          Data: result.recordsets[0],
        };
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
//Gender
exports.getGenderList = function (callback) {
  var FUNCTIONNAME = "getGenderList";

  var sqlStatement = `
  SELECT GenderID, GenderName FROM Gender ORDER BY GenderName
		`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = [
          {
            Result: "İşlem Başarılı!",
            Message: "",
            GenderTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
exports.postGender = function (callback) {
  var FUNCTIONNAME = "postGender";
  var serviceParameters = arguments[1];
  var sqlStatement = `
  INSERT INTO Gender (GenderName) VALUES ('${serviceParameters.GenderName}')
		`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = {
          Result: "İşlem Başarılı!",
          Message: "",
          Data: result.recordsets[0],
        };
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
exports.putGender = function (callback) {
  var FUNCTIONNAME = "putGender";
  var serviceParameters = arguments[1];
  var sqlStatement = `
  UPDATE Gender SET GenderName='${serviceParameters.GenderName}'  WHERE GenderID = ${serviceParameters.GenderID}
		`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = {
          Result: "İşlem Başarılı!",
          Message: "",
          Data: result.recordsets[0],
        };
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
exports.deleteGender = function (callback) {
  var FUNCTIONNAME = "deleteGender";
  var serviceParameters = arguments[1];
  var sqlStatement = `
  DELETE From Gender  WHERE GenderID = ${serviceParameters.GenderID}
		`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = {
          Result: "İşlem Başarılı!",
          Message: "",
          Data: result.recordsets[0],
        };
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
//Income Type
exports.getIncomeTypeList = function (callback) {
  var FUNCTIONNAME = "getIncomeTypeList";

  var sqlStatement = `
  SELECT IncomeTypeID,IncomeTypeName  FROM IncomeType  ORDER BY IncomeTypeName
		`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = [
          {
            Result: "İşlem Başarılı!",
            Message: "",
            IncomeTypeTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
exports.postIncomeType = function (callback) {
  var FUNCTIONNAME = "postIncomeType";
  var serviceParameters = arguments[1];
  var sqlStatement = `
  INSERT INTO IncomeType (IncomeTypeName) VALUES ('${serviceParameters.IncomeTypeName}')
		`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = {
          Result: "İşlem Başarılı!",
          Message: "",
          Data: result.recordsets[0],
        };
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
exports.putIncomeType = function (callback) {
  var FUNCTIONNAME = "putIncomeType";
  var serviceParameters = arguments[1];
  var sqlStatement = `
  UPDATE IncomeType SET IncomeTypeName='${serviceParameters.IncomeTypeName}' WHERE IncomeTypeID = ${serviceParameters.IncomeTypeID}
		`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = {
          Result: "İşlem Başarılı!",
          Message: "",
          Data: result.recordsets[0],
        };
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
exports.deleteIncomeType = function (callback) {
  var FUNCTIONNAME = "deleteIncomeType";
  var serviceParameters = arguments[1];
  var sqlStatement = `
  DELETE FROM IncomeType  WHERE IncomeTypeID=${serviceParameters.IncomeTypeID}
		`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = {
          Result: "İşlem Başarılı!",
          Message: "",
          Data: result.recordsets[0],
        };
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
//Project Status
exports.getProjectStatusList = function (callback) {
  var FUNCTIONNAME = "getProjectStatusList";

  var sqlStatement = `
  SELECT ProjectStatusID, ProjectStatusName, CONVERT(varchar, CreationDate, 103) AS 'CreationDate', CONVERT(varchar, UpdateDate, 103) AS 'UpdateDate' FROM ProjectStatus
		`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = [
          {
            Result: "İşlem Başarılı!",
            Message: "",
            ProjectStatusTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
exports.postProjectStatus = function (callback) {
  var FUNCTIONNAME = "postProjectStatus";
  var serviceParameters = arguments[1];
  var sqlStatement = `
  INSERT INTO ProjectStatus (ProjectStatusName) VALUES ('${serviceParameters.ProjectStatusName}')
		`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = {
          Result: "İşlem Başarılı!",
          Message: "",
          Data: result.recordsets[0],
        };
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
exports.putProjectStatus = function (callback) {
  var FUNCTIONNAME = "putProjectStatus";
  var serviceParameters = arguments[1];
  var sqlStatement = `
  UPDATE ProjectStatus SET ProjectStatusName='${serviceParameters.ProjectStatusName}' WHERE ProjectStatusID = ${serviceParameters.ProjectStatusID}
		`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = {
          Result: "İşlem Başarılı!",
          Message: "",
          Data: result.recordsets[0],
        };
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
exports.deleteProjectStatus = function (callback) {
  var FUNCTIONNAME = "deleteProjectStatus";
  var serviceParameters = arguments[1];
  var sqlStatement = `
  DELETE FROM ProjectStatus   WHERE ProjectStatusID=${serviceParameters.ProjectStatusID}
		`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = {
          Result: "İşlem Başarılı!",
          Message: "",
          Data: result.recordsets[0],
        };
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
//Flat Status
exports.getFlatStatusList = function (callback) {
  var FUNCTIONNAME = "getFlatStatus";

  var sqlStatement = `
  SELECT FlatStatusID, FlatStatusName FROM FlatStatus ORDER BY FlatStatusName DESC
		`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = [
          {
            Result: "İşlem Başarılı!",
            Message: "",
            FlatStatusTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
//Login
exports.postLogin = function (callback) {
  var FUNCTIONNAME = "postLogin";
  var serviceParameters = arguments[1];
  var sqlStatement = `
  SELECT email FROM Users WHERE email='${serviceParameters.email}' AND password='${serviceParameters.password}'
		`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed / SQL Error",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        if (result.recordsets[0].length > 0) {
          const myData = {
            emailAddress: serviceParameters.email,
          };
          let jwtToken = jwt.sign(myData, mySecretKey, { expiresIn: "1800s" });
          var returnVal = {
            Result: "İşlem Başarılı!",
            Message: "",
            Jwt: jwtToken,
          };
        } else {
          var returnVal = {
            Result: "Failed / invalid User",
            Message: "",
            Jwt: null,
          };
        }
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
