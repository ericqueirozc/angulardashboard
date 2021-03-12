import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  
  Highcharts = Highcharts;
  chartOptions!: {}  

  constructor() { }

  ngOnInit(): void {
    
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Formas de falar Whatsapp'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    exporting:{
      enabled: false
    },
    credits:{
      enabled:false
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Zap Zap',
            y: 61.41,
            sliced: true,
            selected: true
        }, {
            name: 'Zip Zope',
            y: 11.84
        }, {
            name: 'Xap',
            y: 10.85
        }, {
            name: 'Baxara Lazap',
            y: 4.67
        }, {
            name: 'Outros',
            y: 11
        }, ]
    }]
  };
  
  setTimeout(()=>{
    window.dispatchEvent(
      new Event('resize')
    );
  }, 300)
  
  }

}
