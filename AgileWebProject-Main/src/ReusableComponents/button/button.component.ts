import { Component, Input, Output,EventEmitter} from '@angular/core';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input() text  !: String;
  @Input() color !: String;

  @Output() btnClick = new EventEmitter();


  Onclick():void {
    this.btnClick.emit();
  }
  

}
