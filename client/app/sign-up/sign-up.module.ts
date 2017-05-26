import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import { SignUpComponent } from './sign-up.component';

@NgModule({
  declarations: [
  //  SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
//  bootstrap: [SignUpComponent]
})
export class SignUpModule { }