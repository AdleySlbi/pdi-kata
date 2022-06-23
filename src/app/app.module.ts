import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { OneMovieComponent } from './one-movie/one-movie.component';
import {MatCardModule} from '@angular/material/card';
import { AllMovieComponent } from './all-movie/all-movie.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FormsModule } from '@angular/forms';
import { EditFormComponent } from './edit-form/edit-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OneMovieComponent,
    AllMovieComponent,
    SearchBoxComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
