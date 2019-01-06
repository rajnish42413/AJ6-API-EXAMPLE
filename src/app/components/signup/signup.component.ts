import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private router: Router, private toastrService: ToastrService , private auth: AuthenticationService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.auth.do_signup(form.value).subscribe(
      data => {
        this.toastrService.success(data.message);
      },
      error => {
        this.toastrService.error(error.error);
      });

  }

}
