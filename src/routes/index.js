
import { Router } from 'express';
import { get } from '../controllers'
const api = Router()

//Set Routes
api.get('/', get)

export default api