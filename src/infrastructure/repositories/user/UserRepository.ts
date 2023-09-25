import { UserRepository } from "../../../domain/user/Repository";
import { User, UserModel } from "./models/User";
import { injectable } from 'tsyringe';

@injectable()
export class TypegooseUserRepository implements UserRepository {
    async save(user: User): Promise<void> {
        const userInstance = new UserModel(user);
        await userInstance.save();
    }

    async findByEmail(email: string): Promise<User | null> {
        return UserModel.findOne({ email }).lean().exec();
    }
}