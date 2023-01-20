
import express from "express"

import { getAll, addDetails, UpdateDetails, deleteDetail } from "../controlers/orderDetails"
import errorHandler from "../midleware/errorHandler"

import protect from "../midleware/authentification"


const router = express.Router()


router.route("/").get(protect, getAll, errorHandler)
router.route("/").post(addDetails, errorHandler)
router.route("/:id").put(protect, UpdateDetails, errorHandler)
router.route("/:id").delete(protect, deleteDetail, errorHandler)

export default router