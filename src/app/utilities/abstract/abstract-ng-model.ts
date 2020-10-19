import { Injectable, ElementRef, forwardRef, Component, Provider } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { AbstractModal } from './modal';

export function getNgModelProvider(component: any): Provider {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => component),
    multi: true
  };
}

@Injectable()
export abstract class AbstractNgModel extends AbstractModal implements ControlValueAccessor {

  constructor() {
    super();
  }

  public model;
  private onChange: (value) => {};

  writeValue(value: any) {
    this.model = value;
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched() { }
  setDisabledState(isDisabled: boolean) { }

  public notifyValueChange() {
    if (this.onChange) {
      this.onChange(this.model);
    }
  }

}
