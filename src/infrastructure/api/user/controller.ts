import { Request, Response } from 'express'
import { injectable, inject } from 'tsyringe';
import { AddUserService } from '../../../application/user/AddUserService';


@injectable()
export class Controller {
    constructor(
        @inject('AddUserService') private addUserService: AddUserService
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id, name, email, password } = request.body;
        try {
            await this.addUserService.execute(id, name, email, password);
            return response.status(201).send();
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}