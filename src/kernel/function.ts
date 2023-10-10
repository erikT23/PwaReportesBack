import bcryptjs from 'bcryptjs';

export const hash = async (password : string ) => {
    return await new Promise<string>((resolve, reject) => {
        bcryptjs.hash(password, 10, (err, hash) => {
            if (err)
                reject(err);
            resolve(hash);
        });
    
    });
}
export const compare = async (password: string, hash: string):Promise<boolean> => {
    return await new Promise((resolve, reject) => {
        bcryptjs.compare(password, hash, (err, result) => {
            if (err)
                reject(err);
            resolve(result);
        });
    });
}