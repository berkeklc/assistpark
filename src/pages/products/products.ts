import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {
type:any="products";
r:any;
products:any=[];
services:any=[];

  constructor(public storage:Storage,public http:HttpClient,public router:Router) {
this.products = [];
this.services = [];
    this.storage.get('ID').then((id)=>{
  this.http.post('http://localhost/assistpark/rest_api/api/get_company_products'
  ,JSON.stringify({
id:id
  })).subscribe((r)=>{
this.r = r;
this.r = this.r.result;
var p = this.r.products;
for(let i = 0;i<p.length;i++){
  if(p[i].type == 0){
    this.products.push(p[i]);
  }else{
    this.services.push(p[i]);
  }
}
  });;

});
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }
  onSegmentChanged($event){
   // this.type = $event;
  }

  goProduct(id){
this.router.navigateByUrl('product/'+id);
  }

}
