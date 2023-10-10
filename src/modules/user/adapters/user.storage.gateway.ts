import { pool } from "config/postgres";
import { TUser } from "../entities/user";
import { IUserRepository } from "../use_cases/ports/user.repository";

//Dao
export class UserStorageGateway implements IUserRepository {
    async findAll(): Promise<TUser[]> {
        const query = {
            `SELECT id,username,password,created_at as"createdAt",
            last_signin as "lastSignin",
            s.id as "statusId",
            s.description,
            r,id as "roledId",
            r.descrption as "role",
            p.name,
            p.surname,
            p.lastname from users ORDER BY id DESC`;
            const{ rows: userRows } = await pool.query(query);
            return userRows.map(user)=><TUser>user>
        }; 
        
        }
        findById(): Promise < TUser > {
            throw new Error("Method not implemented.");
        }
        save(user: TUser): Promise < TUser > {
            throw new Error("Method not implemented.");
        }
        update(user: TUser): Promise < TUser > {
            throw new Error("Method not implemented.");
        }
        delete (id: number): Promise < boolean > {
            throw new Error("Method not implemented.");
        }

    }