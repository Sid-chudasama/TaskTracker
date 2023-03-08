import { Component } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  showAddTask: Boolean = false;
  subscription: Subscription;

  constructor(private uiService : UiService, private router : Router){
    this.subscription = this.uiService.onToggle().subscribe( value => this.showAddTask = value);
  }

  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

  hasRoute(route:string){
    return this.router.url === route;
  }
}
