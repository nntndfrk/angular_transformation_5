import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-color-controller',
  templateUrl: './color-controller.component.html',
  styleUrls: ['./color-controller.component.css']
})
export class ColorControllerComponent implements OnInit {
  @Output() colorChange = new EventEmitter<string>();
  colorOptions = [
    {value: 'red', name: 'красный'},
    {value: 'blue', name: 'синий'},
    {value: 'green', name: 'зеленый'},
  ];

  selectedColor: string;

  constructor() {
  }

  ngOnInit() {
  }

  setColor() {
    this.colorChange.emit(this.selectedColor);
  }

}
