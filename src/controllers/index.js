import { helloWorld } from "../services"
export const get = (req, res) => {
    return res.status(200).json(helloWorld())
}