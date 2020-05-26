import { Component,Input, Output, EventEmitter  } from '@angular/core';
import { CategoryPage } from '../../pages/category/category';
import { NavController, LoadingController } from 'ionic-angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the HeadercComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'headerc',
  templateUrl: 'headerc.html'
})
export class HeadercComponent {

  text: string;
  @Input("catid") catid;
  @Input('profile') profile;
  @Input('back') back;
  catidm:number;
  id:any=0;
  country:any;
  categories:any;
  maincat:any=[];
  subcat:any=[];
  backs:number=0;
  constructor(public loadingCtrl:LoadingController,public storage:Storage,public router:Router) {
    
  
   this.storage.get('ID').then((id)=>{
    if(id > 0){
      this.id = id;
    }
   });
  
   this.storage.get('country').then((c)=>{
     console.log(c);
    if(c == undefined || c == null || c == "" || c.length == 0){
      this.country = "GLOBAL";
    }else{
      this.country = c;
    }
   });
   this.storage.get('categories').then((c)=>{
    this.categories = c;
    for(let i = 0;i<this.categories.length;i++){
      console.log("for ", this.catid);
      if(this.categories[i].main_cat == 0){
        this.maincat.push(this.categories[i]);
      }else if(this.categories[i].main_cat == this.catid){
        console.log(this.categories[i]);
        this.subcat.push(this.categories[i]);
      }
    }
   });
  }

  countryChange($event){
    let load = this.loadingCtrl.create();
    load.present();
    this.storage.set('country',$event).then(()=>{
      this.router.navigateByUrl("home/"+$event);
      load.dismiss();
    });
   
  }
  countryIcon(){
    setTimeout(()=>{
    var t = document.getElementsByClassName('select-popover')[0].children[1].children[1].children[0].children[1].children[0].children;
    console.log(t);

   let pcd = t;
console.log(pcd);
for(let i = 0;i<pcd.length;i++){
var item = pcd[i].children[0].children[1];
var content = pcd[i].children[0].children[0]
var flag = item.getAttribute('ng-reflect-value');
var text = content.children[0].textContent;
if(text == "Global"){
  content.children[0].innerHTML="<img src='assets/imgs/globe.svg' alt='' > <span>"+text+"</span>";
}else{
content.children[0].innerHTML="<img src='https://restcountries.eu/data/"+flag.toLocaleLowerCase()+".svg' /> <span>"+text+"</span>";
}
}
},10);
  }
  ngAfterViewInit(){
    this.catidm = this.catid;
   // alert(this.catid);
  
  }
  topicselect(id){
    this.router.navigateByUrl('/category/'+id);  
  //  this.navCtrl.push(CategoryPage,{id:id},{animate:false});

  }
  comeback(){
    this.router.navigateByUrl('/home');
  }

  goRegister(){
    this.router.navigateByUrl('/register');
  }
  goLogin(){
    this.router.navigateByUrl('/login');
  }
  goPartner(){
    this.router.navigateByUrl('/partner');
  }
  goControl(){
this.router.navigateByUrl('/mybusiness');
  }
  clear(){
    this.storage.clear();
  this.router.navigateByUrl('/login');
  }
}
