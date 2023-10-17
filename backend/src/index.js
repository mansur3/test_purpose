const express = require("express");
const app = express();
require("dotenv").config();
var cors = require("cors");
var AWS = require("aws-sdk");
const multer = require("multer");
const connection = require("./db.js");
const accessKeyId = "AKIA5LOS4BDGKMLH3BNQ";
const secretAccessKey = "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";

// cors configuration
app.use(cors());

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

//api
// Configure multer to handle file uploads
const storage = multer.memoryStorage(); // Store the file in memory
const upload = multer({ storage });

app.get("/create-table", (req, res) => {
  const tableName = `CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
)`;

  connection.query(tableName, (err, rows, fields) => {
    if (err) throw err;

    console.log("The solution is: ", rows[0]?.solution);
  });

  connection.end();
  res.status(200).send({ message: "Table created Successfully!" });
});
app.get("/create-data", (req, res) => {
  const createPersonData = `INSERT INTO Persons (PersonID, LastName, FirstName, Address, City) VALUES(1, "Dewan", "Mansur", "west bengal", "Kolkata")`;
  connection.query(createPersonData, (err, rows, fields) => {
    if (err) throw err;
    console.log("The Solution is: ");
  });
  connection.end();
  res.status(200).send({ message: "success" });
});
app.get("/get-all-person", (req, res) => {
  const selectAllPerson = `SELECT * FROM Persons`;
  connection.query(selectAllPerson, (err, rows, fields) => {
    if (err) throw err;
    // consol

    res.status(200).send({ message: "success", data: rows });
  });

  // connection.end();
});

// app.post("/putObject-s3", upload.single("file"), (req, res) => {
//   const fileBuffer = req.file.buffer;
//   const fileName = req.file.originalname;

//   var s3 = new AWS.S3({
//     accessKeyId: accessKeyId,
//     secretAccessKey: secretAccessKey,
//   });
//   const time = new Date().getTime();
//   s3.upload(
//     {
//       Bucket: "testwithbucket",
//       Key: time + fileName,
//       Body: fileBuffer,
//     },
//     (err, data) => {
//       if (err) {
//         console.error(err);
//       } else {
//         console.log(`File uploaded successfully. ${data.Location}`);
//       }
//     }
//   );
//   res.status(200).json({
//     message: "The object has been saved successfully.",
//   });
// });

// app.get("/api/allobject", (req, res) => {
//   var s3 = new AWS.S3({
//     accessKeyId: accessKeyId,
//     secretAccessKey: secretAccessKey,
//   });

//   const listAllFiles = async (bucket, marker) => {
//     const params = {
//       Bucket: bucket,
//     };

//     const { Contents, IsTruncated, NextMarker } = await s3
//       .listObjects(params)
//       .promise();

//     const files = Contents.map(
//       ({ Key }) => `https://testwithbucket.s3.amazonaws.com/${Key}`
//     );

//     res.status(200).json({
//       data: files,
//     });
//   };
//   listAllFiles("testwithbucket");
// });

app.listen(2233, (req, res) => {
  console.log("Listening on port 2233");
});
