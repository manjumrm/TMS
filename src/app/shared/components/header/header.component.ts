import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe:EventEmitter<any>=new EventEmitter()   
  constructor(private router: Router) {}

  ngOnInit() {
  }
  toggleSideBar(){
    this.toggleSideBarForMe.emit();
  }

  logOut(){
    localStorage.clear();
  this.router.navigate(['']);
  }
  
}
