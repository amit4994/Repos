import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  eid:number
  employee:Employee

  constructor(private route:ActivatedRoute,private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.employee= new Employee();
    this.eid=this.route.snapshot.params['id'];
    
    this.employeeService.getEmployeeById(this.eid).subscribe(data=>{
      console.log(data)
      this.employee=data;},
      error=>console.error(error));
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.eid,this.employee).subscribe(data=>{
      console.log(data)
      this.employee=new Employee();
      this.gotoList()
    },
     error=>console.error(error));
  }

  onSubmit(){
    this.updateEmployee();
  }

  gotoList(){
    this.router.navigate(['/employee'])
  }
}
