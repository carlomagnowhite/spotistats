import { Component } from '@angular/core';
import { SpotifyService } from '../../../../services/spotify.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {

  savedAlbums: any = [];
  loading: boolean;
  spotifyEmbedUrl: SafeResourceUrl;
  id: string = '2xkZV2Hl1Omi8rk2D7t5lN';
  currentPage: number = 1;

  constructor(private spotifyService: SpotifyService, private sanitizer: DomSanitizer){
    this.loading = true;
    this.spotifyService.getSavedAlbums()
      .subscribe( (data:any) => {
        console.log(data.items);
        this.savedAlbums = data.items;
        this.loading = false;
      });

      this.spotifyEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://open.spotify.com/embed/album/${this.id}?utm_source=generator&theme=0`
      );
  }

  openAlbum(id: string){
    this.spotifyEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://open.spotify.com/embed/album/${id}?utm_source=generator&theme=0`
    );
  }
}
