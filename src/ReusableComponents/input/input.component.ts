import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  
})
export class InputComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  @Input() type!:String;
  @Input() placeholder!:String;
  @Input() id !:String;



}
