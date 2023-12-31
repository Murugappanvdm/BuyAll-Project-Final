import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-menu-outline',
  templateUrl: './menu-outline.component.html',
  styleUrls: ['./menu-outline.component.css']
})
export class MenuOutlineComponent implements OnInit {

  @Input() pictures: string[] = [];
  @Input() strings: string[] = [];
  @Input() urls: string[] = [];
  cartshow: boolean = true;
  prodshow: boolean = false;

  cartCount: number = 1;
  username: any = ""
  constructor(private log: LogService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let usertype = sessionStorage.getItem("usertype");
    this.username = sessionStorage.getItem("username");
    if (usertype == "admin") {
      this.prodshow = true;
      this.cartshow = false;
    }
    let cart = localStorage.getItem("cart");
    if (cart)
      this.cartCount = JSON.parse(cart).length;
    else
      this.cartCount = 0;


  }

  navigate(url: string) {
    sessionStorage.setItem("prodshow","") ;
    if (url == "")
      window.location.reload()
    else
      this.router.navigate([url], { relativeTo: this.route });
  }
  logout() {
    sessionStorage.setItem("prodshow","") ;
    this.log.logout();
    window.location.reload();
  }
  productshow()
  {
    sessionStorage.setItem("prodshow","true");
    this.router.navigate(["user/home"]);
  }
  addproduct()
  {
    sessionStorage.setItem("addprod","true");
    this.router.navigate(["addproduct"]);
  }
  dashboardshow()
  {
    sessionStorage.setItem("prodshow","");
    this.router.navigate(["admin/home"]);
  }  
}
