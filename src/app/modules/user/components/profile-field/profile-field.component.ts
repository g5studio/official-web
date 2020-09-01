import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractNgModel, getNgModelProvider } from '@utilities/abstract/abstract-ng-model';

@Component({
  selector: 'app-profile-field',
  templateUrl: './profile-field.component.html',
  styleUrls: ['./profile-field.component.scss'],
  providers: [getNgModelProvider(ProfileFieldComponent)]
})
export class ProfileFieldComponent extends AbstractNgModel implements OnInit, OnChanges {

  @Input() isEdit = false;
  @Input() validator: any;

  constructor() {
    super();
  }

  public valid = true;

  get value() {
    return this.model;
  }

  set value(input: string) {
    if (this.valid) {
      this.model = input;
      this.notifyValueChange();
    }
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isEdit.currentValue === false) {
      this.valid = true;
    }
  }

  public validation(input) {
    if (this.validator) {
      this.valid = this.validator(input);
    }
  }

}
