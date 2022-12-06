import { Component } from '@angular/core';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent {

  empcode=""
  designation=""
  salary=""
  companyName=""
  mobno=""
  username=""
  password=""

  readValues=()=>{
    let data:any=
    {
      "empcode":this.empcode,
      "designation":this.designation,
      "salary":this.salary,
      "companyName":this.companyName,
      "mobno":this.mobno,
      "username":this.username,
      "password":this.password
    }
    console.log(data)
  }




}
