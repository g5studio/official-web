import { Injectable, forwardRef, Provider } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export function getNgModelProvider(component: any): Provider {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => component),
    multi: true
  };
}

@Injectable()
export abstract class AbstractNgModel implements ControlValueAccessor {

  constructor() {

  }

  public model;
  private onChange: (value) => {};
  public disabled = false;

  writeValue(value: any) {
    this.model = value;
    this.onModelInitial(value);
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched() { }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  public notifyValueChange(value?: any) {
    if (this.onChange) {
      this.onChange(value || this.model);
    }
  }

  // overwrite to customize initial event
  public onModelInitial(value) { }

}
