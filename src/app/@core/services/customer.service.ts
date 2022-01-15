import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/app.module';
import { Customer } from '../models/customer';
import { Repository } from './repository.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends Repository<Customer>{
  segment: string = "customer";
  constructor(_http: HttpClient, @Inject(API_URL)  _apiUrl: string) { 
    super(_http, _apiUrl);
  }
}
