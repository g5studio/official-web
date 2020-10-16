import { Injectable } from '@angular/core';

@Injectable()

export abstract class ProfileOptions {
    constructor() {
        
    }

    get genders() {
        return ["User.Field.Gender.Unknow", "User.Field.Gender.Male", "User.Field.Gender.Female"];
      }
    
}