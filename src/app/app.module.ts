import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FontControllerComponent} from './font-controller/font-controller.component';
import {ColorControllerComponent} from './color-controller/color-controller.component';
import {TextDisplayComponent} from './text-display/text-display.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FontControllerComponent,
    ColorControllerComponent,
    TextDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
