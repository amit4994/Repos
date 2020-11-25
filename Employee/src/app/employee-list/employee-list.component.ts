import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee:Observable<Employee[]>;

  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit():void{
    this.employeeService.getAllEmployeeList().subscribe(data=>this.employee=data);
  }

  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(data=>{
    console.log(data);
    this.ngOnInit();
    },
    error=>console.error(error));
  }

  updateEmployee(id:number){
    this.router.navigate(['update',id]);
  }

}
