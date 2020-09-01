import { IUser } from '@utilities/interfaces/user.interface';
export class User implements IUser {
    public name: string;
    public email: string;
    public id: string;
    public firstLogin = true;
    public firstName: string;
    public lastName: string;
    public fullName: string;
    public photo: string;
    public nickName: string;
    constructor(userProfile) {
        this.name = userProfile.name;
        this.email = userProfile.email;
        this.firstName = userProfile.family_name || userProfile.firstName;
        this.lastName = userProfile.given_name || userProfile.lastName;
        this.id = userProfile.id;
        this.photo = userProfile.picture || userProfile.photo;
        if (userProfile.firstLogin !== undefined) {
            this.firstLogin = userProfile.firstLogin;
        }
        this.nickName = userProfile.nickName || userProfile.name;
    }
}
