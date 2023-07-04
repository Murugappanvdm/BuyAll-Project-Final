import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { SalesbyproductComponent } from './adminhome/salesbyproduct/salesbyproduct.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { SalesbymonthComponent } from './adminhome/salesbymonth/salesbymonth.component';
const route: Routes = [

  {
    path: "home",
    component: HomeComponent,
  }]


@NgModule({
  declarations: [
    HomeComponent,
    AdminhomeComponent,
    SalesbyproductComponent,
    SalesbymonthComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedModule, CanvasJSAngularChartsModule
  ]
})
export class AdminModule { }