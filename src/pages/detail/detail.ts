import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  icons: string = "what";
  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
