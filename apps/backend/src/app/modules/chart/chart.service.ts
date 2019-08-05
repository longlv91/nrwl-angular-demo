import { Injectable } from '@angular/core';
import { chartData } from '../../../assets/chart';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  private readonly chartData: any;

  constructor() {
    this.chartData = chartData
   }

  async getAnalyticsData(): Promise<any> {
    return this.chartData;
  }
}
