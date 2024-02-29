import { Component, Input, ViewChild } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  @ViewChild(BaseChartDirective, { static: true }) chart?: BaseChartDirective;
  @Input() lineChartData: any;
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };

}
