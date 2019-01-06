import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public user: any ;
  public data: any[] ;
  public name: string;
  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('#sidebarToggle').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('sidebar-toggled');
        $('.sidebar').toggleClass('toggled');
        $('.toggle-brandtitle').toggleClass('d-none');
        $('.nav-item-list').toggleClass('d-none');
      });
    });

    this.user = localStorage.getItem('currentUser') ;
    const data = JSON.parse(this.user);
    this.name = data.data.first_name + ' ' + data.data.last_name ;
  }

}
