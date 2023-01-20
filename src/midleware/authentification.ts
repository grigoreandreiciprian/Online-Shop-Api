import { RequestHandler, Request, Response, NextFunction } from "express";

import AsyncHandler from "express-async-handler";

import jwt from "jsonwebtoken"
import db from "../config/db";
import { RequestAuth } from "../models/RequestAuth";
import Customer, { CostumerAtributes } from "../models/Customer";

const protect: RequestHandler = AsyncHandler((async (req: RequestAuth, res: Response, next: NextFunction) => {

    let token: String

    if (
        req.headers.authorization && req.headers.authorization.startsWith("Bearer")
    ) {

        try {


            token = req.headers.authorization.split(" ")[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            const user = await db.models.Customer.findByPk(decoded.id);



            req.user = {
                id: user.get().id,
                email: user.get().email,
                password: user.get().password,
                fullName: user.get().fullName,
                streetAdress: user.get().streetAdress,
                province: user.get().province,
                city: user.get().city,
                postalCode: user.get().postalCode,
                country: user.get().country,
                phone: user.get().phone
            }



            next();

        } catch (e) {

            throw new Error("No authorizion ,toke failed")
        }
    }


    if (!token) {
        console.log("err")
        throw new Error("No authorization, no token")
    }
}))


export default protect