import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  password: string=null;
  name:any=null;
  email: string=null;
 type:any='business';
  res:any;

constructor(public router:Router,public alertCtrl:AlertController,public loadctrl:LoadingController,
  public http:HttpClient,public storage:Storage) {

}
finish(){
  let load = this.loadctrl.create({content:"Please wait..."});
  load.present();
  this.http.post('http://localhost/assistpark/rest_api/api/login'
  ,JSON.stringify({type:this.type,email:this.email,pass:this.password}))
  .subscribe((r=>{
  
this.res = r;
this.res = this.res.result;
if(this.res.ID != 0){
this.storage.set('ID',this.res.ID).then(()=>{ 

  load.dismiss();
this.router.navigateByUrl('/home');
});
}else{
  load.dismiss();
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

geri(){
this.router.navigateByUrl('/home');
}


}
