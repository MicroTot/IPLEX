import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const endpoint='http://127.0.0.1:8000/';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  public getPost(){
    return this.http.get(endpoint);
  }

  public CreateEmployee(uploadData){
    return this.http.post<any>(endpoint, uploadData);
  }

  public deleteEmployee(deleteData){
    return this.http.get(endpoint, deleteData);
  }

  public updateEmployee(updateData){
    return this.http.get(endpoint, updateData);
  }

}
