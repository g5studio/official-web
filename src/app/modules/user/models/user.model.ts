import { IGoogleUser } from './../../../utilities/interfaces/user.interface';
import { IUserProfile } from '@utilities/interfaces/user.interface';
import { EUserProvider, EIdentity } from '@utilities/enums/user.enum';
export class User implements IUserProfile {
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
    constructor(profile: any, public uid: string, provider?: EUserProvider) {
        if (!!provider) {
            this.createProfileByProvider(profile, provider);
        } else {
            this.setUserProfile(profile);
        }
    }

    private setUserProfile(profile) {
        Object.keys(profile).forEach(key => this[key] = profile[key]);
    }

    private createProfileByProvider(profile: any, provider: EUserProvider) {
        switch (provider) {
            case EUserProvider.Google: this.syncGoogleAccount(profile as IGoogleUser); break;
            case EUserProvider.FaceBook: break;
        }
    }

    private syncGoogleAccount(userInfo: IGoogleUser) {
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
