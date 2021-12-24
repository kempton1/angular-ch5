import { Component } from '@angular/core';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-ch5';
  sideBarOpen = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate([`/home`], { skipLocationChange: true });
   }


  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
