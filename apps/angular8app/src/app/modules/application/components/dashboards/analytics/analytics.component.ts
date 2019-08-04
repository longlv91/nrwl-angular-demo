import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { getInstanceByDom, connect } from 'echarts';
import { ThemeControlService } from '../../../../../services/theme-control.service';

const CHART_OPTIONS = {
  title: {
    text: 'Nightingale\'s Rose Diagram',
    subtext: 'Mocking Data',
    textStyle: {
      "fontSize": 14,
      "fontWeight": "normal"
    },
    x: 'left'
  },
  color: ['#3398DB'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [{
    type: 'value'
  }],
  series: [{
    name: 'Counters',
    type: 'bar',
    barWidth: '60%',
    data: [10, 52, 200, 334, 390, 330, 220]
  }]
};
@Component({
  selector: 'nrwl-workspace-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit, AfterViewInit {

  options = CHART_OPTIONS;
  echartsInstance: any;

  optionsChart0 = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Visitor']
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        magicType: {
          show: true,
          type: ['line', 'bar', 'stack', 'tiled'],
          title: {
            line: 'Line chart',
            bar: 'Bar chart',
            stack: 'Stack',
            tiled: 'Tiled'
          }
        },
        restore: { show: true, title: 'Refresh' },
        saveAsImage: { show: true, title: 'Save As Image' }
      }
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Visitor',
        type: 'line',
        stack: 'Visitor',
        itemStyle: { normal: { areaStyle: { type: 'default' } } },
        data: [120, 132, 101, 134, 90, 230, 210, 190, 175, 195, 220, 200]
      }
    ]
  };


  pieOptions = {
    title: {
      text: 'Nightingale\'s Rose Diagram',
      subtext: 'Mocking Data',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },

    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1]
      }
    },
    series: [
      {
        name: 'Counters',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [
          { value: 335, name: 'C-1' },
          { value: 310, name: 'C-2' },
          { value: 274, name: 'C-3' },
          { value: 235, name: 'C-4' },
          { value: 400, name: 'C-5' }
        ].sort(function (a, b) { return a.value - b.value; }),
        roseType: 'radius',
        label: {
          normal: {
            textStyle: {
              color: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            smooth: 0.2,
            length: 10,
            length2: 20
          }
        },
        itemStyle: {
          normal: {
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },

        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function (idx) {
          return Math.random() * 200;
        }
      }
    ]
  };

  constructor(private themeService: ThemeControlService) { }

  ngOnInit() {
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
