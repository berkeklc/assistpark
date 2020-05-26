import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { CastExpr } from '@angular/compiler';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  constructor() {
   
  }
ngOnInit(){
 
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }
 

}
