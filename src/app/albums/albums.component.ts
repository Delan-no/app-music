import { Component, OnInit } from '@angular/core';
import { Album } from "../album";
import { AlbumService } from '../album.service';
import { fadeInAnimation } from '../animation.module';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  animations: [
    fadeInAnimation
  ]
})

export class AlbumsComponent {
  // création d'un title à la page 
  titlePage: string = "Page principale Albums Music";
  albums!: Album[];
  selectedAlbum!: Album ; // je suis sur qu'une valeur sera passé au moment opportun
  status: string | null = null

  constructor(
    private albumService: AlbumService
  ) {
    console.log(`${this.albumService.count()} albums trouvé`);
  }

  ngOnInit(): void {
   this.albumService
   .paginate(0, this.albumService.paginateNumberPage())
   .subscribe({
    next: (alb: Album[]) =>{
      console.log('get<Album[]>', alb );
      this.albums = alb
    }
   })
  }

  onSelect(album: Album): void {
    this.selectedAlbum = album;
  }

  playParent($event: Album) {
    this.status = $event.id;

  }

  search($event: Album[]) {
    if ($event) {
      this.albums = $event;
    }

  }
  onSetPaginate($event: { start: number, end: number }) {
    //Récupérer les albums compris entre [start et end]
    this.albumService.paginate($event.start, $event.end)
    .subscribe({
      next: (alb: Album[]) => this.albums = alb
    });

  }
}
