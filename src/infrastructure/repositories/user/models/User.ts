import { prop, getModelForClass } from "@typegoose/typegoose";

export class User {
    @prop({ required: true, unique: true })
    public _id!: string;

    @prop({ required: true })
    public name!: string;

    @prop({ required: true, unique: true })
    public email!: string;

    @prop({ required: true })
    public password!: string;

    @prop({ default: Date.now })
    public createdAt?: Date;

    @prop({ default: Date.now })
    public updatedAt?: Date;

    get id(): string {
        return this._id.toString();
    }

}

export const UserModel = getModelForClass(User);