import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart-component',
  templateUrl: './bar-chart-component.component.html',
  styleUrl: './bar-chart-component.component.css'
})
export class BarChartComponentComponent {

  public chart: any;
  topArtistsData: any[] = [];

  constructor(private httpClient: HttpClient) {}

  ngAfterViewInit(): void {
    this.getTopArtists();
  }

  getTopArtists() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    });

    this.httpClient.get('https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=8', { headers: headers })
      .subscribe((data: any) => {
        this.topArtistsData = data.items;
        this.createChart();
      });
  }

  createChart() {
    const labels = this.topArtistsData.map((artist: any) => artist.name);
    const listens = this.topArtistsData.map((artist: any) => artist.popularity); // Esto debe venir de la API de Spotify

    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: "Popularity",
          data: listens,
          backgroundColor: 'green'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        aspectRatio: 2.5
      }
    });
  }
}
