import { Component, OnInit } from '@angular/core';
import { userFormat} from '../model/interfacePage'
import {DbapiService} from '../../Services/dbapi.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  allUsers: any = []

  constructor(private users:DbapiService) {

    
  }

  ngOnInit(): void {
    
    
  }
  getSignUp(user: userFormat){ 
    this.users.addUser(user).subscribe((data) => {
      console.log(data);
    })
    
    }


}
