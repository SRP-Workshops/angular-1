import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBaseModel } from '../models/base-model';

export abstract class Repository<T extends IBaseModel> {
    abstract segment: string;
    constructor(private _http: HttpClient, private _apiUrl: string) { }
      
    getAllItems(): Observable<T[]> {
        return this._http.get<T[]>(this._apiUrl + this.segment);
    }

    getItemById(id: number): Observable<T> {
        return this._http.get<T>(this._apiUrl + this.segment + "/" + id);
    }
    
    postItem(data: T): Observable<T> {
        return this._http.post<T>(this._apiUrl + this.segment, data);
    }
    
    updateItem(data: T): Observable<any> {
        return this._http.patch(this._apiUrl + `${this.segment}/${data.Id}`, data);
    }
    
    deleteItem(data: T): Observable<any> {
        return this._http.delete(this._apiUrl + `${this.segment}/${data.Id}`);
    }
      
}