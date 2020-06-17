
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../services/eventinfo.model';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  activItem: string;
  user: User = new User();

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit(): void {
    this.user = this.eventService.getUser();
    // if(!this.user){
    //   this.router.navigate(['\login']);
    // }
  }

  changeActiveItem(selection){
    this.activItem = selection;
    if(selection==='home'){
      this.router.navigate(['/home'])
    }else if(selection==='create'){
      this.router.navigate(['/create-event'])
    }
    if(selection==='reports'){
      this.router.navigate(['/report'])
    }
  }
}
