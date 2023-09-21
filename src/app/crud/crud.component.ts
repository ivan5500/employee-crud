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
      this.loadEmployees
    });
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe((data: any) => {
      this.employees = data;
    });
  }

}
