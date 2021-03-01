import { Injectable } from '@angular/core';

@Injectable()

export abstract class ProfileOptions {
  constructor() {

  }

  get genders() {
    return ["Enums.Gender.Unknow", "Enums.Gender.Male", "Enums.Gender.Female"];
  }

}