import { Component, OnInit } from '@angular/core';
import { dataPointsPrd } from 'src/app/models/types';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-salesbyproduct',
  templateUrl: './salesbyproduct.component.html',
  styleUrls: ['./salesbyproduct.component.css']
})
export class SalesbyproductComponent implements OnInit {
  chartOptions: any;
  dataPoints: dataPointsPrd[] = [
    {
      y: 29.5,
      name: "Toys"
    },
    {
      y: 25.2,
      name: "CarWasher"
    },
    {
      y: 16.4,
      name: "Watches"
    }
  ];
  constructor(private cs: ProductService) { }

  ngOnInit(): void {
    this.cs.getSalesbyproduct().subscribe(
      {
        next: (data: dataPointsPrd[]) => this.dataPoints = data,
        error: (error: any) => this.dataPoints = []
      }
    )
    this.chartOptions = {
      animationEnabled: true,
      title: {
        text: "Sales by Product"
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
