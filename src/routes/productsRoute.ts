import express from "express"

const router = express.Router()

import { getProducts, addProduct, updateProduct, deleteProduct, uploadPhoto, productPagination } from "../controlers/productControler"
import errorHandler from "../midleware/errorHandler"
import protect from "../midleware/authentification"
import bodyParser from "body-parser";


router.route("/").get(protect, getProducts, errorHandler)
router.route("/").post(protect, addProduct, errorHandler)
router.route("/:id").put(protect, updateProduct, errorHandler)
router.route("/:id").delete(protect, deleteProduct, errorHandler)
router.route("/:id/upload").put(bodyParser.raw({ type: ["image/jpeg", "image/png"], limit: "5mb" }), uploadPhoto, errorHandler);
router.route("/paginate").get(productPagination, errorHandler)



export default router