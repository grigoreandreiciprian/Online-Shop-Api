
import express from "express"


const router = express.Router()
import { getOrders, addOrder, updateOrder, deleteOrder } from "../controlers/ordersControler"
import errorHandler from "../midleware/errorHandler"


import protect from "../midleware/authentification"

router.route("/").get(protect, getOrders, errorHandler)
router.route("/").post(protect, addOrder, errorHandler)
router.route("/:id").put(protect, updateOrder, errorHandler)
router.route("/:id").delete(protect, deleteOrder, errorHandler)


export default router