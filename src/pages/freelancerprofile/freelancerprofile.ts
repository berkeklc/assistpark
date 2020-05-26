import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-freelancerprofile',
  templateUrl: 'freelancerprofile.html',
})
export class FreelancerprofilePage {
  icons: string = "what";
  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FreelancerprofilePage');
  }

}
