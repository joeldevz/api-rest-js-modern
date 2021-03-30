import dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/../.env' })
import app from './app'
const port = process.env.PORT || 6060
app.listen(port, () => {
    console.log(`Server listening on port ${port} http://localhost:${port}`)
})
