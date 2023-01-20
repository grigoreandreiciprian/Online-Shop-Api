
import { RequestHandler, Request, Response, NextFunction } from "express";
import AsyncHandler from "express-async-handler";
import db from "../config/db";
import { cartItem } from "../models/CartItems";
import { ProductAtributes } from "../models/Product";
import { RequestAuth } from "../models/RequestAuth";



const getOrders: RequestHandler = AsyncHandler((async (req: Request, res: Response) => {

    const orders = await db.models.Order.findAll()



    res.status(200).json(orders)
}))


const addOrder: RequestHandler = AsyncHandler((async (req: RequestAuth, res: Response, nex: NextFunction) => {

    //logica?
    const user = req.user;
    const cart = req.body


    const order = {
        ammount: 1,
        orderEmail: user.email,
        shippingAdress: user.streetAdress,
        orderDate: "10/28/2021",
        orderStatus: "true",
        customer_id: user.id
    }

    let or = await db.models.Order.create(order);




    cart.forEach(async (e: cartItem) => {

        const product = await db.models.Product.findByPk(e.id)
        const details = {
            order_id: or.get().id,
            product_id: e.id,
            quantity: e.quantity,
            price: e.quantity
        }

        await db.models.OrderDetails.create(details)



    });

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