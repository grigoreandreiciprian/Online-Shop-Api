import express from "express"

import cors from "cors"

import dotenv from "dotenv"
import db from "./src/config/db"
import router from "./src/routes/productsRoute"
import userRouter from "./src/routes/costumerRoute"
import orderRouter from "./src/routes/orderRoute"
import orderDetailsRouter from "./src/routes/orderDetailsRoute"
import favoriteRouter from "./src/routes/favoriteRoute"


dotenv.config()

const paginate = require("express-paginate")


let app = express()

app.use(paginate.middleware(10, 50));

app.use(cors())


app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));




app.use("/api/v1/products", router)
app.use("/api/v1/users", userRouter)
app.use("/api/v1/orders", orderRouter)
app.use("/api/v1/orderDetails", orderDetailsRouter)
app.use("/api/v1/favorite", favoriteRouter)




db.sequelize.sync().then(() => {

    app.listen(process.env.PORT || 5000, async () => {
        console.log("Express server is listening on port 5000!");
    });

})