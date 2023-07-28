import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent implements OnInit {
  total: number = 0; //  nombre total d'albums
  perPage: number; // nombre d'album(s) par page (stocké dans les variables d'environnement)

  // nombre de boutons à générer
  numberPages: number = 0;

  // talbeau réunissant le label de chaque page
  pages: number[] = []

  constructor(
    private albumService: AlbumService
  ){
    this.perPage = this.albumService.paginateNumberPage();
  }
  ngOnInit(): void {
    this.total = this.albumService.count();
    this.numberPages = Math.ceil(this.total / this.perPage);
    
    for(let i= 1; i <= this.numberPages; i++){
      this.pages.push(i);
    }
  }

  
}
