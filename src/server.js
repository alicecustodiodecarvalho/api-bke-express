import express, { response } from 'express'
import authRouter from './routers/authRouter.js'
import accountRouter from './routers/accountRouter.js'
import errorHandler from './middlewares/errorHandler.js'
import welcome from './controllers/welcome.js'
import { ENVIRONMENT, PORT, HOST } from './config.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', welcome)

app.use('/auth', authRouter)
app.use('/account', accountRouter)

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Servidor rodando no Ambiente ${ENVIRONMENT} em ${ENVIRONMENT == 'production' ? HOST : HOST + ':' + PORT}`)
})