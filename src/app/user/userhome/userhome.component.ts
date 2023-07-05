import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/types';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  products:product[]=[];
  sproducts:product[]=[];
  vproducts:product[]=[];
  fproducts:product[]=[];

  constructor(private ps:ProductService) { }

  ngOnInit(): void {
    this.ps.getProducts().subscribe( {
     next: (data:product[])=>this.products = data,
     error: ()=> this.products = []
    }
    )
    this.ps.getProducts2("off").subscribe(
      {
        next: (data:product[])=>this.fproducts = data,
        error: ()=> this.fproducts = []
       }
   )
   this.ps.getProducts2("today").subscribe(
    {
      next: (data:product[])=>this.vproducts = data,
      error: ()=> this.vproducts = []
     }
   )
   this.ps.getProducts2("new").subscribe(
    {
      next: (data:product[])=>this.sproducts = data,
      error: ()=> this.sproducts = []
     }
   )
  }

}
