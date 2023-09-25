import { User } from "./User";


export interface UserRepository {
    findByEmail(id: string): Promise<User | null>;
    save(user: User): Promise<void>;
}