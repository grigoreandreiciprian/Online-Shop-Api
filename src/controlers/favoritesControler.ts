import { RequestHandler, Request, Response } from "express";
import AsyncHandler from "express-async-handler";
import db from "../config/db";


const getAll: RequestHandler = AsyncHandler((async (req: Request, res: Response) => {

    const items = await db.models.Favorite.findAll()

    res.status(200).json(items)
}))


const addToFavorite: RequestHandler = AsyncHandler((async (req: Request, res: Response) => {

    const item = req.body

    await db.models.Favorite.create(item)

    res.status(200).end()
}))


const deleteFavorite: RequestHandler = AsyncHandler((async (req: Request, res: Response) => {

    let { id } = req.params


    const product = await db.models.Favorite.findByPk(id)

    if (product) {

        product.destroy()

        product.save()
    }

    res.status(200).end()
}))


export { getAll, addToFavorite, deleteFavorite }