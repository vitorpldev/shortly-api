const { SECRET_KEY_JWT, SECRET_KEY_AES, SMPT_EMAIL, SMPT_PASS } = process.env;

export const secretKeyJwt = SECRET_KEY_JWT as string;
export const secretKeyAes = SECRET_KEY_AES as string;
export const smptEmail = SMPT_EMAIL as string;
export const smptPass = SMPT_PASS as string;
