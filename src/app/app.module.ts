import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { TodoappComponent } from './components/todoapp/todoapp.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoappComponent
  ],
  imports: [
   FormsModule, 
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
