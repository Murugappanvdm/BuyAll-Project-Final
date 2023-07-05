import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from './services/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BuyAll-Project';

  constructor(private log: LogService, private router: Router) {

  }

  ngAfterViewInit() {
    if (!this.log.getStatus()) {
      if (sessionStorage.getItem("logout") == null)
        this.router.navigate(['user/home'])
      else
        this.router.navigate(['login']);
    }
    else {
      if (sessionStorage.getItem("prodshow") == "true") {
        this.router.navigate(['user/home']);
      }
      else if (sessionStorage.getItem("addprod") == "true") {
        this.router.navigate(['addproduct']);
      }
      else {
        if (this.log.usertype == "admin")
          this.router.navigate(['admin/home']);
        else
          this.router.navigate(['user/home']);
      }

    }
  }
}
