

import db from "../config/db";

import { RequestHandler, Request, Response } from "express";
import AsyncHandler from "express-async-handler";



const getProducts: RequestHandler = AsyncHandler((async (req: Request, res: Response) => {

    let books = await db.models.Product.findAll();

    res.status(200).json(books);
}))


const addProduct: RequestHandler = AsyncHandler((async (req: Request, res: Response) => {

    let product = req.body

    await db.models.Product.create(product)

    res.status(200).end()

}))


const updateProduct: RequestHandler = AsyncHandler((async (req: Request, res: Response) => {

    let { id } = req.params

    const product = await db.models.Product.findByPk(id)

    if (product) {

        product.set(req.body)

        product.save()
    }

    res.status(200).end()
}))


const deleteProduct: RequestHandler = AsyncHandler((async (req: Request, res: Response) => {

    let { id } = req.params


    const product = await db.models.Product.findByPk(id)

    if (product) {

        product.destroy()

        product.save()
    }

    res.status(200).end()
}))

const uploadPhoto: RequestHandler = AsyncHandler((async (req: Request, res: Response) => {

    let { id } = req.params

    let product = await db.models.Product.findByPk(id)

    if (product) {
        product.set({
            picture: req.body,
        });

        product.save();
    }
    res.status(200).send("upload succes");

}))



export { getProducts, addProduct, updateProduct, deleteProduct, uploadPhoto }