const mssqlconfig = require("../../mssqlConfig");
// Include MSSQL Driver
var sql = require("mssql");
var types = require("tedious");

// Create Connection Pool
const pool = new sql.ConnectionPool(mssqlconfig, function (err) {
  console.log("Connected to SQL server successfully!");
});

// METHOD ...
//Project
exports.getProjectList = function (callback) {
  var FUNCTIONNAME = "getProjectList";

  var sqlStatement = `
  SELECT p.ProjectID,p.ProjectName, c.CityName, p.CityID, p.ProjectStatusID, ps.ProjectStatusName, CONVERT(varchar,p.CreationDate,100) AS 'CreationDate'
  FROM Project p
  LEFT JOIN City c ON p.CityID = c.CityID
  LEFT JOIN ProjectStatus ps ON ps.ProjectStatusID = p.ProjectStatusID
  Order BY p.ProjectName
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
            ProjectTable: result.recordsets[0],
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
exports.postProject = function (callback) {
  var FUNCTIONNAME = "postProject";
  var serviceParameters = arguments[1];
  var sqlStatement = `
  INSERT INTO Project (ProjectName,CityID,ProjectStatusID) VALUES ('${serviceParameters.ProjectName}',${serviceParameters.CityID},${serviceParameters.ProjectStatusID})
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
exports.putProject = function (callback) {
  var FUNCTIONNAME = "putProject";
  var serviceParameters = arguments[1];
  var sqlStatement = `
  UPDATE Project SET ProjectName='${serviceParameters.ProjectName}' , CityID =${serviceParameters.CityID} , ProjectStatusID=${serviceParameters.ProjectStatusID}, UpdateDate= getdate() WHERE ProjectID = ${serviceParameters.ProjectID}
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
exports.deleteProject = function (callback) {
  var FUNCTIONNAME = "deleteProject";
  var serviceParameters = arguments[1];
  var sqlStatement = `
  DELETE FROM Project WHERE ProjectID=${serviceParameters.ProjectID}
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
//Flat
exports.getFlatList = function (callback) {
  var FUNCTIONNAME = "getFlatList";

  var sqlStatement = `
  SELECT FlatID, FlatNo, f.ProjectID,f.FlatTypeID,f.FlatStatusID,p.ProjectName, ft.FlatTypeName, fs.FlatStatusName, f.Price, CONVERT(varchar,f.CreationDate,103) AS CreationDate 
      FROM Flat f 
      LEFT JOIN Project p ON p.ProjectID = f.ProjectID 
      LEFT JOIN FlatType ft ON ft.FlatTypeID = f.FlatTypeID 
      LEFT JOIN FlatStatus fs ON fs.FlatStatusID = f.FlatStatusID 
      ORDER BY f.ProjectID,FlatNo
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
            FlatTable: result.recordsets[0],
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
exports.postFlat = function (callback) {
  var FUNCTIONNAME = "postFlat";
  var serviceParameters = arguments[1];
  var sqlStatement = `
  INSERT INTO Flat (FlatNo,ProjectID,FlatTypeID,FlatStatusID,Price) VALUES ('${serviceParameters.FlatNo}',${serviceParameters.ProjectID},${serviceParameters.FlatTypeID},${serviceParameters.FlatStatusID},${serviceParameters.Price})
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
exports.putFlat = function (callback) {
  var FUNCTIONNAME = "putFlat";
  var serviceParameters = arguments[1];
  var sqlStatement = `
  UPDATE  Flat SET FlatNo='${serviceParameters.FlatNo}', ProjectID=${serviceParameters.ProjectID},FlatTypeID=${serviceParameters.FlatTypeID},FlatStatusID=${serviceParameters.FlatStatusID},Price=${serviceParameters.Price}, UpdateDate= getdate() WHERE FlatID=${serviceParameters.FlatID}
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
exports.deleteFlat = function (callback) {
  var FUNCTIONNAME = "deleteFlat";
  var serviceParameters = arguments[1];
  var sqlStatement = `
  DELETE From Flat  WHERE FlatID = ${serviceParameters.FlatID}
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

//Employee
exports.getEmployeeList = function (callback) {
  var FUNCTIONNAME = "getEmployeeList";

  var sqlStatement = `
  SELECT EmployeeID, EmployeeName, EmployeeSurname, Username,Password,CONVERT(varchar,CreationDate,100) AS CreationDate FROM Employee ORDER BY EmployeeName
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
            EmployeeTable: result.recordsets[0],
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
exports.postEmployee = function (callback) {
  var FUNCTIONNAME = "postEmployee";
  var serviceParameters = arguments[1];
  var sqlStatement = `
  INSERT INTO Employee (EmployeeName,EmployeeSurname,Username,Password) VALUES ('${serviceParameters.EmployeeName}','${serviceParameters.EmployeeSurname}','${serviceParameters.Username}','${serviceParameters.Password}')
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
exports.putEmployee = function (callback) {
  var FUNCTIONNAME = "putEmployee";
  var serviceParameters = arguments[1];
  var sqlStatement = `
  UPDATE Employee SET EmployeeName = ('${serviceParameters.EmployeeName}'), EmployeeSurname = ('${serviceParameters.EmployeeSurname}'), UpdateDate= getdate() WHERE EmployeeID = (${serviceParameters.EmployeeID})
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
exports.deleteEmployee = function (callback) {
  var FUNCTIONNAME = "deleteEmployee";
  var serviceParameters = arguments[1];
  var sqlStatement = `
  DELETE FROM Employee WHERE EmployeeID = ${serviceParameters.EmployeeID}
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
