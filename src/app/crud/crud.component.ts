import { Component } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  public employees: Employee[] = [];
  public employeeAdd: Employee = { name: '', number: 0, age: 0};

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.loadEmployees();
  }

  editEmployee(employee: any) {
    this.employeeService.updateEmployee(employee).subscribe((data: any) => {
      console.log(data);
    });
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe((data: any) => {
      console.log(data);
      this.loadEmployees();
    });
  }

  addEmployee() {
    this.employeeService.addEmployee(this.employeeAdd).subscribe((data: any) => {
      console.log(data);
      this.employeeAdd = { name: '', number: 0, age: 0};
      this.loadEmployees();
    });
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe((data: any) => {
      console.log("Obteniendo empleados");
      console.log(data);
      this.employees = data;
    });
  }


}
