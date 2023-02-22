import { GoogleAuth, JWT } from "google-auth-library";

async function authorize() {
    const auth = new GoogleAuth({
        scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });
    const client = await auth.getClient() as JWT;
    return client;
}

const client = authorize();
