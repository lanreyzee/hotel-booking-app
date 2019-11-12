import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-potential-customer',
  template: ` <a href="" class="btn btn-sm btn-primary">Approve Pending</a>
              <table class="table table-striped table-dark">
                  <caption>Awaiting approval {{ date | date:shortdate }}</caption>
                  <tr>
                    <th scope="col">S/No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Customer ID</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Manage</th>
                  </tr>
                  <tr *ngFor="let customer of potentialCustomers">
                    <td>{{ customer.id}}</td>
                    <td>{{ customer.name}}</td>
                    <td>{{ customer.customerID}}</td>
                    <td>{{ customer.email}}</td>
                    <td>{{ customer.phone}}</td>
                    <td><a href="" class="btn btn-sm btn-secondary">Approve</a><a href="" class="btn btn-sm btn-secondary">Reject</a></td>
                  </tr>
              </table>
            `,
  styles: [`
  div{
        margin-top: 2%;
    }
    table, tr, th, td{
        border:1px solid lightgray;
    }
    tr,th,td{
        padding:10px;
    }

    caption{
        color:#fff;
        background-color: black;
        text-align: center;
    }
    li a{
        text-decoration: none;
    }
  `]
})
export class PotentialCustomersComponent implements OnInit {
  date = new Date()
  potentialCustomers = [
    {id:1, name:"Godfrey Onwuka", email:"chidionwuka@gmail.com", phone:"07062345612", customerID:"00001"},
    {id:2, name:"John Ruth", email:"johnruthy@gmail.com",phone:"08067451343", customerID:"00002"},
    {id:3, name:"Margaret Olayere", email:"olayeremaggi@gmail.com", phone:"08032143456", customerID:"00003"},
    {id:4, name:"Torhee Afa Linda", email:"torheeafa@gmail.com", phone:"07043123452", customerID:"00004"},
    {id:5, name:"Tommy Dreamer", email:"tommydreamer@gmail.com", phone:"07097544242", customerID:"00005"},
    {id:6, name:"Oluwa Gbogo", email:"gbogobabs@gmail.com", phone:"07036789012", customerID:"00006"},
  ];

  constructor(){ }

  ngOnInit(){
    
  }
}
