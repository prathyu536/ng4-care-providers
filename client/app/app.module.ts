// import modules here
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { I18nModule } from './app.translate.module';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';

// import components here
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpModule } from './sign-up/sign-up.module';

// import directives/pipes here

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent
  ],
  imports: [
    I18nModule,
    HttpModule,
    FormsModule,
    BrowserModule,
    TranslateModule,
    AppRoutingModule,
    SignUpModule
  ],
  providers: [],
  bootstrap: [AppComponent,SignUpComponent]
})
export class AppModule { }
