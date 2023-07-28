import { Component, EventEmitter,OnInit, Output } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  word: string = " ";
  
  @Output() searchAlbums: EventEmitter<Album[]> = new EventEmitter()

  constructor(
    private albumService: AlbumService
  ) { }
  
  ngOnInit():void{
    
  }
  
  onSubmit(form: NgForm): void {
    const results: Album[] = this.albumService.search(form.value.word);
    this.searchAlbums.emit(results)

  }

  onChangeEmit($event: string){
    const results: Album[] = this.albumService.search($event);
    this.searchAlbums.emit(results)
    // console.log("word a changé. Nouvelle valeur = ", $emit);
    
  }
}
