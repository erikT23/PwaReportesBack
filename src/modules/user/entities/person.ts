import { Entity, TStatus } from "kernel/types";

export type TPerson = Entity<number> & {
    name: string;
    surname: string;
    lastname?: string;
    birthday?: string;
    createdAt?: string;
    curp?: string;
    RFC?: string;
    status?: TStatus
};