import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './Component/header/header.component';
import { BlankComponent } from './Component/blank/blank.component';
import { ContactComponent } from './Component/contact/contact.component';
import { SearchComponent } from './Component/search/search.component';
import { ListContactComponent } from './Component/list-contact/list-contact.component';



import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './Component/homepage/homepage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './Component/about/about.component';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlankComponent,
    ContactComponent,
    SearchComponent,
    ListContactComponent,
    HomepageComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    NgbModule,
    // NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
