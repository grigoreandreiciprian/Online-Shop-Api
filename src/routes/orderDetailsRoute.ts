
import express from "express"

import { getAll, addDetails, UpdateDetails, deleteDetail } from "../controlers/orderDetails"
import errorHandler from "../midleware/errorHandler"


const router = express.Router()


router.route("/").get(getAll, errorHandler)
router.route("/").post(addDetails, errorHandler)
router.route("/:id").put(UpdateDetails, errorHandler)
router.route("/:id").delete(deleteDetail, errorHandler)

export default router