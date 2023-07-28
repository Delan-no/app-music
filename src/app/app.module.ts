import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/**
 * L'ensemble des routes de notre application
 */
const albumsRoutes: Routes = [
  {
    path: 'albums',
    component: AlbumsComponent
  },

  {
    path: '',
    redirectTo:'/albums',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'album/:albumId',
    component: AlbumDescriptionComponent
  },

  {
    path: 'openclose',
    component: OpenCloseComponent
  },

  {
    path:'**',
    component: PageNotFoundComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    SearchComponent,
    AlbumDescriptionComponent,
    PageNotFoundComponent,
    OpenCloseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
//forRoot: méthode utilisée pour définir les routes à utilisés dans le module de routage.
    RouterModule.forRoot(albumsRoutes), // chargement des routes dans l'application

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


