import express from "express"

const router = express.Router()

import { getProducts, addProduct, updateProduct, deleteProduct } from "../controlers/productControler"
import errorHandler from "../midleware/errorHandler"


router.route("/").get(getProducts, errorHandler)
router.route("/").post(addProduct, errorHandler)
router.route("/:id").put(updateProduct, errorHandler)
router.route("/:id").delete(deleteProduct, errorHandler)


export default router