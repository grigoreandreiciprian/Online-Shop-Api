
import express from "express"


const router = express.Router()
import { getOrders, addOrder, updateOrder, deleteOrder } from "../controlers/ordersControler"
import errorHandler from "../midleware/errorHandler"

router.route("/").get(getOrders, errorHandler)
router.route("/").post(addOrder, errorHandler)
router.route("/:id").put(updateOrder, errorHandler)
router.route("/:id").delete(deleteOrder, errorHandler)


export default router