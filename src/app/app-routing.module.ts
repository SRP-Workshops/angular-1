import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanyDialogComponent } from './dashboard/pages/company/company-dialog/company-dialog.component';
import { CompanyComponent } from './dashboard/pages/company/company.component';
import { CustomerComponent } from './dashboard/pages/customer/customer.component';

const routes: Routes = [
  {path: "", component: DashboardComponent, children: [
    {path: "", redirectTo: "companies", pathMatch: "full"},
    {path: "companies", component: CompanyComponent},
    {path: "companies/:id", component: CompanyDialogComponent},
    {path: "customers", component: CustomerComponent}
  ]},
  {path: "**", component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
