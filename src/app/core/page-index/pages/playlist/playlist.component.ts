import { Component } from '@angular/core';
import { SpotifyService } from '../../../../services/spotify.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.css'
})
export class PlaylistComponent {

  userPlaylist: any [] = [];
  loading: boolean;
  spotifyEmbedUrl: SafeResourceUrl;
  playlistId: string = '37i9dQZF1DZ06evNZYGncI?si=fac56d1abb8c4f40';
  currentPage: number = 1;

  constructor(private spotifyService: SpotifyService,  private sanitizer: DomSanitizer ){
    this.loading = true;
    this.spotifyService.getUserPlaylists(localStorage.getItem('user_id'))
      .subscribe((data:any) => {
        console.log(data.items);
        this.userPlaylist = data.items;
        this.loading = false;
      });
      this.spotifyEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://open.spotify.com/embed/playlist/${this.playlistId}?utm_source=generator&theme=0`
      );
  }

  openPlaylist(id: string){
    this.spotifyEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://open.spotify.com/embed/playlist/${id}?utm_source=generator&theme=0`
    );
  }
}
