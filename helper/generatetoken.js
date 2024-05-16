import jwt from "jsonwebtoken";
import "dotenv/config.js";

export async function generateToken(value) {
    const token = await jwt.sign({ id: value }, process.env.SECRET_KEY, {
        expiresIn: "1d",
    });
    return token;

}

export async function generateUserToken(value) {
    const token = await jwt.sign({ id: value }, process.env.SECRET_KEY_USER, {
        expiresIn: "1d",
    });
    return token;
}