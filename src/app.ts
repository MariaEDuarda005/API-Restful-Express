import express from "express";
import config from "config";

const app = express()

//JSON middleware
app.use(express.json());

// DB
import db from "../config/db"

// Router
import router from "./router";

app.use("/api/", router) // agora consegue acessar as rotas da api via postman

//app port - numero de porta
const port = config.get<number>("port")

app.listen(3000, async () => {
    await db();
    console.log(`Aplicação está funcionado na porta: ${port}`)
})