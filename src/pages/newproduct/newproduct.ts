import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient,HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the NewproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-newproduct',
  templateUrl: 'newproduct.html',
})
export class NewproductPage {
gallery:any=[];
main:any=[];
allc:any=[];
subcat:any=[];
name:any;
type:any=0;
category:any;
subcategory:any;
tags:any;
description:any;
res:any;
productid:any=0;
piecetrue:boolean=false;
  constructor(public route:ActivatedRoute,public alertCtrl:AlertController,public loadingCtrl:LoadingController,public http:HttpClient,public router:Router,public storage:Storage) {
    this.productid = this.route.snapshot.paramMap.get('ids');
    this.storage.get('categories').then((c)=>{
      this.allc = c;
      for(let i = 0;i<c.length;i++){
        if(c[i].main_cat == 0){
          this.main.push(c[i]);
        }
      }
    });
  }
changeCategory($event){
this.subcat = [];
for(let i = 0;i<this.allc.length;i++){
  if(this.allc[i].main_cat == $event){
    this.subcat.push(this.allc[i]);
  }
}
}
controlpiece($event){
this.piecetrue = true;
}
saveProducts(){
  let load = this.loadingCtrl.create();
  load.present();
  this.storage.get('ID').then((id)=>{

  
  this.http.post('http://localhost/assistpark/rest_api/api/new_products',JSON.stringify({
name:this.name,
type:this.type,
category:this.category,
subcategory:this.subcategory,
tags:this.tags,
description:this.description,
id:id
  })).subscribe((r)=>{
this.res = r;
this.res = this.res.result;
load.dismiss();
if(this.res.id != 0){
window.history.back();
}else{
let alert = this.alertCtrl.create({
  title:"Wrong!",
  subTitle:"Please check product information",
  buttons:["OK!"]
});
alert.present();
}
  });
});
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewproductPage');
  }
  goControl(){
window.history.back();
  }

}
