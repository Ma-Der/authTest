import { Request, Response } from 'express'
import { AuthHandler } from '../Handlers/AuthHandler'

export class AuthController {
    public static getAuthenticatedClient(req: Request, res: Response) {
        const authorizeUrl = AuthHandler.getAuthenticatedClient()

        res.redirect(authorizeUrl)
    }

    public static async getAuthenticatedToken(req: Request<{}, {}, {}, { code: string }>, res: Response) {
        try {
            const { code } = req.query

            const oAuth2Client = await AuthHandler.getAuthenticatedToken(code)
            return res.status(200).json(oAuth2Client)
        }
        catch(err: any) {
            const error = err as Error
            return res.status(400).json(error)
        }
    }
}