import { Component } from '@angular/core';
import { SpotifyService } from '../../../../services/spotify.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrl: './artists.component.css'
})
export class ArtistsComponent {

  topArtists: any = [];
  loading: boolean;
  spotifyEmbedUrl: SafeResourceUrl;
  id: string = '2nszmSgqreHSdJA3zWPyrW';
  currentPage: number = 1;

  constructor(private spotifyService: SpotifyService, private sanitizer: DomSanitizer){
    this.loading = true;
    this.spotifyService.getTopArtist()
      .subscribe( (data:any) => {
        console.log(data.items);
        this.topArtists = data.items;
        this.loading = false;
      });

      this.spotifyEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://open.spotify.com/embed/artist/${this.id}?utm_source=generator&theme=0`
      );
  }

  openArtist(id: string){
    this.spotifyEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://open.spotify.com/embed/artist/${id}?utm_source=generator&theme=0`
    );
  }
}
