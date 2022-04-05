import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
const url = 'https://jsonplaceholder.typicode.com/users'
const loginUrl = 'http://localhost:3000/'



@Injectable({
  providedIn: 'root'
})
export class DbapiService {

  constructor(private http:HttpClient) {}
  getUsers(){
   return  this.http.get(url)
  }

  getLoginUsers(){
  return this.http.get(loginUrl)
  }

  addUser(user:any){    
  return this.http.post(`${loginUrl}adduser`, user)
  }
 
}
