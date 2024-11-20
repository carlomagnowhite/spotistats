import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpotifyService } from './services/spotify.service';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CoreModule,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    AuthService,
    SpotifyService
  ]
})

export class AppComponent { }
