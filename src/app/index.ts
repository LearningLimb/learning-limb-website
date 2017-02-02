import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes } from './routes';
import * as Components from './components';
import * as Services from './services';

@NgModule({
  declarations: [
    Components.AboutComponent,
    Components.AppComponent,
    Components.BookDetailComponent,
    Components.BooksComponent,
    Components.ButtonComponent,
    Components.CardComponent,
    Components.CartComponent,
    Components.FacebookLoginButtonComponent,
    Components.GoogleLoginButtonComponent,
    Components.HomeComponent,
    Components.JumbotronComponent,
    Components.LoginFormComponent,
    Components.NavBarComponent,
    Components.SignupComponent,
    Components.SupportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [
    Services.ApiService,
    Services.UserService,
    Services.BookService
  ],
  bootstrap: [Components.AppComponent]
})
export class AppModule { }
