import express from "express";


const userRouter = express.Router()

import errorHandler from "../midleware/errorHandler"

import { getAll, addUser, updateUser, deleteUser } from "../controlers/costumerControler"




userRouter.route("/").get(getAll, errorHandler)
userRouter.route("/").post(addUser, errorHandler)
userRouter.route("/:id").put(updateUser, errorHandler)
userRouter.route("/:id").delete(deleteUser, errorHandler)


export default userRouter