import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  date = new Date()
  customers = [
    {id:1, name:"Lanre Bob", email:"lanrebob1@gmail.com", phone:"07031640034", accountID:"20121234"},
    {id:2, name:"Iswat Tiamiyu", email:"iswatolad@gmail.com",phone:"08056581006", accountID:"20121235"},
    {id:3, name:"Kisore Mullapudi", email:"lanrebob1@gmail.com", phone:"08035678921", accountID:"20121236"},
    {id:4, name:"Imran Khan", email:"imrankhan@gmail.com", phone:"07034567531", accountID:"20121237"}
  ];

  constructor(){ }

  ngOnInit(){
    
  }
}
