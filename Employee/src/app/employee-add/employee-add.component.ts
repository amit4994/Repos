import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  employee:Employee=new Employee();

  constructor(private router:Router , private employeeService:EmployeeService) { }

  ngOnInit(): void {
  }

  save(){
    this.employeeService.addEmployee(this.employee).subscribe(data=>{
      console.log(data);
      this.employee=new Employee();
      this.gotoList();
    },
    error=>console.log(error));
  }

  onSubmit(){
    this.save()
  }

  gotoList(){
    this.router.navigate(['/employee'])
  }
}
