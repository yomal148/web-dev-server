import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helloController from "./controllers/hello-controller.js";
import userController   from "./controllers/users/user-controller.js";
import tuitsController from './controllers/tuits-controller.js';
const app = express();

const PROTOCOL = "mongodb+srv";
const DB_USERNAME = "yomal148"
const DB_PASSWORD = "Signature1!1"
const HOST = "cluster0.cvo2p.mongodb.net";
const DB_NAME = "myFirstDatabase";
const DB_QUERY = "retryWrites=true&w=majority";
const CONNECTION_STRING = `${PROTOCOL}://${DB_USERNAME}:${DB_PASSWORD}@${HOST}/${DB_NAME}?${DB_QUERY}`;
mongoose.connect(CONNECTION_STRING);

app.use(express.json());
app.use(cors());
helloController(app);
userController(app);
tuitsController(app);
app.listen(process.env.PORT || 4000);
