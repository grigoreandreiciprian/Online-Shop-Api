import { RequestHandler, Request, Response, NextFunction } from "express";

import AsyncHandler from "express-async-handler";

import jwt from "jsonwebtoken"
import db from "../config/db";

const protect: RequestHandler = AsyncHandler((async (req: Request, res: Response, next: NextFunction) => {

    let token: String
    console.log("Intra in protect")
    if (
        req.headers.authorization && req.headers.authorization.startsWith("Bearer")
    ) {

        try {

            console.log("aici")

            token = req.headers.authorization.split(" ")[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            const user = await db.models.Customer.findByPk(decoded.id);

            next()

        } catch (e) {

            throw new Error("No authorizion ,toke failed")
            res.status(401)
        }
    }


    if (!token) {
        console.log("err")
        throw new Error("No authorization, no token")
    }
}))


export default protect