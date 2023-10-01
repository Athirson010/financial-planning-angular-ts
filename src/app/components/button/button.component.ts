import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
ngOnInit(): void {
 
}
@Input()
id: string = '';

@Input()
valor: string= '';

@Input()
disabled: boolean = false;
}
