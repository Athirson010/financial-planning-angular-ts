import { AnimateTimings } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Input() 
  control: AbstractControl | any;

  @Input()
  placeholder: string =''

  @Input()
  type: string =''

  constructor() { }
}
