import { injectable, inject } from 'tsyringe';
import { UserRepository } from '../../domain/user/Repository';


@injectable()
export class AddUserService {
    constructor(
        @inject('UserRepository') private userRepository: UserRepository
    ) {}

    async execute(id: string, name: string, email: string, password: string): Promise<void> {
        const user = await this.userRepository.findByEmail(email);
        if (user) {
            // TODO: Create a custom error class
            throw new Error('User already exists.');
        }
        await this.userRepository.save({ id, name, email, password });
    }
}