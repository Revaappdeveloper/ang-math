import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MathcalComponent } from './components/mathcal/mathcal.component';
import { PalindromeComponent } from './components/palindrome/palindrome.component';
import { FibonacciComponent } from './components/fibonacci/fibonacci.component';

@NgModule({
  declarations: [
    AppComponent,
    MathcalComponent,
    PalindromeComponent,
    FibonacciComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
