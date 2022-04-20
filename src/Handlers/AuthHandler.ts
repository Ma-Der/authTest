import { OAuth2Client } from "google-auth-library"
import { clientId, clientSecret, redirectUri, scope } from '../Config/envVar'

export class AuthHandler {
    public static getAuthenticatedClient(): string {
        const oAuth2Client = this.getOAuth2Client()
        const authorizeUrl = oAuth2Client.generateAuthUrl({
            access_type: 'offline',
            scope,
            prompt: "consent" // tylko do tego, żeby za każdym razem wyświetlała nam się prośba o zgodę, można usunąć
        });
        return authorizeUrl
    }

    public static async getAuthenticatedToken(code: string): Promise<OAuth2Client> {
        const oAuth2Client = this.getOAuth2Client()
        const tokenResponse = await oAuth2Client.getToken(code);
        const token = tokenResponse.tokens

        oAuth2Client.setCredentials(token);
        return oAuth2Client;
    }

    private static getOAuth2Client(): OAuth2Client {
        const oAuth2Client = new OAuth2Client(clientId, clientSecret, redirectUri)

        return oAuth2Client
    }
}