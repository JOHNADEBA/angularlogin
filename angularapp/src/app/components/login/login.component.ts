import { Component, OnInit } from '@angular/core';
import {DbapiService} from '../../Services/dbapi.service'


import { Router, ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
  allUsers: any = []
  error = ''

  constructor(private route: ActivatedRoute, private router: Router, private users:DbapiService, ) { 
    
    users.getLoginUsers().subscribe( data =>{
    this.allUsers = data
  })
  
  }

  ngOnInit(): void {
  }
  getLogIn(user:any){
this.allUsers.filter((item:any) =>{
  if( user.email  === item.email && user.password  === item.password){
    
this.router.navigate(['/home'], { relativeTo: this.route });
  }
  else this.error = 'Either email or address is wrong'
})

  }
}
