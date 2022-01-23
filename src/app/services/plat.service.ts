import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatService {
  // define url trj changer pas de 4200
  platURL:string="http://localhost:8080/api/plats";
// define httpClient
  constructor(private httpClient: HttpClient) {
   }

   
   getAllPlat(){
     // Request
     return this.httpClient.get(this.platURL);
   }

   getPlatById(id:number){
    return this.httpClient.get(`${this.platURL}/${id}`);
   }

   addPlat(plat:any){
    return this.httpClient.post(this.platURL,plat);

   }

   deletePlat(id:number){
     return this.httpClient.delete(`${this.platURL}/${id}`);

   }
   
   editPlat(plat:any){
    return this.httpClient.put(`${this.platURL}/${plat.id}`,plat);
   }
   
}