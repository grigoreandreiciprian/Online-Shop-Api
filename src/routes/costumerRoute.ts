import express from "express";


const userRouter = express.Router()

import errorHandler from "../midleware/errorHandler";

import { getAll, addUser, updateUser, deleteUser, logIn, uploadPhoto } from "../controlers/costumerControler"
import protect from "../midleware/authentification";
import bodyParser from "body-parser";



``
userRouter.route("/").get(getAll, errorHandler)
userRouter.route("/").post(addUser, errorHandler,)
userRouter.route("/:id").put(updateUser, errorHandler)
userRouter.route("/:id").delete(protect, deleteUser, errorHandler)
userRouter.route("/log").post(logIn, errorHandler)

userRouter.route("/:id/upload").put(bodyParser.raw({ type: ["image/jpeg", "image/png"], limit: "5mb" }), uploadPhoto, errorHandler);


export default userRouter