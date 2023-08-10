import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Album, List, SortAlbumCallback } from './album';
// import { ALBUMS, ALBUM_LISTS } from './mock-albumsss';
// import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  shuffle(album: Album) {
    throw new Error('Method not implemented.');
  }
  // shuffle(album: Album) {
  // }
  private _albumsUrl: string = environment.albumUrl; // _ convention private & protected
  private _albumListUrl: string= environment.albumListUrl

  subjectAlbum = new Subject<Album>;
  // Observable qui notifie aux abonné la page actuelle
  sendCurrentNumberPage = new Subject<number>();

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this._albumsUrl).pipe(
      //ordonner les albums par ordre de durée décroissante
      map((albums: Album []) => {
        return albums.sort(
          (a: Album, b: Album ) => b.duration - a.duration)
      })
    )
  }

  /**
   *
   * @param id identifiant de l'album particulier
   * @returns  Retourne l'album
   */
  getAlbum(id: string): Observable<Album> | undefined {
    return this.http.get<Album>(this._albumsUrl + '/' + id).pipe(
      map((album: Album) =>album)
    )
  }

  /**
   * Fonction de recherche des sons d'un albums
   * @param id  ode,tofoa,t de l'album à rechercher
   * @returns La référence sera retourné si elle existe ; undefined si l'id n'existe pas dans la liste.
   */
  getAlbumList(id: string): Observable<List> {
    return this.http.get<List>(this._albumListUrl + '/' + id)
  }

  /**
   * Fonction qui retourne le nombre d'albums
   * @returns Le nombre d'albums
   */
  count(): Observable<number> {
    return this.http.get<Album[]>(this._albumsUrl).pipe(
      map(
        (albums: Album[]) => albums.length
      )
    );
  }

  // paginate(start: number, end: number): Album[]{
  //   return this._albums.slice(start, end).sort((a: Album, b: Album) => b.duration -a.duration)
  // }

  /**
   * les methodes order() et limit() jouent le rôle de la méthode paginate
   * @returns
   */
  // order(callback: SortAlbumCallback): AlbumService {
  //   this._albums.sort((a: Album, b: Album) => b.duration - a.duration);
  //   return this;
  // }

  // limit(start: number, end: number): AlbumService {
  //   this._albums = this._albums.slice(start, end);
  //   return this //
  // }


  paginate(start: number, end: number): Observable<Album[]>{
    return this.http.get<Album[]>(this._albumsUrl).pipe(
      map(
        (albums) => albums.sort(
          (a,b) => b.duration - a.duration
          ).slice(start, end)
      )
    );
  }


  search(word: string): Observable<Album[]> {
    return this.http.get<Album[]>(this._albumsUrl).pipe(
      map ((albums: Album[]) => {
        // parcourir le tableau d'albums
        return albums.filter(album => {
          // retourner ceux contenant le string de la variable "word"
          return album.title
          .toLowerCase()
          .includes(word.trim()
          .toLowerCase());
        })
      })
    )
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

/**
 * Méthode qui permet de changer le status d'un album à "on"
 * @param album : l'album dont le status doit passer à "on"
 */
// type de requête
// -get => récupérer une resource
// -post => envoyer une resource 
// -put => mettre à jour une resource
swicthOn(album: Album): void{
  album.status = "on";
  // le code ci-dessous s'exécute car on y souscrit
  this.http.put<void>(this._albumsUrl + '/' + album.id, album)
            .subscribe({
              next: (e) => console.log(e), 
              error: (err) => console.warn(err),
              complete: () => this.subjectAlbum.next(album)
              
            })
}

  /**
   * Méthode qui permet de changer le status d'un album à "off"
   * @param album : l'album dont le status doit passer à "off"
   */
  switchOff(album: Album): void{
    album.status = "off";
    /**
     * renvoi un observalbe, et ne s'exécute donc qu'à la souscription. Du coup, il faut souscrire, pour l'exécuter
     */
    this.http.put<void>(`${this._albumsUrl} / ${album.id}`, album)
              .subscribe(() => {});
  }
}