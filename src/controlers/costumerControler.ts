import { RequestHandler, Request, Response } from "express";
import AsyncHandler from "express-async-handler";
import db from "../config/db";
import bcrypt from "bcrypt"
import { json } from "sequelize";
import Customer from "../models/Customer";
import generateToken from "../utils/utils";




const getAll: RequestHandler = AsyncHandler((async (req: Request, res: Response) => {

    const users = await db.models.Customer.findAll()

    res.status(200).json(users)
}))

const addUser: RequestHandler = AsyncHandler((async (req: Request, res: Response) => {

    const hashedPasword = bcrypt.hashSync(req.body.password, 10)
    const user = {
        id: req.body.id,
        email: req.body.email,
        password: hashedPasword,
        fullName: req.body.fullName,
        billingAddress: req.body.billingAddress,
        country: req.body.country,
        phone: req.body.phone
    }



    await db.models.Customer.create(user)

    res.status(200).end()
}))

const updateUser: RequestHandler = AsyncHandler((async (req: Request, res: Response) => {

    let { id } = req.params

    let user = await db.models.Customer.findByPk(id)

    if (user) {

        user.set(req.body)

        user.save()
    }

    res.status(200).end()
}))


const deleteUser: RequestHandler = AsyncHandler((async (req: Request, res: Response) => {

    let { id } = req.params

    let user = await db.models.Customer.findByPk(id)

    if (user) {

        user.destroy()

        user.save()
    }

    res.status(200).end()
}))


const logIn: RequestHandler = AsyncHandler((async (req: Request, res: Response) => {

    let obj = req.body

    let user = await db.models.Customer.findOne({ where: { email: `${obj.email}` } });

    console.log(user.getDataValue("password"))



    if (user) {
        let authentificate = bcrypt.compareSync(obj.password, user.getDataValue("password"))

        if (authentificate) {
            res.status(200).json({
                id: user.getDataValue("id"),
                token: generateToken(user.getDataValue("id"))
            })
        }

    } else {
        res.status(401);
        throw new Error("Parola gresita!");
    }

}))


const uploadPhoto: RequestHandler = AsyncHandler((async (req: Request, res: Response) => {

    let { id } = req.params

    let user = await db.models.Customer.findByPk(id)

    if (user) {
        user.set({
            picture: req.body,
        });

        user.save();
    }
    res.status(200).send("upload succes");

}))

export { getAll, addUser, updateUser, deleteUser, logIn, uploadPhoto }