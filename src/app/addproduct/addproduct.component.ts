import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {




  ftoggle: boolean = false
  eform: any
  constructor(private fb: FormBuilder, private hs: ProductService) {
    this.eform = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        description: ['', [Validators.required, Validators.minLength(20)]],
        category: ['', [Validators.required, Validators.minLength(3)]],
        type: ['', [Validators.required, Validators.minLength(3)]],
        price: ['', [Validators.required, Validators.minLength(1)]],
        qty: ['', [Validators.required, Validators.minLength(1)]],
        image: [null, []]
      }
    )

  }

  ngOnInit(): void {
  }

  postProductDetails(): void {
    let name = this.eform.get('name').value
    let description = this.eform.get('description').value
    let category = this.eform.get('category').value
    let type = this.eform.get('type').value
    let price = this.eform.get('price').value
    let qty = this.eform.get('qty').value
    let obj: any;
    if (this.ftoggle) {
      var formData: any = new FormData();
      formData.append("name", name);
      formData.append("category", category);
      formData.append("type", type);
      formData.append("price", price);
      formData.append("image", this.eform.get('image').value);
      formData.append("description", description);
      formData.append("qty", qty);

      obj = formData
    }
    else {
      obj = { name: name, category: category, type: type, price: price, description: description, qty: qty }
    }

    this.hs.AddProductDetails(obj, this.ftoggle).subscribe(
      {
        next: () => { alert("file uploaded"); location.reload() },
        error: (x) => { console.log(x); alert("Something went wrong") }
      }
    )

  }

  uploadFile1(event: any) {

    const file = (event.target as HTMLInputElement).files[0];
    this.eform.patchValue({
      supportfile: file
    });
    this.eform.get('image').updateValueAndValidity()

  }


}
