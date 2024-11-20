import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tops',
  templateUrl: './tops.component.html',
  styleUrl: './tops.component.css'
})
export class TopsComponent {

  recentTracks: any[] = [];
  playlistId = '6Z1yg2QV2waCiJagxNsCZx';
  spotifyEmbedUrl: SafeResourceUrl;
  loading: boolean;

  constructor(private spotifyService: SpotifyService, private sanitizer: DomSanitizer){
    this.loading = true;
    this.spotifyEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://open.spotify.com/embed/playlist/${this.playlistId}?utm_source=generator&theme=0`
    );
    this.spotifyService.getRecentTracks()
      .subscribe((data:any) => {
        console.log(data.items);
        this.recentTracks = data.items;
        this.loading = false;
      });
  }

  loadSong(id: string){
    this.spotifyEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0`
    );
  }


}
