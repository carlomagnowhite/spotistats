import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrl: './user-stats.component.css'
})
export class UserStatsComponent {

  topArtistsData: any[] =[];
  chart: any;
  @ViewChild('canvas') canvasRef!: ElementRef;

  headers = new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('access_token')
  });

  constructor(private httpClient: HttpClient){
    //this.getTopArtists();
  }

  getTopArtists() {


    // Realiza la solicitud a la API de Spotify para obtener las canciones escuchadas

    this.httpClient.get('https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=5', { headers: this.headers })
      .subscribe((data: any) => {
        this.topArtistsData = data.items;
        this.renderChart();
      });
  }

  renderChart() {
    const labels = this.topArtistsData.map((artist: any) => artist.name);
    const plays = this.topArtistsData.map((artist: any) => artist.popularity);

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(this.canvasRef.nativeElement, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Popularity',
          data: plays,
          backgroundColor: 'rgb(75, 192, 192)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }


}
