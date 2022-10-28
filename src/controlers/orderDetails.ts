
import { RequestHandler, Request, Response } from "express";
import AsyncHandler from "express-async-handler";
import db from "../config/db";


const getAll: RequestHandler = AsyncHandler((async (req: Request, res: Response) => {

    const details = await db.models.OrderDetails.findAll()

    res.status(200).json(details)
}))


const addDetails: RequestHandler = AsyncHandler((async (req: Request, res: Response) => {



    const detail = req.body

    console.log(detail)



    await db.models.OrderDetails.create(detail)

    res.status(200).end()
}))


const UpdateDetails: RequestHandler = AsyncHandler((async (req: Request, res: Response) => {

    let { id } = req.params

    let detail = await db.models.OrderDetails.findByPk(id)

    if (detail) {

        detail.set(req.body)

        detail.save()
    }

    res.status(200).end()
}))


const deleteDetail: RequestHandler = AsyncHandler((async (req: Request, res: Response) => {

    let { id } = req.params

    let detail = await db.models.OrderDetails.findByPk(id)

    if (detail) {

        detail.destroy()

        detail.save()
    }

    res.status(200).end()

}))



export { getAll, addDetails, UpdateDetails, deleteDetail }