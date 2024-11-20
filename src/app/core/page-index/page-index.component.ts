import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-page-index',
  templateUrl: './page-index.component.html',
  styleUrl: './page-index.component.css'
})
export class PageIndexComponent {



  constructor(private authService: AuthService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.authService.handleCallback()
    .then(() => {
      console.log('Autorización exitosa. Redirigiendo a /main...');
      // Redirigir al usuario a la página principal u otra página después de la autorización
    })
    .catch(error => {
      console.error('Error al manejar el callback de autorización:', error);
      // Manejar el error según tus necesidades, por ejemplo, mostrar un mensaje de error al usuario
    });
  }



}
