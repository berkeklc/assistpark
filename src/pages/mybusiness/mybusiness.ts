import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Router } from '@angular/router';

/**
 * Generated class for the MybusinessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-mybusiness',
  templateUrl: 'mybusiness.html',
})
export class MybusinessPage {

  constructor(public router:Router) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MybusinessPage');
  }
  goProducts(){
this.router.navigateByUrl('products');
  }
  comeback(){
    this.router.navigateByUrl('home');
  }
}
