import { IGoogleUser } from './../../../utilities/interfaces/user.interface';
import { IUserProfile } from '@utilities/interfaces/user.interface';
import { EUserProvider, EIdentity, EGender } from '@utilities/enums/user.enum';
import * as fb from 'firebase/app';
export class User {
    public profile: IUserProfile = {
        email: '',
        id: '',
        firstLogin: true,
        firstName: '',
        lastName: '',
        fullName: '',
        photo: '',
        nickName: '',
        identity: EIdentity.Guest,
        uid: '',
        gender: EGender.Empty,
        address: ''
    };
    constructor(profile: any, private user: fb.User, provider?: EUserProvider) {
        this.profile.uid = user.uid;
        if (!!provider) {
            this.createProfileByProvider(profile, provider);
        } else {
            if (profile) {
                this.setUserProfile(profile);
            } else {
                this.createProfileByUser();
            }
        }
    }

    public refreshUserProfile(profile: any) {
        this.profile = { ...this.profile, ...profile };
    }

    private createProfileByUser() {
        this.profile.nickName = this.user.uid;
        this.profile.email = this.user.email;
        this.profile.photo = 'assets/images/logo.png';
    }

    private setUserProfile(profile) {
        Object.keys(profile).forEach(key => this.profile[key] = profile[key]);
    }

    private createProfileByProvider(profile: any, provider: EUserProvider) {
        switch (provider) {
            case EUserProvider.Google: this.syncGoogleAccount(profile as IGoogleUser); break;
            case EUserProvider.FaceBook: break;
        }
    }

    private syncGoogleAccount(userInfo: IGoogleUser) {
        this.profile.fullName = userInfo.name;
        this.profile.email = userInfo.email;
        this.profile.firstName = userInfo.family_name;
        this.profile.lastName = userInfo.given_name;
        this.profile.id = userInfo.id;
        this.profile.photo = userInfo.picture;
        this.profile.nickName = userInfo.name;
        this.profile.identity = EIdentity.Guest;
    }
}
