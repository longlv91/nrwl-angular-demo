import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { getInstanceByDom, connect } from 'echarts';
import { ThemeControlService } from '../../../../../services/theme-control.service';
import { DataService } from '../../../../../services/data.service';

@Component({
  selector: 'nrwl-workspace-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit, AfterViewInit {

  echartsInstance: any;
  barChartOption: any;
  visitorLineCharOption: any;
  pie1ChartOption: any;
  pie2ChartOption: any;

  constructor(private dataService: DataService, private themeService: ThemeControlService) { }

  ngOnInit() {
    this.dataService.getAnalyticsData().subscribe(data => {
      this.barChartOption = data['barChartOption'];
      this.visitorLineCharOption = data['visitorLineCharOption'];
      this.pie1ChartOption = data['pie1ChartOption'];
      this.pie2ChartOption = data['pie2ChartOption'];
    })
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const chartElement1 = <HTMLDivElement>document.getElementById('chart1');
      const chartElement2 = <HTMLDivElement>document.getElementById('chart2');
      const chart1 = getInstanceByDom(chartElement1);
      const chart2 = getInstanceByDom(chartElement2);
      connect([chart1, chart2]);
    });
  }

  getCurrentTheme() {
    let theme;
    switch(this.themeService.getCurrentTheme()) {
      case 'dark-theme': {
        theme = 'dark';
        break;
      }
      case 'light-theme': {
        theme = 'macarons';
        break;
      }
      case 'gray-theme': {
        theme = 'gray';
        break;
      }
      default: {
        theme = 'macarons';
        break;
      }
    }
    return theme;
  }

  onChartInit(e: any) {
    this.echartsInstance = e;
  }

}
