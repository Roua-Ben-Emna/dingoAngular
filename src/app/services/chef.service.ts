import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChefService {
  // define url trj changer pas de 4200
  chefURL:string="http://localhost:8080";
// define httpClient
  constructor(private httpClient: HttpClient) {
   }

   
   getAllChef(){
     // Request
     return this.httpClient.get(this.chefURL);
   }

   getChefById(id:number){
    return this.httpClient.get(`${this.chefURL}/${id}`);
   }

   addChef(chef:any){
    return this.httpClient.post(this.chefURL,chef);

   }

   deleteChef(id:number){
     return this.httpClient.delete(`${this.chefURL}/${id}`);

   }
   editChef(chef:any){
    return this.httpClient.put(`${this.chefURL}/${chef.id}`,chef);
   }
   
}
