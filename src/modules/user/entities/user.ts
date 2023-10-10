import { Entity, TStatus } from "../../../kernel/types";

export type TUser = Entity<number> & {
    username: string;
    password: string;
    token?: string;
    lastSignIn?: string;
    createdAt?: string;
    status: TStatus;
    person?: any;
};