import { Component, ElementRef, ViewChild } from '@angular/core';
import { SpotifyService } from '../../../../services/spotify.service';
import { Modal } from 'bootstrap';


@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrl: './searcher.component.css'
})
export class SearcherComponent {

  artistas: any = [];

  currentPage: number = 1;

  constructor(private spotifyService: SpotifyService){}

  buscar(termino: string){
    console.log(termino);
    this.spotifyService.getArtista(termino)
      .subscribe( (data: any) => {
        console.log(data.artists.items);
        this.artistas = data.artists.items;
      })
  }

}
