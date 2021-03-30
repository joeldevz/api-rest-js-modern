import dotenv from 'dotenv';
import swaggerUI from "swagger-ui-express";
dotenv.config({ path: __dirname + '/../.env' })
import app from './app'
const port = process.env.PORT || 6060
const swaggerDocument = require('./swagger.json');
app.use('/v0/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
app.listen(port, () => {
    console.log(`Server listening on port ${port} http://localhost:${port}`)
})
