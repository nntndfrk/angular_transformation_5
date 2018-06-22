import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-font-controller',
  templateUrl: './font-controller.component.html',
  styleUrls: ['./font-controller.component.css']
})
export class FontControllerComponent implements OnInit {
  @Output() fontChange = new EventEmitter<number>();
  fontOptions: { code: number, description: string }[] = [{
    code: 0,
    description: 'маленький шрифт'
  }, {
    code: 1,
    description: 'средний шрифт'

  }, {
    code: 2,
    description: 'большой шрифт'
  }];

  constructor() {
  }

  ngOnInit() {
  }

  setOption(option: number) {
    this.fontChange.emit(option);
  }

}
