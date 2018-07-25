import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'
import { Title } from '@angular/platform-browser';
/**
 * 
 * 
 * @Components
 * 
 */

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';

/**
 * 
 * 
 * @Services
 * 
 */
import { DataService } from './services/data/data.service';
/**
 * 
 * 
 * @Routes
 * 
 */
import { router } from './app.route';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { MemberComponent } from './components/member/member.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthService } from './services/auth/auth.service';
import { AuthGuardService } from './services/auth/guards/auth-guard.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateUserComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    GetStartedComponent,
    MemberComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    router
  ],
  providers: [
    DataService,
    AuthService,
    AuthGuardService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
