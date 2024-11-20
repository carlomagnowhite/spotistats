import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface ICredentials{
  clientID: string;
  clientSecret: string;
  accesToken: string;
}

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  headers = new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('access_token')
  });

  constructor(private HttpClient: HttpClient){}

  getNewReleases(){
    return this.HttpClient.get('https://api.spotify.com/v1/browse/new-releases', {headers: this.headers});
  }

  getFollowedArtists(){
    return this.HttpClient.get('https://api.spotify.com/v1/me/following?type=artist&limit=27', {headers: this.headers});
  }

  getTopArtist(){
    return this.HttpClient.get('https://api.spotify.com/v1/me/top/artists', {headers: this.headers});
  }

  getTopSongs(){
    return this.HttpClient.get('https://api.spotify.com/v1/me/top/tracks', {headers: this.headers});
  }

  getMyAccount(){
    return this.HttpClient.get('https://api.spotify.com/v1/me', {headers: this.headers});
  }

  getArtista(termino: string){
    return this.HttpClient.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=27`, {headers: this.headers});
  }

  getSavedAlbums(){
    return this.HttpClient.get('https://api.spotify.com/v1/me/albums', {headers: this.headers});
  }

  getUserPlaylists(id: any | null){
    return this.HttpClient.get(`https://api.spotify.com/v1/users/${id}/playlists?limit=50`, {headers: this.headers});
  }

  getRecentTracks(){
    return this.HttpClient.get('https://api.spotify.com/v1/me/player/recently-played?limit=15',{headers: this.headers});
  }
}
