import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/app.module';
import { Company } from '../models/company';
import { Repository } from './repository.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends Repository<Company>{
  segment: string = "company";
  constructor(_http: HttpClient, @Inject(API_URL)  _apiUrl: string) { 
    super(_http, _apiUrl);
  }

}
