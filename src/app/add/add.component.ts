import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  name: any;
  phone: any;
  department: any;
  salary: any;
  email: any;

  constructor(private api: ServicesService,) { }

  ngOnInit() {
  }

  onNameChanged(event:any){
    this.name = event.target.value;
  }
  onPhoneChanged(event:any){
    this.phone = event.target.value;
  }
  onDepartmentChanged(event:any){
    this.department = event.target.value;
  }
  onSalaryChanged(event:any){
    this.salary = event.target.value;
  }
  onEmailChanged(event:any){
    this.email = event.target.value;
  }
  
  postData(){
    const uploadData = new FormData();
    uploadData.append("name", this.name);
    uploadData.append("phone", this.phone);
    uploadData.append("department", this.department);
    uploadData.append("salary", this.salary);
    uploadData.append("email", this.email);
    this.api.CreateEmployee(uploadData).subscribe(response => {
      console.log(response)
      alert("Employee details uploaded successfully")//present toast
    });
  }

}
