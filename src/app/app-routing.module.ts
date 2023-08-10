import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { LoginComponent } from './login/login.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AlbumComponent } from './admin/album/album.component';

const albumsRoutes: Routes = [
  { path: 'albums', component: AlbumsComponent },
  { path: '', redirectTo:'/albums', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'album/:albumId' , component: AlbumDescriptionComponent},
  { path: 'openclose', component: OpenCloseComponent },
  { path: 'admin', component: AlbumComponent },

/*======== attention danger =========*/
  { path:'**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    RouterModule.forRoot(albumsRoutes),
  ],
  exports : [RouterModule]

})
export class AppRoutingModule { }
