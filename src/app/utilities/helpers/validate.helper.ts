export class Validator {
    constructor() { }

    public validatePassword(password: string): boolean {
        return /^(?=.*[^a-zA-Z0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,20}$/.test(password);
    }

    public getPasswordValidationError(password: string): string {
        const LENGTH = /^.{8,20}$/.test(password);
        const SYMBOL = /^(?=.*[^a-zA-Z0-9]).{1,}$/.test(password);
        const CHARACTER = /^(?=.*[A-Z])(?=.*[a-z]).{1,}$/.test(password);
        const NUMBER = /^(?=.*\d).{1,}$/.test(password);
        const MESSAGE =
            !LENGTH ? 'PasswordLengthNotEnough' :
                !CHARACTER ? 'PasswordNeedsCharacter' :
                    !NUMBER ? 'PasswordNeedsNumber' :
                        !SYMBOL ? 'PasswordNeedsSymbol' : null;
        return MESSAGE;
    }

    public validateEmail(email: string): boolean {
        return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(email);
    }
}