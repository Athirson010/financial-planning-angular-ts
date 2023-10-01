export interface LoginDTO{
    email: string;
    senha: string;
}

export interface TokenResponse{
    login: string;
    token: string;
}
