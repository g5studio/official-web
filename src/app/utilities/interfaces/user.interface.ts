import { EIdentity } from '@utilities/enums/user.enum';

export interface IUser {
    nickName: string;
    name: string;
    email: string;
    id: string;
    firstLogin: boolean;
    firstName: string;
    lastName: string;
    fullName: string;
    photo: string;
    identity: EIdentity;
}

export interface IGoogleUser {
    name: string;
    email: string;
    family_name: string;
    given_name: string;
    granted_scopes: string;
    id: string;
    locale: string;
    picture: string;
    verified_email: boolean;
}