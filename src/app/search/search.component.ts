import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private api:ApiService){}
  empcode=""
  sData:any=[]
  readValues=()=>
  {
    let data:any=
    {
      "empcode":this.empcode
    }
    console.log(data)
    this.api.searchEmployee(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length==0)
        {
          alert("invalid employee code")
          
        } else 
        {
          this.sData=response
          
        }
      }
    )
  }
}
