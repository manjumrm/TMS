import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public openNumber: number = 5;
  public inProgress: number =35;
  public fixed: number = 15;
  public hold: number = 22;
  public closed: number = 12;
  public reOpen: number = 11;

  constructor(private router : Router) { }

  ngOnInit() {
  }

  getOpenTickets(){
   this.router.navigate(['/default/openTicket']);
  }

  getInProgressTickets(){
    this.router.navigate(['/default/inProgressTicket']);
  }

  getFixedTickets(){
    this.router.navigate(['/default/fixedTicket']);
  }

  getHoldTickets(){
    this.router.navigate(['/default/holdTicket']);
  }

  getClosedTickets(){
    this.router.navigate(['/default/closedTicket']);
  }
  getReOpenTickets(){
    this.router.navigate(['/default/reOpenTicket']);
  }

}
