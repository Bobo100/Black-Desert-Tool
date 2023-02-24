const express = require("express");
const app = express();
// https://github.com/RajKKapadia/Youtube-GoogleSheet-NodeJS/blob/main/src/index.js
// Google sheet npm package
const { GoogleSpreadsheet } = require("google-spreadsheet");
// File handling package
const fs = require("fs");
// spreadsheet key is the long id in the sheets URL
const RESPONSES_SHEET_ID = "1BcT1xF9CsenTftdavRj0DWaszdbSUvTIB9ff753kDl4";
// Create a new document
const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);
// Credentials for the service account
const CREDENTIALS = JSON.parse(
  fs.readFileSync("../lib/black-desert-378517-94f7666d54d8.json")
);

// 定義路由
app.get("/data", async (req, res) => {
  try {
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();
    const data = rows.map((row) => row._rawData);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// 啟動伺服器
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// const getRow = async () => {
//   // use service account creds
//   await doc.useServiceAccountAuth({
//     client_email: CREDENTIALS.client_email,
//     private_key: CREDENTIALS.private_key,
//   });
//   // load the documents info
//   await doc.loadInfo();
//   // Index of the sheet
//   let sheet = doc.sheetsByIndex[0];
//   // Get all the rows
//   let rows = await sheet.getRows();
//   for (let index = 0; index < rows.length; index++) {
//     const row = rows[index];
//     console.log(row._rawData);
//   }
// };
// getRow();
// getRow('email@gmail.com');

// const addRow = async (rows) => {
//   // use service account creds
//   await doc.useServiceAccountAuth({
//     client_email: CREDENTIALS.client_email,
//     private_key: CREDENTIALS.private_key,
//   });

//   await doc.loadInfo();

//   // Index of the sheet
//   let sheet = doc.sheetsByIndex[0];

//   for (let index = 0; index < rows.length; index++) {
//     const row = rows[index];
//     await sheet.addRow(row);
//   }
// };

// let rows = [
//   {
//     email: "email@email.com",
//     user_name: "ramesh",
//     password: "abcd@1234",
//   },
//   {
//     email: "email@gmail.com",
//     user_name: "dilip",
//     password: "abcd@1234",
//   },
// ];

// // addRow(rows);

// const updateRow = async (keyValue, oldValue, newValue) => {
//   // use service account creds
//   await doc.useServiceAccountAuth({
//     client_email: CREDENTIALS.client_email,
//     private_key: CREDENTIALS.private_key,
//   });

//   await doc.loadInfo();

//   // Index of the sheet
//   let sheet = doc.sheetsByIndex[0];

//   let rows = await sheet.getRows();

//   for (let index = 0; index < rows.length; index++) {
//     const row = rows[index];
//     if (row[keyValue] === oldValue) {
//       rows[index][keyValue] = newValue;
//       await rows[index].save();
//       break;
//     }
//   }
// };

// // updateRow('email', 'email@gmail.com', 'ramesh@ramesh.com')

// const deleteRow = async (keyValue, thisValue) => {
//   // use service account creds
//   await doc.useServiceAccountAuth({
//     client_email: CREDENTIALS.client_email,
//     private_key: CREDENTIALS.private_key,
//   });

//   await doc.loadInfo();

//   // Index of the sheet
//   let sheet = doc.sheetsByIndex[0];

//   let rows = await sheet.getRows();

//   for (let index = 0; index < rows.length; index++) {
//     const row = rows[index];
//     if (row[keyValue] === thisValue) {
//       await rows[index].delete();
//       break;
//     }
//   }
// };

// // deleteRow('email', 'ramesh@ramesh.com')
