
import { RequestHandler, Request, Response } from "express";
import AsyncHandler from "express-async-handler";
import db from "../config/db";



const getOrders: RequestHandler = AsyncHandler((async (req: Request, res: Response) => {

    const orders = await db.models.Order.findAll()

    res.status(200).json(orders)
}))


const addOrder: RequestHandler = AsyncHandler((async (req: Request, res: Response) => {

    const order = req.body

    await db.models.Order.create(order)

    res.status(200).end()
}))


const updateOrder: RequestHandler = AsyncHandler((async (req: Request, res: Response) => {

    let { id } = req.params

    const order = await db.models.Order.findByPk(id)

    if (order) {

        order.set(req.body)

        order.save()
    }

    res.status(200).end()
}))

const deleteOrder: RequestHandler = AsyncHandler((async (req: Request, res: Response) => {

    let { id } = req.params

    const order = await db.models.Order.findByPk(id)

    if (order) {

        order.destroy()

        order.save()
    }

    res.status(200).end()
}))

export { getOrders, addOrder, updateOrder, deleteOrder }