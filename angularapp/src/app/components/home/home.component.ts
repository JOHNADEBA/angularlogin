import { Component, OnInit } from '@angular/core';
// import { runInThisContext } from 'vm';
import { DbapiService } from '../../Services/dbapi.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allUsers: any;

  inter: any;
  time: any;

  xxx: any;
  error: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private user: DbapiService
  ) {
    user.getUsers().subscribe((data) => {
      this.allUsers = data;
      console.log(data);

      this.xxx = this.allUsers;
    });
  }

  ngOnInit(): void {
    this.inter = setInterval(() => {
      this.time = new Date();
    }, 1000);

    // this.router.navigate(['login'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    clearInterval(this.inter);
  }
  name: string = '';
  ans: string = '';
  num1: string = '0';
  num2: string = '1';
  sign: string = '';
  arr: string[] = [];

  modelChangeFn(namee: string) {
    this.xxx = this.allUsers.filter((person: any) => {
      return person.name.toLowerCase().includes(namee.toLowerCase());
    });
    if (this.xxx.length === 0) this.error = 'no available result';
    else this.error = '';
    console.log(this.xxx);
  }

  getNo(no: string) {
    this.arr.push(no);
    console.log(this.arr);
    if (this.sign) {
      this.num2 = no.toString();
    }
  }
  getSign(sign: string) {
    this.sign = sign;
  }

  getResult() {
    let numAns = 0;
    switch (this.sign) {
      case '-':
        numAns = parseInt(this.num1) - parseInt(this.num2);
        break;
      case '/':
        numAns = parseInt(this.num1) / parseInt(this.num2);
        break;
      case 'x':
        numAns = parseInt(this.num1) * parseInt(this.num2);
        break;
      case '+':
        numAns = parseInt(this.num1) + parseInt(this.num2);
        break;
      default:
        console.log(`Sorry, we are out of ${this.sign}.`);
    }

    if (isNaN(numAns)) {
      this.ans = 'Error';
    } else this.ans = numAns.toString();
    this.num1 = '';
    console.log(this.ans);
  }

  allClear() {
    this.num1 = '';
  }
}
