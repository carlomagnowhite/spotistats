import { Component } from '@angular/core';
import { SpotifyService } from '../../../../services/spotify.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.css'
})
export class SongsComponent {

  topSongs: any = [];
  loading: boolean;
  spotifyEmbedUrl: SafeResourceUrl;
  id: string = '6IPJ7LeWIOhxPW8Sq3nIGc';
  currentPage: number = 1;

  constructor(private spotifyService: SpotifyService, private sanitizer: DomSanitizer){
    this.loading = true;
    this.spotifyService.getTopSongs()
      .subscribe( (data:any) => {
        console.log(data.items);
        this.topSongs = data.items;
        this.loading = false;
      });

      this.spotifyEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://open.spotify.com/embed/track/${this.id}?utm_source=generator&theme=0`
      );


  }

  openSongPlaylist(id: string){
    this.spotifyEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0`
    );
  }
}
