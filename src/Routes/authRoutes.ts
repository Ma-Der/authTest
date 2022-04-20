import { Router } from 'express'
import { AuthController } from '../Controllers/AuthController'

class Routes {
    router: Router

    constructor() {
        this.router = Router()
        this.createRoutes()
    }

    createRoutes() {
        this.router.get("/", AuthController.getAuthenticatedClient)
        this.router.get("/callback", AuthController.getAuthenticatedToken)
    }
}

const authRoutes = new Routes()
export default authRoutes