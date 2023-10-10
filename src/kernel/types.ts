export type Entity<ID extends number | string> = {
    id: ID;
}
export type TPaination = {
    orderBy: string,
    page?: number,
    offset?: number,
    limit?: number,
    order?: string,
    filter?: string
};
export type JSON={
    [x:string]:any;
};
export type JSONArray=JSON[];
export type TStatus=Entity<number> & {
   description?:string;
}
export enum Error{
    MISSING_FILEDS="MissingFileds",
    RECORD_NOT_REGISTERED="RecordNotregistered",
    RECORD_NOT_UPDATE="RecordNotUpdated",
    NOT_DATA_FOUND="NoDataFound",
    CREDENTIALS_MISMATCH="CredentialMismatch",
    UNAUTHORIZED="Unauthorized",
    APP_PORT=""
}