const mssqlconfig = require("../../mssqlConfig");
// Include MSSQL Driver
var sql = require("mssql");

// Create Connection Pool
const pool = new sql.ConnectionPool(mssqlconfig, function (err) {
  console.log("Connected to SQL server successfully!");
});

// METHOD ...
//Customer
exports.getCustomerList = function (callback) {
  var FUNCTIONNAME = "getCustomerList";

  var sqlStatement = `
  SELECT CustomerID, CustomerName , CustomerSurname ,CONVERT(varchar,BirthDate,103) AS 'BirthDate' , GSM, TC, C.GenderID , C.IncomeTypeID ,C.CityID, EMail, Address, G.GenderName, CT.CityName, CustomerNo, IT.IncomeTypeName, CONVERT(varchar,C.CreationDate,100) AS 'CreationDate'
    FROM Customer AS C
    LEFT JOIN Gender AS G ON G.GenderID=C.GenderID
    LEFT JOIN City AS CT ON CT.CityID=C.CityID
    LEFT JOIN IncomeType AS IT ON IT.IncomeTypeID=C.IncomeTypeID
    ORDER BY CustomerName
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
            CustomerTable: result.recordsets[0],
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
exports.postCustomer = function (callback) {
  var FUNCTIONNAME = "postCustomer";
  var serviceParameters = arguments[1];
  var sqlStatement = `
  INSERT INTO Customer (
    [CustomerName],
      [CustomerSurname],
      [GSM],
      [BirthDate],
      [TC],
      [EMail],
      [Address],
      [GenderID],
      [CityID],
      [CustomerNo],
      [IncomeTypeID]
    )
VALUES (
    '${serviceParameters.CustomerName}',
    '${serviceParameters.CustomerSurname}',		
    '${serviceParameters.GSM}',
    '${serviceParameters.BirthDate}',
    '${serviceParameters.TC}',
    '${serviceParameters.EMail}',
    '${serviceParameters.Address}',
    ${serviceParameters.GenderID},		
    ${serviceParameters.CityID},
    '${serviceParameters.CustomerNo}', 
    ${serviceParameters.IncomeTypeID}
    )
    declare @id int 
    set @id = SCOPE_IDENTITY()
		`;

  if (serviceParameters.CustomerFlatType != "" || undefined) {
    for (let i = 0; i < serviceParameters.CustomerFlatType.length; i++) {
      sqlStatement += `INSERT INTO CustomerRequest (CustomerID,FlatTypeID) VALUES(@id,${serviceParameters.CustomerFlatType[i]})`;
    }
  }

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
exports.putCustomer = function (callback) {
  var FUNCTIONNAME = "putCustomer";
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;
  var serviceParameters = arguments[1];
  var sqlStatement = `
            UPDATE Customer SET
            CustomerName = '${serviceParameters.CustomerName}',
            CustomerSurname ='${serviceParameters.CustomerSurname}',
            GSM = '${serviceParameters.GSM}',
            BirthDate='${serviceParameters.BirthDate}',
            TC='${serviceParameters.TC}',
            EMail='${serviceParameters.EMail}',
            Address='${serviceParameters.Address}',
            GenderID=${serviceParameters.GenderID},
            CityID=${serviceParameters.CityID},
            CustomerNo='${serviceParameters.CustomerNo}',
            IncomeTypeID=${serviceParameters.IncomeTypeID},
            UpdateDate='${today}'
            WHERE CustomerID = ${serviceParameters.CustomerID}
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
exports.deleteCustomer = function (callback) {
  var FUNCTIONNAME = "deleteCustomer";
  var serviceParameters = arguments[1];
  var sqlStatement = `
  DELETE FROM Customer 
            WHERE CustomerID = ${serviceParameters.CustomerID}
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
//Ziyaret
exports.getVisitList = function (callback) {
  var FUNCTIONNAME = "getCustomerList";

  var sqlStatement = `
  SELECT V.VisitID , CONVERT(varchar,V.VisitDate,103) AS 'VisitDate',V.Notes,V.CustomerID,V.ProjectID ,C.CustomerName,  C.CustomerSurname , P.ProjectName ,CONVERT(varchar,V.CreationDate,103) AS 'CreationDate' FROM Visit AS V
          LEFT JOIN Customer AS C ON C.CustomerID = V.CustomerID
          LEFT JOIN Project AS P ON V.ProjectID = P.ProjectID
          ORDER BY V.CreationDate
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
            VisitTable: result.recordsets[0],
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
exports.postVisit = function (callback) {
  var FUNCTIONNAME = "postVisit";
  var serviceParameters = arguments[1];
  var sqlStatement = `
  INSERT INTO Visit (VisitDate, CustomerID, ProjectID, Notes) VALUES ('${serviceParameters.VisitDate}',${serviceParameters.CustomerID},${serviceParameters.ProjectID},'${serviceParameters.Notes}')
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
exports.putVisit = function (callback) {
  var FUNCTIONNAME = "putVisit";
  var serviceParameters = arguments[1];
  var sqlStatement = `
  UPDATE Visit SET VisitDate = '${serviceParameters.VisitDate}', CustomerID = ${serviceParameters.CustomerID}, ProjectID = ${serviceParameters.ProjectID}, Notes = '${serviceParameters.Notes}', UpdateDate= getdate() WHERE VisitID = ${serviceParameters.VisitID}
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
exports.deleteVisit = function (callback) {
  var FUNCTIONNAME = "deleteVisit";
  var serviceParameters = arguments[1];
  var sqlStatement = `
  DELETE FROM Visit WHERE VisitID = ${serviceParameters.VisitID}
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
//Satış
exports.getSalesList = function (callback) {
  var FUNCTIONNAME = "getSalesList";

  var sqlStatement = `
  SELECT s.SalesID ,CONVERT(varchar,SalesDate,103) AS 'SalesDate' ,s.CustomerID,c.CustomerName,c.CustomerSurname ,s.FlatID,f.FlatNo ,s.Price ,s.EmployeeID,e.EmployeeName,e.EmployeeSurname ,s.Notes,CONVERT(varchar,s.CreationDate,100) AS 'CreationDate' 
      FROM Sales s
      LEFT JOIN Customer c ON s.CustomerID = c.CustomerID
      LEFT JOIN Flat f ON f.FlatID = s.FlatID
      LEFT JOIN Employee e ON e.EmployeeID = s.EmployeeID
      ORDER BY s.CreationDate DESC
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
            SalesTable: result.recordsets[0],
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
exports.postSales = function (callback) {
  var FUNCTIONNAME = "postSales";
  var serviceParameters = arguments[1];
  var sqlStatement = `
  INSERT INTO Sales(SalesDate,CustomerID,FlatID,Price,EmployeeID,Notes) VALUES ('${serviceParameters.SalesDate}',${serviceParameters.CustomerID},${serviceParameters.FlatID},${serviceParameters.Price},${serviceParameters.EmployeeID},'${serviceParameters.Notes}')
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
exports.putSales = function (callback) {
  var FUNCTIONNAME = "putSales";
  var serviceParameters = arguments[1];
  var sqlStatement = `
  UPDATE Sales SET SalesDate='${serviceParameters.SalesDate}', CustomerID='${serviceParameters.CustomerID}',FlatID='${serviceParameters.FlatID}',EmployeeID='${serviceParameters.EmployeeID}',Notes='${serviceParameters.Notes}' ,Price = '${serviceParameters.Price}', UpdateDate=getdate() WHERE SalesID= ${serviceParameters.SalesID}
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
exports.deleteSales = function (callback) {
  var FUNCTIONNAME = "deleteSales";
  var serviceParameters = arguments[1];
  var sqlStatement = `
  DELETE From Sales  WHERE SalesID = ${serviceParameters.SalesID}
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
