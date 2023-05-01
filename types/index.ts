export interface WindowSize {
    width: number;
    height: number;
}

export interface IUser {
    _id?: string;
    email: string;
    userName: string;
}

export interface LoginUserParams {
    email: string;
    password: string;
}