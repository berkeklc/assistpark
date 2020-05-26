import { Component ,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,Slides, LoadingController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  
    password: string=null;
    country_selected:boolean=true;
    company_information_ok:boolean=true;
    user_information_ok:boolean=true;
    city: any=null;
    name:any=null;
    email: string=null;
    position:string = null;
    country:any;
    countries:any=[];
    company:any;
    address:any=null;
    employees:any=null;
    res:any;
    @ViewChild(Slides) slides: Slides;
  constructor(public router:Router,public alertCtrl:AlertController,public loadctrl:LoadingController,public http:HttpClient,public storage:Storage) {
this.storage.get('countries')
.then((c)=>{
this.countries = c;

});
  }
  finish(){
    let load = this.loadctrl.create({content:"Please wait..."});
    load.present();
    this.http.post('http://localhost/assistpark/rest_api/api/register_company'
    ,JSON.stringify({company:this.company,country:this.country,
      city:this.city,address:this.address,employees:this.employees,
    name:this.name,position:this.position,email:this.email,password:this.password}))
    .subscribe((r=>{
      load.dismiss();
this.res = r;
this.res = this.res.result;
if(this.res.ID != 0){
let alert = this.alertCtrl.create({
  title:"Register success!",
  subTitle:'Register successfull!',
  buttons:["Go Login"]
})
alert.present();
this.router.navigateByUrl('/login');
}else{
  let alert = this.alertCtrl.create({
    title:"Wrong!",
    subTitle:'Please check this informations',
    buttons:["Try Again"]
  })
  alert.present();
}

    }));
      }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

next(){
  this.slides.slideNext();
}
geri(){
  this.router.navigateByUrl('/home');
}
  chooseCountry(country){
    this.country = country;
    this.country_selected = false;
  }
  
 
  control(){
    if(this.company.length > 3 && this.city != null && this.address != null && this.employees != null){
      this.company_information_ok = false;
    }else{
      this.company_information_ok = true;
    }
  }
  control2(){ 
    if(this.name.length > 3 && this.email.length > 5 && this.password.length > 3 && this.position != null){
      this.user_information_ok = false;
    }else{
      this.user_information_ok = true;
    } 
  }
  
}
