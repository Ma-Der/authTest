import dotenv from 'dotenv'

dotenv.config()

export const port = process.env.PORT as string
export const clientId = process.env.CLIENT_ID as string
export const clientSecret = process.env.CLIENT_SECRET as string
export const redirectUri = process.env.REDIRECT_URI as string
export const scope = process.env.SCOPE as string