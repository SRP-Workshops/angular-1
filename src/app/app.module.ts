import { InjectionToken, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogComponent } from './dashboard/confirm-dialog/confirm-dialog.component';
import { CompanyComponent } from './dashboard/pages/company/company.component';
import { CustomerComponent } from './dashboard/pages/customer/customer.component';
import { CompanyDialogComponent } from './dashboard/pages/company/company-dialog/company-dialog.component';
import { CustomerDialogComponent } from './dashboard/pages/customer/customer-dialog/customer-dialog.component';
import { MaterialModule } from './material.module';

export const API_URL = new InjectionToken<string>("api url")

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CompanyComponent,
    CustomerComponent,
    CompanyDialogComponent,
    ConfirmDialogComponent,
    CustomerDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    {provide: API_URL, useValue: environment.apiUrl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
