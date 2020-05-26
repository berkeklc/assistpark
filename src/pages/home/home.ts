import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { CategoryPage } from '../category/category';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
topic:any="";
subtopics:any={};
  constructor(private router:Router) {


  }

 go(slug){
  
  this.router.navigateByUrl('/category/'+slug);
 }
}
