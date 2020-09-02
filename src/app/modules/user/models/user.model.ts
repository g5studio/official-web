import { IGoogleUser } from './../../../utilities/interfaces/user.interface';
import { IUser } from '@utilities/interfaces/user.interface';
import { EUserProvider, EIdentity } from '@utilities/enums/user.enum';
export class User implements IUser {
    public name: string;
    public email: string;
    public id: string;
    public firstLogin: boolean;
    public firstName: string;
    public lastName: string;
    public fullName: string;
    public photo: string;
    public nickName: string;
    public identity: EIdentity;
    constructor(profile: any, provider?: EUserProvider) {
        if (provider !== undefined) {
            this.signup(profile, provider);
        } else {
            this.inital(profile);
        }
        sessionStorage.setItem('user', JSON.stringify(this.id));
    }

    private inital(profile) {
        Object.keys(profile).forEach(key => this[key] = profile[key]);
    }

    private signup(profile: any, provider: EUserProvider) {
        switch (provider) {
            case EUserProvider.Google: this.asyncGoogleAccount(profile as IGoogleUser); break;
            case EUserProvider.FaceBook: break;
        }
    }

    private asyncGoogleAccount(userInfo: IGoogleUser) {
        this.name = userInfo.name;
        this.email = userInfo.email;
        this.firstName = userInfo.family_name;
        this.lastName = userInfo.given_name;
        this.id = userInfo.id;
        this.photo = userInfo.picture;
        this.nickName = userInfo.name;
        this.firstLogin = true;
        this.identity = EIdentity.Guest;
    }
}
