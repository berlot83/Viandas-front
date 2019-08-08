import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import { Product } from '../model/product';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import { AppSettings} from '../app.settings'

const webSite = AppSettings.APIURL;

@Injectable({
    providedIn: 'root'
})

export class AppServiceManager{

    constructor(private httpClient : HttpClient){}
    
    public getAllActive() : Observable<Product[]>{
        return this.httpClient.get<Product[]>(webSite + '/productToClient'); 
    }

    public generateOrder(products : Product[]){
       
    }
    
    private getHeaders(method: string): HttpHeaders {
        let headers = new HttpHeaders()
            .append('Access-Control-Allow-Origin', '*')
            .append('Access-Control-Allow-Methods', method);
        return headers;
    }
}