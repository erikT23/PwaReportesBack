import { TUser } from "../entities/user";
import { IUserRepository } from "../use_cases/ports/user.repository";
import { pool } from '../../../config/postgres';
import { Error } from "../../../kernel/types";
// Dao | "Service Repository"
export class UserStorageGateway implements IUserRepository {
    async findAll(): Promise<TUser[]> {
        const query = `SELECT * FROM users ORDER BY id DESC;`;
        const { rows: userRows } = await pool.query(query);
        return userRows.map((user) => <TUser>user);
    }
    findById(id: number): Promise<TUser> {
        throw new Error("Method not implemented.");
    }
    async save(user: TUser): Promise<boolean> {
        const client = await pool.connect();
        try {
            const { person } = user;
            await client.query('BEGIN');
            const query = 'INSERT INTO people(name,surname,lastname,birthdate,curp,rfc) VALUES($1,$2,$3,$4,$5,$6) RETURNING *;';
            const { rows: personRow } = await client.query(query, [
                person?.name,
                person?.surname,
                person?.lastname,
                person?.curp,
                person?.RFC,
            ]);
            if (!personRow[0]) throw  Error(Error.RECORD_NOT_REGISTERED);
            const savedPerson = personRow[0];
            const userQuer = 'INSERT INTO users(username,password,type,user_details,satus_id,person_id) VALUES($1,$2,$3,$4,$5,$6) RETURNING *;';
            const { rows: userRow } = await client.query(userQuer, [
                user.username,
                user.password,
                user.type,
                user.UserDetails,
                user.status?.id,
                savedPerson.id,

            ])
            await client.query("commit");
            user.id = userRow[0].id;
            user.person!.id = Number(savedPerson.id);
            return user;

        } catch (error) {

        }
    }
    update(user: TUser): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}