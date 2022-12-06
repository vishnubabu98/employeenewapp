import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent {

  constructor(private api:ApiService){
    this.api.fetchCourses().subscribe(
      (response)=>{
        this.data=response
      }
    )
  }
  data:any=[]

}