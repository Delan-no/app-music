import { Component, OnInit, OnChanges, Input, Output, EventEmitter, } from '@angular/core';
import { Album, List } from "../album";
import { AlbumService } from '../album.service';
import { fadeInAnimation } from '../animation.module';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css'],
  animations: [fadeInAnimation]
})

// à chaque "hook" son interface
export class AlbumDetailsComponent implements OnInit, OnChanges {

  @Input() album!: Album;   // propriété liée qui sera passée par le parent

  @Output() onPlay: EventEmitter<Album> = new EventEmitter();    // propriété liée qui sera passée par l'enfant

  albumLists: List[] = [];
  songs: string[] | undefined = [];
  constructor(
    private albumService: AlbumService
  ) { }

  ngOnInit(): void { }

  // tabAlbum!: Array<string>;

  ngOnChanges(): void {
    if (this.album) {
      this.songs = this.albumService.getAlbumList(this.album.id)?.list;
      // ALBUM_LISTS.forEach((element) => {
      //   if (element.id === this.album.id) {
      //     this.tabAlbum = element.list
      //   }
      // })
    }

    console.log("changement détecté sur le composant");

  }

  play(album: Album) {
    this.onPlay.emit(album);
    //émettre un album vers le parent 
  }

  // shuffleAbum(album: Album){
  //   this.albumService.shuffle(album)
  // }
}
