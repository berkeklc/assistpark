webpackJsonp([2],{

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreelancerprofilePageModule", function() { return FreelancerprofilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__freelancerprofile__ = __webpack_require__(333);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FreelancerprofilePageModule = /** @class */ (function () {
    function FreelancerprofilePageModule() {
    }
    FreelancerprofilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__freelancerprofile__["a" /* FreelancerprofilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__freelancerprofile__["a" /* FreelancerprofilePage */]),
            ],
        })
    ], FreelancerprofilePageModule);
    return FreelancerprofilePageModule;
}());

//# sourceMappingURL=freelancerprofile.module.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FreelancerprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FreelancerprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FreelancerprofilePage = /** @class */ (function () {
    function FreelancerprofilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FreelancerprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FreelancerprofilePage');
    };
    FreelancerprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-freelancerprofile',template:/*ion-inline-start:"C:\Users\pc1\acidpark\src\pages\freelancerprofile\freelancerprofile.html"*/'\n\n<ion-content  >\n  <headerc ></headerc>\n  <ion-grid class="container" style="margin-top:50px;">\n    <ion-row>\n  <ion-col col-md-4 col-lg-4 col-12>\n   <ion-card style="text-align:center;    box-shadow: none;">\n      <img style="height: 120px;width: 120px;border-radius: 50%;display:unset;  margin-top: 30px;  " src="https://via.placeholder.com/120x120?text=placeholder"/>\n      <h5 class="pname"> Guest Manager </h5>\n      <h5 class="pnamesub"> Aygul Muradova</h5>\n      <ion-item>\n        <a  color="primary" small class="ios sx follow" round mode="ios">  <ion-icon name="checkmark"></ion-icon> Following</a>\n        <a  color="primary" small class="ios sx follow" round mode="ios">  <ion-icon name="send"></ion-icon> Message</a>\n      </ion-item>\n      <ion-item class="tenter">\n      <a  color="primary" small class="ios sx getin" round mode="ios">    <ion-icon name="call"></ion-icon> Make a call </a>\n      </ion-item>\n      <ion-item class="labelfind">\n      <p class="proview">Proje Görüntüleme</p> <span style="font-size:13px;">129.459</span>\n      </ion-item>\n      <ion-item class="labelfind" style="border-bottom: 1px solid #efefef;      margin-bottom: 20px;">\n      <p class="followers">Takipçiler</p> <span style="font-size:13px;">5.452</span>\n      </ion-item>\n      <ion-item>\n        <p class="followers">Teams</p>\n      </ion-item>\n      <ion-item style="padding: 0;background: transparent;">\n        <img style="margin-left: 54px;margin-right: 20px;float: left;border-radius: 24px;width: 40px!important;height: 40px;margin-top: -8px;" src="https://via.placeholder.com/48x48?text=placeholder"/> \n        <h3 class="postname"> Massage therapist  </h3>\n        <h3 class="postsub"> Erdem Kirmitci </h3>\n        <span class="follows">+ Follow</span>\n      </ion-item>\n      <ion-item style="padding: 0;background: transparent;">\n        <img style="margin-left: 54px;margin-right: 20px;float: left;border-radius: 24px;width: 40px!important;height: 40px;margin-top: -8px;" src="https://via.placeholder.com/48x48?text=placeholder"/> \n        <h3 class="postname"> Customer service  </h3>\n        <h3 class="postsub"> Vincent Cain  </h3>\n        <span class="follows">+ Follow</span>\n  \n      </ion-item>\n<ion-item class="socials">\n  <ion-icon name="logo-twitter"></ion-icon>\n  <ion-icon name="logo-facebook"></ion-icon>\n  <ion-icon name="logo-dribbble"></ion-icon>\n\n</ion-item>\n\n   </ion-card>\n  </ion-col>\n  <ion-col col-md-8 col-12 col-lg-8 style="    padding: 0 35px;">\n    <img src="assets/imgs/topfre.png" style="    height: 62px;" alt="">\n    <img src="assets/imgs/badge.png" style="    height: 62px;" alt="">\n  <ion-item class="editprof">\n    <a  color="primary" small class="ios sx follow" round mode="ios">  Edit your profile</a>\n    <ion-icon class="mors" name="more"></ion-icon>\n  </ion-item>\n\n  <ion-segment [(ngModel)]="icons" color="secondary" class="seghome" style="margin-top:25px;margin-bottom:0px;">\n    <ion-segment-button value="what" >\n        About\n      </ion-segment-button>\n    <ion-segment-button value="rez"> \n   Services\n    </ion-segment-button>\n    <ion-segment-button value="assist">\n     Assistline\n    </ion-segment-button>\n    <ion-segment-button value="reviews">\n      Reviews (124) \n    </ion-segment-button>\n  </ion-segment>\n  \n  <div  [ngSwitch]="icons" >\n  <ion-item *ngSwitchCase="\'what\'" style="padding:0;">\n      <ion-col col-lg-5 col-xl-5 col-md-5 col-12 class="leftblock">\n          <ion-card-title class="segtits">\n            Hi, I am an experienced person who lives in Turkey and loves to design, read and make things happen. I would love to help you and give suggests while you\'re working with me. <br>\n            <span style="font-size: 13px; color: #277DFF;">Edit text</span>\n         <ion-item style=" padding: 0;margin-top: 30px;">\n          <img style=" float: left; margin-right: 10px;height: 21px; width: 24px!important; " src="assets/imgs/hat.png" alt="">\n           <p class="hats">Hats</p> \n           <span style="font-size: 13px; color: #277DFF;">+ Add</span>\n         </ion-item>\n         <p style="font-size: 13px; color: #333333;">The is short description about hats</p>\n         <ion-item style="padding:0;">\n           <span class="hatsitem">Graphic Designer</span>\n           <span class="hatsitem">  Illustrator</span>\n           <span class="hatsitem">Product Designer</span>\n         </ion-item>\n         <p class="colors"> \n            <ion-icon name="arrow-down"></ion-icon>  Show skills (16)     \n         </p>\n\n         <ion-item style=" padding: 0;margin-top: 30px;">\n          <img style=" float: left; margin-right: 10px;height: 21px; width: 24px!important; " src="assets/imgs/grad.png" alt="">\n           <p class="hats">Education</p> \n           <span style="font-size: 13px; color: #277DFF;position: relative; top: 5px;">+ Add</span>\n         </ion-item>\n         <ion-item class="edu">\n             <h3>Graphic Design</h3>\n             <p>Mustafa Kemal University, Turkey</p>\n             <span>2018 - Present</span>\n         </ion-item>\n         <ion-item class="edu">\n            <h3>Graphic Design</h3>\n            <p>Mustafa Kemal University, Turkey</p>\n            <span>2018 - Present</span>\n        </ion-item>\n          </ion-card-title>\n        </ion-col>\n  </ion-item>\n  <ion-item *ngSwitchCase="\'rez\'" style="padding:0;">\n    <ion-row class="servic"> \n      <ion-col col-12 col-lg-6 col-md-6 style="box-shadow:none;">\n        <ion-card text-left style="margin: 0;">\n          <img style="width:100%!important;" src="https://via.placeholder.com/270x141?text=placeholder"/>\n              <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n          <ion-card-content>\n            <ion-card-title>\n              Ben, herşey dahil internet sitenizi hazırlar ve yayınlarım\n              </ion-card-title>\n            <p class="branding">\n              İllüstrasyon </p>\n          </ion-card-content>\n          <span class="price"><b class="realprice">350 TL</b></span>\n          <a  color="primary" small class="ios sx buynow" round mode="ios">See Details</a>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12 col-lg-6 col-md-6 style="box-shadow:none;">\n        <ion-card text-left style="    margin: 0;">\n          <img style="width:100%!important;" src="https://via.placeholder.com/270x141?text=placeholder"/>\n              <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n          <ion-card-content>\n            <ion-card-title>\n              Ben, portrenizi animatik/karikatür/realist çizebilirim\n              </ion-card-title>\n            <p class="branding">\n              Karikatür & Karakalem </p>\n          </ion-card-content>\n          <span class="price"><b class="realprice">350 TL</b></span>\n          <a  color="primary" small class="ios sx buynow" round mode="ios">See Details</a>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n</ion-item>\n<ion-item class="forlabel" *ngSwitchCase="\'assist\'" style="padding: 0px;">\n   \n       <h1 class="share">Bir deneyim paylaş</h1>\n        <ion-item class="byar">\n          <img style=" float: left; border-radius: 50%; width:unset!important; border: 1px solid #efefef;" src="https://via.placeholder.com/48x48?text=placeholder"/> \n          <h3 class="foto">  <ion-icon name="photos"></ion-icon> Fotoğraf Ekleyin</h3>\n          <h3 class="foto">  <ion-icon name="play"></ion-icon> Video Ekleyin</h3>\n        </ion-item>\n      <ion-card class="post">\n        <h1><b>Coslab</b> bir yazıyı paylaştı</h1>\n        <img style="margin-left: 20px;margin-right: 20px;float:left; border-radius: 24px;width:48px;height:48px; " src="https://via.placeholder.com/48x48?text=placeholder"/> \n        <h3 class="postname"> Cathy Wong</h3>\n        <h3 class="postsub"> Nutritionist & Wellness Expert  </h3>\n        <p class="text">Treat your skin with a refreshing facial! Made in Switzerland, the PHYTO 5 skincare line abounds with natural ingredients such as clay, algae, plankton, trace minerals, and essential oils that help soothe and renew th</p>\n        <img style="       margin-bottom: 20px; width: 100%!important;" src="https://via.placeholder.com/530x300?text=placeholder"/> \n        <h3 class="socialbt">Beğen</h3>\n        <h3 class="socialbt">Paylaş</h3>\n        <h3 class="socialtime">2 hours ago</h3>\n      </ion-card>\n      <ion-card class="post">\n        <h1><b>Coslab</b> bir yazıyı paylaştı</h1>\n\n        <img style="margin-left: 20px;margin-right: 20px;float:left; border-radius: 24px;width:48px;height:48px; " src="https://via.placeholder.com/48x48?text=placeholder"/> \n        <h3 class="postname"> Cathy Wong</h3>\n        <h3 class="postsub"> Nutritionist & Wellness Expert  </h3>\n        <p class="text">Treat your skin with a refreshing facial! Made in Switzerland, the PHYTO 5 skincare line abounds with natural ingredients such as clay, algae, plankton, trace minerals, and essential oils that help soothe and renew th</p>\n        <img style="     margin-bottom: 20px;width: 100%!important;"  src="https://via.placeholder.com/530x300?text=placeholder"/> \n        <h3 class="socialbt">Beğen</h3>\n        <h3 class="socialbt">Paylaş</h3>\n        <h3 class="socialtime">2 hours ago</h3>\n      </ion-card>\n   \n</ion-item>\n\n<ion-item *ngSwitchCase="\'reviews\'" style="padding:0;">\n  <ion-row class="servic" style="margin-top:30px;"> \n\n      <ion-col col-md-4 col-lg-4 col-12 class="mar1" style="     margin-top: 32px;   display: block;">\n        <img class="imgmarg" src="https://via.placeholder.com/48x48?text=placeholder"/> \n        <h3 class="postname"> Charlotte Hall</h3>\n        <h3 class="postsub"> Antalya, Turkey </h3>\n      </ion-col>\n      <ion-col col-md-8 col-lg-8 col-12  class="mar2" style="    display: block;">\n        <ion-icon class="stars" name="star"></ion-icon>\n        <ion-icon class="stars" name="star"></ion-icon>\n        <ion-icon class="stars" name="star"></ion-icon>\n        <ion-icon class="stars" name="star"></ion-icon>\n        <ion-icon class="stars" name="star"></ion-icon>\n        <p class="time">13/6/2020 8:24 PM    <ion-icon class="mores" name="more"></ion-icon></p>\n     \n        <p class="comment">Startup’ımız için çok güzel bir iş oldu, çok teşekkürler. Tebrik ederim. </p>\n      </ion-col>\n\n  \n  </ion-row>\n</ion-item>\n  </div>\n</ion-col>\n</ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc1\acidpark\src\pages\freelancerprofile\freelancerprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FreelancerprofilePage);
    return FreelancerprofilePage;
}());

//# sourceMappingURL=freelancerprofile.js.map

/***/ })

});
//# sourceMappingURL=2.js.map