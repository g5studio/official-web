import { IUserProfile } from '@utilities/interfaces/user.interface';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FirebaseService } from '@services/firebase.service';
import { User } from '@user/models/user.model';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit, OnChanges {

  @Input() user: User;
  public isEdit = false;
  public fields: IUserProfile;

  constructor(
    private $fb: FirebaseService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!!changes.user.currentValue) {
      this.fields = { ...{}, ...changes.user.currentValue.profile };
    }
  }

  public validator(input: string): boolean {
    return input.length > 0;
  }

  public modifyField(key: string, value: string) {
    this.fields[key] = value;
  }

  public submit() {
    this.isEdit = false;
    this.$fb.collection('users').update(this.user.profile.uid, this.fields);
  }
}
