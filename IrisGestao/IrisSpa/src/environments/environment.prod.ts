
const baseUrl = 'https://localhost:7295/'

export const environment = {
    production: false,
    config: {
        baseUrl,
        apiUrl: `${baseUrl}api/`,
        b2cAuthUrl: 'https://enterprisetecnologia.b2clogin.com/enterprisetecnologia.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_SignUpSignIn&client_id=6d1f8c53-95af-4cf0-b5b2-479ad282e342&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fauthenticate&scope=openid&response_type=id_token&prompt=login&ui_locales=pt-BR'
    }
};
