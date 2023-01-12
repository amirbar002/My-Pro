import express, { Application, Request, Response } from 'express'
import customers from './routers/customers'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()



const app: Application = express()
app.use(cors())
app.use(express.json())
app.use('/customers', customers)

app.get('/', (req: Request, res: Response) => {
    try {
        res.send('from index')
    } catch (error) {
        res.status(500)
    }
})

app.listen(process.env.APP_PORT, () => console.log(`server is listening on port ${process.env.APP_PORT}`))

