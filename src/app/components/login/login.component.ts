import { AuthenticationService } from './../../authentication.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginuser: any;

  constructor(  private router: Router, private toastrService: ToastrService , private auth: AuthenticationService ) { }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.pass;
    this.auth.do_login(email, password).subscribe(
      data => {
          console.log(data);
          //  this.router.navigate([this.returnUrl]);
          this.router.navigate(['/home']);
          this.toastrService.success(data.message);
      },
      error => {
        this.toastrService.error(error.error);
        console.log(error);
      });
    // this.toastrService.success(email + password);
  }

}
