import {Component, ElementRef, ViewChild} from '@angular/core';
import {TextDisplayComponent} from './text-display/text-display.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color: string;
  @ViewChild(TextDisplayComponent)
  displayComponent: TextDisplayComponent;

  setFontToChild(code: number) {
    this.displayComponent.setTextFont(code);
  }

  setColorToChild(color: string) {
    this.color = color;
  }
}
