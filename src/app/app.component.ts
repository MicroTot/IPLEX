import { Component } from '@angular/core';
import { ServicesService } from '../app/services.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  name: any;
  phone: any;
  department: any;
  salary: any;
  email: any;


  constructor(private api:ServicesService){}

  ngOnInit(){
    this.getData()
  }

  getData(){
    return this.api.getPost().subscribe(data => {
      console.log("API DATA:", data);
      this.name = data;
    })
  }

  remove(id: any) {
    this.api.deleteEmployee(this.name[id]);
    this.name.splice(id, 1);
  }
} 
