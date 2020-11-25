import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseurl:string='http://localhost:8080/employee';

  constructor(private http: HttpClient) { }

  getAllEmployeeList():Observable<any>{
    return this.http.get<any[]>(this.baseurl); 
  }

  addEmployee(employee:Object):Observable<Object>{
    return this.http.post(`${this.baseurl}`,employee);
  }

  deleteEmployee(id:number):Observable<any>{
    return this.http.delete(`${this.baseurl}/${id}`,{responseType:'text'});
  }

  updateEmployee(id:number,value:any):Observable<Object>{
    return this.http.put(`${this.baseurl}/${id}`,value);
  }

  getEmployeeById(id:number):Observable<any>{
    return this.http.get(`${this.baseurl}/${id}`);
  }
}
