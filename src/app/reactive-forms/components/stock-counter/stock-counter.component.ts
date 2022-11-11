import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'


const COUNTER_CONTROL_ACCESOR = {
  provide: NG_VALUE_ACCESSOR, //what makes us to go to the input and allow us to change the value(number)
  useExisting: forwardRef(() => StockCounterComponent),//tell angular that which compoent we want to use read and write access to our formcontrol
  multi: true
}
@Component({
  selector: 'app-stock-counter',
  templateUrl: './stock-counter.component.html',
  styleUrls: ['./stock-counter.component.scss'],
  providers: [COUNTER_CONTROL_ACCESOR]
})
export class StockCounterComponent implements ControlValueAccessor {

  private onTouch: Function;
  private onModelChange: Function;
  focus = false;

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  registerOnChange(fn: any) {
    this.onModelChange = fn;
  }

  writeValue(value: any) {
    console.log(value)
    this.value = value || 0;
  }

  @Input() step: number = 10;
  @Input() min: number = 10;
  @Input() max: number = 1000;

  value: number = 10;

  increment() {
    if (this.value < this.max) {
      this.value = this.value + this.step;
      this.onModelChange(this.value);
    }
    this.onTouch();
  }
  decrement() {
    if (this.value > this.min) {
      this.value = this.value - this.step;
      this.onModelChange(this.value);
    }
    this.onTouch();
  }
  onKeyDown($event: KeyboardEvent) {
    const handlers: any = {
      ArrowDown: () => this.decrement(),
      ArrowUp: () => this.increment(),
    }
    if (handlers[$event.code]) {
      handlers[$event.code]();
      $event.stopPropagation();
      $event.preventDefault();
    }
    this.onTouch();

  }
  onBlur($event: any) {
    this.focus = true;
    $event.stopPropagation();
    $event.preventDefault();
    this.onTouch();
  }
  onFocus($event: any) {
    this.focus = true;
    $event.stopPropagation();
    $event.preventDefault();
    this.onTouch();
  }
}
