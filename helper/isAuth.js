import jwt from 'jsonwebtoken';
import 'dotenv/config.js';

const isAuth = async (res, req, next) => {
    let token;
    if (req.headers) {
        try {
            token = await req.headers['x-auth-token'];
            const decode = await jwt.verify(token, process.env.SECRET_KEY);
            if (decode) {
                next();
            }
        }
        catch (error) {
            res.status(500).json({ message: "can't authenticate", error });
        }
    }
    if (!token) {
        res.send("Access denied");
    }
};
export { isAuth };