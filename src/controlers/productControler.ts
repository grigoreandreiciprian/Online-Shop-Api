

import db from "../config/db";

import { RequestHandler, Request, Response, NextFunction } from "express";
import AsyncHandler from "express-async-handler";
import paginate from "express-paginate"



const getProducts: RequestHandler = AsyncHandler((async (req: Request, res: Response) => {

    let products = await db.models.Product.findAll();

    console.log(req);
    res.status(200).json(products);
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

const productPagination: RequestHandler = AsyncHandler((async (req: Request, res: Response, next) => {


    //@ts-ignore
    db.models.Product.findAndCountAll({ limit: req.query.limit, offset: req.skip })
        .then(results => {
            const itemCount = results.count;
            //@ts-ignore
            const pageCount = Math.ceil(results.count / req.query.limit);

            res.status(200).json({
                products: results.rows,
                pageCount,
                itemCount,
                pages: paginate.getArrayPages(req)(3, pageCount, req.query.page)
            }).end();

        }).catch(err => next(err))
}))








export { getProducts, addProduct, updateProduct, deleteProduct, uploadPhoto, productPagination }