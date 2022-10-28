import { RequestHandler, Request, Response } from "express";
import AsyncHandler from "express-async-handler";
import db from "../config/db";
import bcrypt from "bcrypt"



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


export { getAll, addUser, updateUser, deleteUser }