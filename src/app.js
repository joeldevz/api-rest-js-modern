import express from "express"
import cors from "cors"
import api from "./routes"
const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use("/v0", api)
export default app