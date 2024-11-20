import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';
import { SpotifyService } from '../../../../services/spotify.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent{

  nuevosLanzamientos: any = [];
  loading: boolean;
  playlistId = '6vWHaufKuOl7j626vB1Ziq?si=5601cc4d6a5b4747';
  spotifyEmbedUrl: SafeResourceUrl;

  constructor(private spotifyService: SpotifyService, private sanitizer: DomSanitizer){

    this.loading = true;

    this.spotifyService.getNewReleases()
      .subscribe( (data:any) => {
        console.log(data.albums.items);
        this.nuevosLanzamientos = data.albums.items;
        this.loading=false;
      });
      console.log(localStorage.getItem('access_token'));

      this.spotifyEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://open.spotify.com/embed/playlist/${this.playlistId}?utm_source=generator&theme=0`
      );
  }

  openPlaylist(id: string){
    this.spotifyEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://open.spotify.com/embed/album/${id}?utm_source=generator&theme=0`
    );
  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }


}
