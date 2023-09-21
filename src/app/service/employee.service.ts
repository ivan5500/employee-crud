import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private urlApi = 'http://localhost:8080/employee';
  constructor(private http: HttpClient) { }

  // restful api
  getEmployees() {
    return this.http.get<Employee[]>(this.urlApi);
  }

  // post method
  addEmployee(employee: Employee) {
    console.log(employee);
    
    return this.http.post(this.urlApi, employee);
  }

  // delete method
  deleteEmployee(id: number) {
    return this.http.delete(`${this.urlApi}/${id}`);
  }

  // put method
  updateEmployee(employee: Employee) {
    return this.http.put(`${this.urlApi}`, employee);
  }




}
