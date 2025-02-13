import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../models/iproduct';
import { Icategory } from '../models/icategory';
import { environment } from '../../environments/environment.development';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {

  constructor(private _httpClient:HttpClient,private _userAuth:UserAuthService) {

   }

getAllProducts():Observable<Iproduct[]>{
 return this._httpClient.get<Iproduct[]>(`${environment.basUrl}/products`,{
  headers: new HttpHeaders({
    'authorization': this._userAuth.getToken()
  })
 })
};

getProductById(id:number):Observable<Iproduct>{

  return this._httpClient.get<Iproduct>(`${environment.basUrl}/products/${id}`)

};

getProductByCatId(catId:number):Observable<Iproduct[]>{
  return this._httpClient.get<Iproduct[]>(`${environment.basUrl}/products/?catId=${catId}`)
}

addProduct(newPrd:Iproduct):Observable<Iproduct>{
 return this._httpClient.post<Iproduct>(`${environment.basUrl}/products`,JSON.stringify(newPrd))
}

deleteProductById(){}

updateProductById(){}

}
