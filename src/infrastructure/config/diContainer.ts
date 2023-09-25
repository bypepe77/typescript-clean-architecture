import { container } from "tsyringe";
import { TypegooseUserRepository } from "../repositories/user/UserRepository";
import { AddUserService } from "../../application/user/AddUserService";


container.register('UserRepository', TypegooseUserRepository);
container.register("AddUserService", AddUserService);

export default container;

