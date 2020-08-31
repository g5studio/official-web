import { IUser } from '@utilities/interfaces/user.interface';
export class User implements IUser {
    public email: string;
    public name: string;
    constructor() {

    }
}