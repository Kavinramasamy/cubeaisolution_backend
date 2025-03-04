import mongoose from "mongoose";
import "dotenv/config.js";

export const db_connection = async () => {
    const url = process.env.DB_URL;
    await mongoose

        .connect(url)
        .then(() => console.log("DB_connected"))
        .catch((error) => console.log("DB_not connected", error));
}