import { injectable } from 'tsyringe';

@injectable()
export class User {
    constructor(
        public id : string,
        public name : string,
        public email : string,
        public password : string,
    ){}
}