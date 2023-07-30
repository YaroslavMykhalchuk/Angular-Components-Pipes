import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloAngularComponent } from './hello-angular/hello-angular.component';
import { RemoveDublicatePipe } from './pipes/remove-dublicate.pipe';
import { ConverterPipe } from './pipes/converter.pipe';
import { TelephoneNumberPipe } from './pipes/telephone-number.pipe';
import { DoubleLetterPipe } from './pipes/double-letter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelloAngularComponent,
    RemoveDublicatePipe,
    ConverterPipe,
    TelephoneNumberPipe,
    DoubleLetterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
