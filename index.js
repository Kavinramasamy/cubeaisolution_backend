import { db_connection } from "./database/db_connection.js";
import cors from "cors";
import "dotenv/config.js";
import express from 'express';
import router from "./router/routers.js";




const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
db_connection();

//app.get('/', welcomeComp);
app.use("/", router);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log("Listening", PORT))