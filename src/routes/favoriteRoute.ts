
import express from "express"
import { getAll, addToFavorite, deleteFavorite } from "../controlers/favoritesControler"


const router = express.Router()


router.route("/").get(getAll)
router.route("/").post(addToFavorite)
router.route("/:id").delete(deleteFavorite)


export default router