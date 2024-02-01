// import http from "http";


    

      



// http.createServer((req, res) => {
//     res.writeHeader(200,{'content-type': 'application/json'})
//      res.write(JSON.stringify(data));
//     res.end();
// }).listen(6000);

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         "Content-Type": "json/application",                                                        
//     });
//     res.end(
//         JSON.stringify({
//             data: "NODE.JS1",
//         })
//     );
// });

// server.listen(5000, () => {
//     console.log("first");
// });

import express from "express"
//import express, { urlencoded } from "express";
import data from "./data.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json( { limit: "30mb" }));

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());
app.get(
  "/",
  (req, res) => {
    res.send({
      hotls: data,
    });
  },
);

app.listen(7000, () => {
  console.log("worked");
});
