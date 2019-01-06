import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public user: any ;
public data: any[] ;
public name: string;
  constructor( private router: Router, private toastrService: ToastrService , private auth: AuthenticationService) { }

  ngOnInit() {
    this.user = localStorage.getItem('currentUser') ;
  }

  logout() {
    this.auth.logout();
    this.toastrService.success('LogOut Successful');
  }

}
