import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
// import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { PaginateComponent } from './paginate/paginate.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { ShareModule } from './share/share.module';
import { FormTemplateComponent } from './form-template/form-template.component';

import { FormReactifComponent } from './form-reactif/form-reactif.component';
/**
 * L'ensemble des routes de notre application
 */



@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    SearchComponent,
    AlbumDescriptionComponent,
    PageNotFoundComponent,
    OpenCloseComponent,
    FirstCompComponent,
    SecondCompComponent,
    // PaginateComponent,
    AudioPlayerComponent,
    FormTemplateComponent,
    FormReactifComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // ReactiveFormsModule, parce que le shareModule gère l'élement pour nous
    BrowserAnimationsModule,
    HttpClientModule, 
    AdminModule,
    AppRoutingModule,
    ShareModule,

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }


