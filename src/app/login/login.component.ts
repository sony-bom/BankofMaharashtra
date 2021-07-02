import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    userId:'',
    password:''
  }


  userId: any;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    localStorage.removeItem('dataSource')
    localStorage.clear()
    
  }
  login(){
    localStorage.setItem('dataSource', this.user.userId);
   
    this.router.navigate(['/corporateUser']);
  }

}
