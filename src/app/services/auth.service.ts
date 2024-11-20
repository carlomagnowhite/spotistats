import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import SpotifyWebApi from 'spotify-web-api-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private clientId = 'dc682c54d7af4eea9aecad75113f94e3';
  private redirectUri = 'http://localhost:4200/main';
  private responseType = 'token';
  private scopes = [
    "ugc-image-upload",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "app-remote-control",
    "playlist-modify-public",
    "user-modify-playback-state",
    "playlist-modify-private",
    "user-follow-modify",
    "user-read-currently-playing",
    "user-follow-read",
    "user-library-modify",
    "user-library-read",
    "user-read-playback-position",
    "playlist-read-private",
    "user-read-email",
    "user-read-private",
    "streaming",
] // Agrega los permisos que necesites
  private spotifyApi: SpotifyWebApi.SpotifyWebApiJs;

  constructor(private router: Router){
    this.spotifyApi = new SpotifyWebApi();
  }

  login(): void {
    const authorizeUrl = `https://accounts.spotify.com/authorize?client_id=${this.clientId}&response_type=${this.responseType}&redirect_uri=${encodeURIComponent(this.redirectUri)}&scope=${encodeURIComponent(this.scopes.join(' '))}`;
    window.location.href = authorizeUrl;
  }

  handleCallback(): Promise<void> {
    return new Promise((resolve, reject) => {
      const accessTokenMatch = window.location.hash.match(/access_token=([^&]*)/);
      if (accessTokenMatch) {
        // Redireccionar a la ruta /main
        const accessToken = accessTokenMatch[1];
        localStorage.setItem('access_token', accessToken);
        this.router.navigate(['/main']);
        resolve();
      } else {
        reject('Token de acceso no encontrado en la URL.');
      }
    });
  }

}
