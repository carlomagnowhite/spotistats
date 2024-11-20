import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {

  constructor(private route: ActivatedRoute) {}

  obtenerSegmentoRutaActual(): string {
    // Obtener la URL actual
    const currentUrl = this.route.snapshot.url;
    // Encontrar la posición de "main" en la URL
    const mainIndex = currentUrl.findIndex(segment => segment.path === 'main');
    // Si no se encuentra "main", devolver la cadena vacía
    if (mainIndex === -1 || mainIndex === currentUrl.length - 1) {
      return '';
    }
    // Obtener el último segmento después de "main"
    const ultimoSegmento = currentUrl[mainIndex + 1].path;
    // Convertir a mayúsculas
    const segmentoEnMayusculas = ultimoSegmento.toUpperCase();
    return segmentoEnMayusculas;
  }


}
