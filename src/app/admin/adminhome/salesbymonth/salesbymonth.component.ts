import { Component, OnInit } from '@angular/core';
import { dataPointsPrd } from 'src/app/models/types';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-salesbymonth',
  templateUrl: './salesbymonth.component.html',
  styleUrls: ['./salesbymonth.component.css']
})
export class SalesbymonthComponent implements OnInit {
  chartOptions: any;
  dataPoints: dataPointsPrd[] = [
    {
      y: 10,
      name: "Mar"
    },
    {
      y: 18.5,
      name: "Apr"
    },
    {
      y: 28.2,
      name: "May"
    },
    {
      y: 14.4,
      name: "Jun"
    }
  ];
  constructor(private cs: ProductService) { }

  ngOnInit(): void {
    this.cs.getSalesbymonth().subscribe(
      {
        next: (data: dataPointsPrd[]) => this.dataPoints = data,
        error: (error: any) => this.dataPoints = []
      })
    this.chartOptions = {
      animationEnabled: true,
      title: {
        text: "Sales by Month"
      },
      data: [{
        type: "pie",
        startAngle: -90,
        indexLabel: "{name}: {y}",
        yValueFormatString: "#,###.##'%'",
        dataPoints: this.dataPoints
      }]
    }
  }

}

