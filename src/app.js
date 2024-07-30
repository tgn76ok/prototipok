import { resolve } from "path";

import "./database";
const bodyParser = require("body-parser");

import express from "express";
import cors from "cors";
import helmet from "helmet";

import validateResponse from "./middlewares/validateResponse";
// const { subscriber, handleWebhookNotifications } = require('./utils/services/webSocketHandler')



import userRoutes from "./routes/userRoutes";
import tokenRoutes from "./routes/tokenRoutes";


// import profileRoutes from "./routes/profileRoutes";
// import grandsRoutes from "./routes/GrandsRoutes";
const whiteList = ["http://localhost:3000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    // handleWebhookNotifications(subscriber);
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());

    this.app.use(validateResponse);
  }

  routes() {
    this.app.use("/users", userRoutes);
    this.app.use("/tokens", tokenRoutes);
   

    // //end points dev
    // this.app.use("/profile", profileRoutes);
    // this.app.use("/grands", grandsRoutes);

  }
}

export default new App().app;
