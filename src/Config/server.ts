import express, { Express } from 'express'
import authRoutes from '../Routes/authRoutes'
import { port } from './envVar'

export const initializeServer = (): Express => {
    const app = express();

    app.use(express.json())
    app.use("/", authRoutes.router)

    startServer(app)
    return app;
}

const startServer = (server: Express) => {
    server.listen(port, () => {
        console.log(`Server started on port: ${port}`)
    })
}