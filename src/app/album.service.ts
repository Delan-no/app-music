import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Album, List, SortAlbumCallback } from './album';
import { ALBUMS, ALBUM_LISTS } from './mock-albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private _albums: Album[] = ALBUMS; // _ convention private & protected
  private _albumList: List[] = ALBUM_LISTS

  // Observable qui notifie aux abonné la page actuelle
  sendCurrentNumberPage = new Subject<number>();

  constructor() { }

  getAlbums(): Album[] {
    // return this._albums
     return this._albums.sort((a:Album, b:Album) => b.duration - a.duration );
  }

  /**
   * 
   * @param id identifiant de l'album particulier
   * @returns  Retourne l'album 
   */
  getAlbum(id: string): Album | undefined {
    return this._albums.find(album => album.id === id)
  }

  /**
   * Fonction de recherche des sons d'un albums
   * @param id  ode,tofoa,t de l'album à rechercher
   * @returns La référence sera retourné si elle existe ; undefined si l'id n'existe pas dans la liste.
   */
  getAlbumList(id: string): List | undefined {
    return this._albumList.find(List => List.id === id)
  }

  /**
   * Fonction qui retourne le nombre d'albums
   * @returns Le nombre d'albums
   */
  count() {
    return this._albums.length;
  }

  // paginate(start: number, end: number): Album[]{
  //   return this._albums.slice(start, end).sort((a: Album, b: Album) => b.duration -a.duration)
  // }

  /**
   * les methodes order() et limit() jouent le rôle de la méthode paginate
   * @returns 
   */
  order(callback: SortAlbumCallback): AlbumService {
    this._albums.sort((a: Album, b: Album) => b.duration - a.duration);
    return this;
  }

  limit(start: number, end: number): AlbumService {
    this._albums = this._albums.slice(start, end);
    return this // 
  }

  
  paginate(start: number, end: number): Album[]{
    return this.getAlbums().slice(start, end)
  }


  search(word: string): Album[] {
    return this._albums
      .filter(album => {
        return album.ref
          .toLowerCase()
          .includes(word.trim().toLowerCase());
      });
  }

  // searchV2 (word: string): Album[]{
  //   let re = new RegExp(word.trim(), "g");
  //   return this._albums.filter(album => album.title.match(re))
  // }
  /**
   * Méthode qui rencoi le nombre d'album qu'on aura par page 
   */
  paginateNumberPage(): number {
    return environment.numberPage;
  }

  /**
   * Méthode qui signale à tous les composants la page actuelle
   * @param numberPage numéro de la page actuelle
   * @returns 
   */
  currentPage(numberPage: number) {
    return this.sendCurrentNumberPage.next(numberPage)
  }


}