import { Component } from '@angular/core';
import { SpotifyService } from '../../../../services/spotify.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.css'
})
export class MyAccountComponent {

  myProfile: any = [];

  constructor(private spotifyService:SpotifyService){
    this.spotifyService.getMyAccount()
      .subscribe((data:any) => {
        console.log(data);
        this.myProfile = data;
        localStorage.setItem('user_id', data.id);
      });
  }
}
