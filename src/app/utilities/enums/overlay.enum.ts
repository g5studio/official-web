export enum EOverlayType {
    Modal = 'modal',
    Dialog = 'dialog',
    Close = ''
}

export enum EModalProvider {
    Introduction = 1,
    Album,
    Login,
    GeneralQuestion,
    Singup
}

export enum EModalSize {
    Large = 'lg',
    Middle = 'md',
    Small = 'sm'
}

export enum EDialogProvider {
    UserProfileEdit = 1
}

export enum EDeviceType {
    Desktop = 1920,
    Pad = 1200,
    Mobile = 767
}

export enum EMessage {
    UserNotFund = 'Messages.Error.UserNotFound',
    InvalidPassword = 'Messages.Error.InvalidPassword',
    EmailUnverified = 'Messages.Error.EmailUnverified',
    VerificationLetterSent = 'Messages.System.VerificationLetterSent',
    UnknowError = 'Messages.Error.Unknow',
    EmailNotMeetRules = 'Messages.Error.Email',
    PasswordNotMeetRules = 'Messages.Error.Password',
    ModifiedSuccessfully = 'Messages.System.ModifiedSuccessfully',
    ModifiedFailed = 'Messages.Error.ModifiedFailed'
}

export enum EGeneralQuestionModalType {
    Upgrade = 1,
    Teach,
    NoneExperience,
    Category,
    Charge,
    TalentOrder,
    Training,
    Project,
    Advisor
}



