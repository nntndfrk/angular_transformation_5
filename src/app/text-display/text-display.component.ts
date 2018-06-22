import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-text-display',
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.css']
})
export class TextDisplayComponent implements OnChanges {
  code = 0;
  @Input() color: string;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.color.firstChange) {
      this.color = 'black';
    } else {
      this.color = changes.color.currentValue;
    }
  }

  setTextFont(code) {
    this.code = code;
  }


}
