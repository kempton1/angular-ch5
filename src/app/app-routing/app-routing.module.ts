import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';

import { routes } from './routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule {

  router!: Router;
  
  ngOnInit(){
    this.router.navigate(['home'], {skipLocationChange : true});
  }

 }
