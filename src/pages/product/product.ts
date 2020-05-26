import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Router,ActivatedRoute } from '@angular/router';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
id:any;
  constructor(public router:Router,public route:ActivatedRoute) {
   this.id = this.route.snapshot.paramMap.get('id');
   
  }

  ionViewDidLoad() {
   
  }
 
}
