import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserCardComponent } from './user-card/user-card.component';
import { CardsComponent } from './cards/cards.component';
import { UsersService } from './users.service';
import { SearchPipe } from './search.pipe';  

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UserCardComponent,
    CardsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
