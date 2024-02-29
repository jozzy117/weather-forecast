import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  location: string = 'LWX';
  lineChartData: any

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) { }
 
  ngOnInit() {
    this.location = this.route.snapshot.params['location'];
    this.fetchForecast();
  }

  fetchForecast() {
    this.weatherService.getForeCast(this.location).subscribe((data) => {
      const values = data.properties.periods.map((p: any) => p.temperature);
      const labels = data.properties.periods.map((p: any) => p.name);
      const units = data.properties.periods[0].temperatureUnit;
      this.lineChartData = {
        labels: labels,
        datasets: [
          {
            data: values,
            label: `Temperature (${units})`,
            fill: false,
            tension: 0.5,
            borderColor: '#1528FF',
            
          }
        ]
      }
    });
  }
 
}
