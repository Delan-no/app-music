import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  /**Emetteur d'evenements*/
  @Output() setPaginate: EventEmitter<{ start: number, end: number }> = new EventEmitter

  /** variable stockant la page actuelle */
  currentPage: number = 1; // par défaut = 1

  constructor(
    private albumService: AlbumService
  ) {
    this.perPage = this.albumService.paginateNumberPage();
  }
  ngOnInit(): void {
    this.albumService.count().subscribe(num => {
      this.total = num;
      this.numberPages = Math.ceil(this.total / this.perPage);

      for (let i = 1; i <= this.numberPages; i++) {
        this.pages.push(i);
      }
    });
  }

  next() {
    // si nous avons déjà ateint la dernière page de pagination
    if (this.currentPage >= this.numberPages) {
      // this.currenPage = 1 ; // revenir à la 1ère page
      return
    } else { // sinon
      this.currentPage++; // incrémenter
    }
    //Demander au  parent d'afficher les albums suivants dans la liste
    this.setPaginate.emit(this.setAlbums(this.currentPage))
  }

  previous() {
    if (this.currentPage > 1) {
      this.currentPage--;
    };

    this.setPaginate.emit(this.setAlbums(this.currentPage))
  }

  changePage(page: number) {
    this.currentPage = page
    this.setPaginate.emit(this.setAlbums(this.currentPage))
  }

  /** fonction qui retourne le sous ensemble d'albums à afficher */
  setAlbums(page: number): { start: number, end: number } {

    let start = (page - 1) * this.perPage;
    let end = start + this.perPage;
    // return {start:sart, end: end}
    return { start, end }
  }

}
