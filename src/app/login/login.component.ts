import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {};
  validUser: User;

  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router,
    public nav: NavbarService
  ) { }

  ngOnInit() {
    // this.nav.hide();
  }

  onSubmitLogin(form) {
    this.auth.login(this.user)
      .subscribe(data => {
        this.validUser = data;
        this.directUser();
      });
  }

  directUser() {
    if (this.validUser) {
      this.router.navigateByUrl('admin/dashboard');
    }
    else {
      this.toastr.error("Invalid Credentials");
    }
  }

}
