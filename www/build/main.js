webpackJsonp([0],{

/***/ 126:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 126;

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(router) {
        this.router = router;
        this.topic = "";
        this.subtopics = {};
    }
    HomePage.prototype.go = function (slug) {
        this.router.navigateByUrl('/category/' + slug);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\pc1\acidpark\src\pages\home\home.html"*/'\n<ion-content>\n\n  <headerc catid=0>\n  \n  </headerc>\n \n\n<ion-grid class="container">\n  <ion-row>\n    <ion-col col-lg-6 col-xl-6 col-md-6 col-12 class="bgrey1">\n      <h5 class="hometit">İhtiyacınız olan hizmeti dışarı çıkmanıza gerek kalmadan halledin!</h5>\n      <button ion-button color="secondary" block class="btnnew" style="margin-left: 30px; margin-right: 10px;">\n       Assist isteyin\n      </button>\n      <button ion-button color="secondary" class="btnnew" block style="margin-left: 0;">\n        Assistleri gör\n       </button>\n       <img src="assets/imgs/plane.png" alt="" style="position: absolute;left: -20px;bottom: 150px;">\n       <img src="assets/imgs/15.png" class="homimg1" alt="">\n    </ion-col>\n     \n    <ion-col col-lg-6 col-xl-6 col-md-6 col-12 >\n      <ion-col col-lg-12 col-xl-12 col-md-12 col-12 class="bgrey2" style="padding-bottom: 50px;margin-bottom: 29px;">\n      <img src="assets/imgs/12.png" class="homeimg2"  alt="">\n\n      <h5 class="hometit2">Hayalinizdeki arabayı, evi ve binlerce ürünü ayağınıza getirdik</h5>\n      <button ion-button color="secondary" block class="btnnew" style="margin-left: 0px; margin-right: 10px;">\n      Pazar yeri\n      </button>\n    </ion-col>\n      <div style="clear: both;"></div>\n      <ion-col col-lg-12 col-xl-12 col-md-12 col-12 class="bgrey2">\n  \n        <h5 class="hometit3">Aradıkları kişi sen olabilirsin, iş ilanlarına göz at veya freelancer ol</h5>\n        <button ion-button color="secondary" block class="btnnew" style="margin-left: 39px; margin-right: 10px;">\n          İş İlanları\n        </button>\n        <button ion-button color="secondary" block class="btnnew" style="margin-left: 0px; margin-right: 10px;">\n          Freelance işler\n        </button>\n        <img src="assets/imgs/13.png" class="homeimg3"  alt="">\n\n      </ion-col>\n      <div style="clear: both;"></div>\n\n    </ion-col>\n\n    <div style="clear: both;"></div>\n\n    <segment style="width:100%;">\n   \n    </segment>\n\n\n    <ion-col col-12 class="lastchance " style="margin-top:50px;">\n      <h4 style="width:100%;    margin-bottom: 30px;">Assisparks you love  <small color="darkblue" tappable style="color:#000 !important;float:right;text-decoration: none;font-size: 15px;">View all          <ion-icon style="    font-size: 16px;" name="arrow-round-forward"></ion-icon></small></h4>\n     \n      <ion-slides  slidesPerView=4 spaceBetween=10>\n    \n        <ion-slide>\n          <ion-card text-left>\n            <img src="https://via.placeholder.com/270x141?text=placeholder"/>\n            <img src="https://via.placeholder.com/72x72?text=placeholder" alt="pp" class="pp">\n                <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n       \n            <ion-card-content style="padding: 0;">\n              <ion-card-title class="assis" style="margin-bottom: -5px!important;">\n                The Ultimate\n                </ion-card-title>\n                <ion-item style="width:100%;text-align:center;">\n                  <img src="https://via.placeholder.com/28x28?text=placeholder" alt="people" class="smallimg">\n                  <img src="https://via.placeholder.com/28x28?text=placeholder" alt="people" class="smallimg">\n                  <img src="https://via.placeholder.com/28x28?text=placeholder" alt="people" class="smallimg">\n                  <img src="https://via.placeholder.com/28x28?text=+3" alt="people" class="smallimg">\n                </ion-item>\n                <p class="branding" style=" text-align: center;">\n                  Istanbul </p>\n            </ion-card-content>\n       \n          </ion-card>  </ion-slide>\n\n\n          <ion-slide>\n            <ion-card text-left>\n              <img src="https://via.placeholder.com/270x141?text=placeholder"/>\n              <img src="https://via.placeholder.com/72x72?text=placeholder" alt="pp" class="pp">\n                  <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n         \n              <ion-card-content style="padding: 0;">\n                <ion-card-title class="assis" style="margin-bottom: -5px!important;">\n                  Beautiful Life Beauty                  \n                  </ion-card-title>\n                  <ion-item style="width:100%;text-align:center;">\n                    <img src="https://via.placeholder.com/28x28?text=placeholder" alt="people" class="smallimg">\n                    <img src="https://via.placeholder.com/28x28?text=placeholder" alt="people" class="smallimg">\n                    <img src="https://via.placeholder.com/28x28?text=placeholder" alt="people" class="smallimg">\n                    <img src="https://via.placeholder.com/28x28?text=+6" alt="people" class="smallimg">\n                  </ion-item>\n                  <p class="branding" style=" text-align: center;">\n                   Bangsar South </p>\n           \n              </ion-card-content>\n         \n  \n            </ion-card>  </ion-slide>\n            <ion-slide>\n              <ion-card text-left>\n                <img src="https://via.placeholder.com/270x141?text=placeholder"/>\n                <img src="https://via.placeholder.com/72x72?text=placeholder" alt="pp" class="pp">\n                    <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n           \n                <ion-card-content style="padding: 0;">\n                  <ion-card-title class="assis" style="margin-bottom: -5px!important;">\n                    Spa Luna                    \n                    </ion-card-title>\n                    <ion-item style="width:100%;text-align:center;">\n                      <img src="https://via.placeholder.com/28x28?text=placeholder" alt="people" class="smallimg">\n                      <img src="https://via.placeholder.com/28x28?text=placeholder" alt="people" class="smallimg">\n                      <img src="https://via.placeholder.com/28x28?text=placeholder" alt="people" class="smallimg">\n                      <img src="https://via.placeholder.com/28x28?text=2" alt="people" class="smallimg">\n                    </ion-item>\n                    <p class="branding" style=" text-align: center;">\n                      Available in 6 locations </p>\n                </ion-card-content>\n              \n              </ion-card>  </ion-slide>\n              <ion-slide>\n                <ion-card text-left>\n                  <img src="https://via.placeholder.com/270x141?text=placeholder"/>\n                  <img src="https://via.placeholder.com/72x72?text=placeholder" alt="pp" class="pp">\n                      <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n             \n                  <ion-card-content style="padding: 0;">\n                    <ion-card-title class="assis" style="margin-bottom: -5px!important;">\n                      Coslab                      \n                      </ion-card-title>\n                      <ion-item style="width:100%;text-align:center;">\n                        <img src="https://via.placeholder.com/28x28?text=placeholder" alt="people" class="smallimg">\n                        <img src="https://via.placeholder.com/28x28?text=placeholder" alt="people" class="smallimg">\n                        <img src="https://via.placeholder.com/28x28?text=placeholder" alt="people" class="smallimg">\n                      </ion-item>\n                      <p class="branding" style=" text-align: center;">\n                        USJ Taipan </p>\n                  </ion-card-content>\n                \n                </ion-card>  </ion-slide>\n                <ion-slide>\n                  <ion-card text-left>\n                    <img src="https://via.placeholder.com/250x141?text=placeholder"/>\n                    <img src="https://via.placeholder.com/72x72?text=placeholder" alt="pp" class="pp">\n                        <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n               \n                    <ion-card-content style="padding: 0;">\n                      <ion-card-title class="assis" style="margin-bottom: -5px!important;">\n                        Coslab\n                        </ion-card-title>\n                        <p class="branding" style=" text-align: center;">\n                          USJ Taipan </p>\n                    </ion-card-content>\n                  \n                  </ion-card>  </ion-slide>\n                  \n      </ion-slides>\n      <button type="submit"  float-left ion-button color="primary" class="btnPrev" (click)="slidePrev()">  <ion-icon name="arrow-back"></ion-icon>\n      </button>\n                  <button type="submit" float-right ion-button color="primary" class="btnNext" (click)="nextSlide()">  <ion-icon name="arrow-forward"></ion-icon>\n                  </button>\n    </ion-col>\n\n    <ion-col col-12 class="lastchance">\n      <h4 style="width:100%;    margin-bottom: 30px;">Popular Services  <small color="darkblue" tappable style="color:#000 !important;float:right;text-decoration: none;font-size: 15px;">View all  \n         <ion-icon style="    font-size: 16px;" name="arrow-round-forward"></ion-icon>\n      </small></h4>\n      <ion-slides  slidesPerView=4 spaceBetween=10>\n\n        <ion-slide>\n          <ion-card text-left>\n            <img src="https://via.placeholder.com/270x141?text=placeholder"/>\n                <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n       \n            <ion-card-content>\n              <ion-card-title>\n                3-Hour Phyto 5 Elements Spa Indulgence with Facial and Body Massage for 1 Person\n                \n                </ion-card-title>\n                \n              <p class="branding">\n                Beauty & Wellness </p>\n            </ion-card-content>\n            <a  color="primary" small class="ios sx buynow" round mode="ios" style="margin-left: 30px;">Request an offer</a>\n\n          </ion-card>  </ion-slide>\n\n\n          <ion-slide>\n            <ion-card text-left>\n              <img src="https://via.placeholder.com/270x141?text=placeholder"/>\n                  <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n         \n              <ion-card-content>\n                <ion-card-title>\n                  3-Hour Phyto 5 Elements Spa Indulgence with Facial and Body Massage for 1 Person\n                  \n                  </ion-card-title>\n                  \n                <p class="branding">\n                  Beauty & Wellness </p>\n              </ion-card-content>\n              <a  color="primary" small class="ios sx buynow" round mode="ios" style="margin-left: 30px;">Request an offer</a>\n\n  \n            </ion-card>  </ion-slide>\n            <ion-slide>\n              <ion-card text-left>\n                <img src="https://via.placeholder.com/270x141?text=placeholder"/>\n                    <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n           \n                <ion-card-content>\n                  <ion-card-title>\n                    3-Hour Phyto 5 Elements Spa Indulgence with Facial and Body Massage for 1 Person\n                    \n                    </ion-card-title>\n                    \n                  <p class="branding">\n                    Beauty & Wellness </p>\n                </ion-card-content>\n                <span class="price"><b class="realprice">$50</b><b class="discountprice">$30</b></span>\n                <a  color="primary" small class="ios sx buynow" round mode="ios">Buy now</a>\n    \n              </ion-card>  </ion-slide>\n              <ion-slide>\n                <ion-card text-left>\n                  <img src="https://via.placeholder.com/270x141?text=placeholder"/>\n                      <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n             \n                  <ion-card-content>\n                    <ion-card-title>\n                      3-Hour Phyto 5 Elements Spa Indulgence with Facial and Body Massage for 1 Person\n                      \n                      </ion-card-title>\n                      \n                    <p class="branding">\n                      Beauty & Wellness </p>\n                  </ion-card-content>\n                  <span class="price"><b class="realprice">$50</b><b class="discountprice">$30</b></span>\n                  <a  color="primary" small class="ios sx buynow" round mode="ios">Buy now</a>\n      \n                </ion-card>  </ion-slide>\n                <ion-slide>\n                  <ion-card text-left>\n                    <img src="https://via.placeholder.com/250x141?text=placeholder"/>\n                        <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n               \n                    <ion-card-content>\n                      <ion-card-title>\n                        3-Hour Phyto 5 Elements Spa Indulgence with Facial and Body Massage for 1 Person\n                        \n                        </ion-card-title>\n                        \n                      <p class="branding">\n                        Beauty & Wellness </p>\n                    </ion-card-content>\n                    <span class="price"><b class="realprice">$50</b><b class="discountprice">$30</b></span>\n                    <a  color="primary" small class="ios sx buynow" round mode="ios">Buy now</a>\n        \n                  </ion-card>  </ion-slide>\n      </ion-slides>\n      <button type="submit"  float-left ion-button color="primary" class="btnPrev" (click)="slidePrev()">  <ion-icon name="arrow-back"></ion-icon>\n      </button>\n                  <button type="submit" float-right ion-button color="primary" class="btnNext" (click)="nextSlide()">  <ion-icon name="arrow-forward"></ion-icon>\n                  </button>\n    </ion-col>\n    <div style="clear: both;"></div>\n    \n    <ion-col col-12 class="lastchance">\n      <h4 style="width:100%;    margin-bottom: 30px;">Popular Services  <small color="darkblue" tappable style="color:#000 !important;float:right;text-decoration: none;font-size: 15px;">View all         <ion-icon style="    font-size: 16px;" name="arrow-round-forward"></ion-icon></small></h4>\n      <ion-slides  slidesPerView=4 spaceBetween=10>\n\n        <ion-slide>\n          <ion-card text-left>\n            <img src="https://via.placeholder.com/270x141?text=placeholder"/>\n                <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n       \n            <ion-card-content>\n              <ion-card-title>\n                3-Hour Phyto 5 Elements Spa Indulgence with Facial and Body Massage for 1 Person\n                \n                </ion-card-title>\n                \n              <p class="branding">\n                Beauty & Wellness </p>\n            </ion-card-content>\n            <a  color="primary" small class="ios sx buynow" round mode="ios" style="margin-left: 30px;">Request an offer</a>\n\n          </ion-card>  </ion-slide>\n\n\n          <ion-slide>\n            <ion-card text-left>\n              <img src="https://via.placeholder.com/270x141?text=placeholder"/>\n                  <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n         \n              <ion-card-content>\n                <ion-card-title>\n                  3-Hour Phyto 5 Elements Spa Indulgence with Facial and Body Massage for 1 Person\n                  \n                  </ion-card-title>\n                  \n                <p class="branding">\n                  Beauty & Wellness </p>\n              </ion-card-content>\n              <a  color="primary" small class="ios sx buynow" round mode="ios" style="margin-left: 30px;">Request an offer</a>\n  \n            </ion-card>  </ion-slide>\n            <ion-slide>\n              <ion-card text-left>\n                <img src="https://via.placeholder.com/270x141?text=placeholder"/>\n                    <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n           \n                <ion-card-content>\n                  <ion-card-title>\n                    3-Hour Phyto 5 Elements Spa Indulgence with Facial and Body Massage for 1 Person\n                    \n                    </ion-card-title>\n                    \n                  <p class="branding">\n                    Beauty & Wellness </p>\n                </ion-card-content>\n                <span class="price"><b class="realprice">$50</b><b class="discountprice">$30</b></span>\n                <a  color="primary" small class="ios sx buynow" round mode="ios">Buy now</a>\n    \n              </ion-card>  </ion-slide>\n              <ion-slide>\n                <ion-card text-left>\n                  <img src="https://via.placeholder.com/270x141?text=placeholder"/>\n                      <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n             \n                  <ion-card-content>\n                    <ion-card-title>\n                      3-Hour Phyto 5 Elements Spa Indulgence with Facial and Body Massage for 1 Person\n                      \n                      </ion-card-title>\n                      \n                    <p class="branding">\n                      Beauty & Wellness </p>\n                  </ion-card-content>\n                  <span class="price"><b class="realprice">$50</b><b class="discountprice">$30</b></span>\n                  <a  color="primary" small class="ios sx buynow" round mode="ios">Buy now</a>\n      \n                </ion-card>  </ion-slide>\n                <ion-slide>\n                  <ion-card text-left>\n                    <img src="https://via.placeholder.com/250x141?text=placeholder"/>\n                        <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n               \n                    <ion-card-content>\n                      <ion-card-title>\n                        3-Hour Phyto 5 Elements Spa Indulgence with Facial and Body Massage for 1 Person\n                        \n                        </ion-card-title>\n                        \n                      <p class="branding">\n                        Beauty & Wellness </p>\n                    </ion-card-content>\n                    <span class="price"><b class="realprice">$50</b><b class="discountprice">$30</b></span>\n                    <a  color="primary" small class="ios sx buynow" round mode="ios">Buy now</a>\n        \n                  </ion-card>  </ion-slide>\n      </ion-slides>\n      <button type="submit"  float-left ion-button color="primary" class="btnPrev" (click)="slidePrev()">  <ion-icon name="arrow-back"></ion-icon>\n      </button>\n                  <button type="submit" float-right ion-button color="primary" class="btnNext" (click)="nextSlide()">  <ion-icon name="arrow-forward"></ion-icon>\n                  </button>\n    </ion-col>\n  </ion-row>\n\n</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc1\acidpark\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewproductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(37);
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
 * Generated class for the NewproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewproductPage = /** @class */ (function () {
    function NewproductPage(route, alertCtrl, loadingCtrl, http, router, storage) {
        var _this = this;
        this.route = route;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.router = router;
        this.storage = storage;
        this.gallery = [];
        this.main = [];
        this.allc = [];
        this.subcat = [];
        this.type = 0;
        this.productid = 0;
        this.piecetrue = false;
        this.productid = this.route.snapshot.paramMap.get('ids');
        this.storage.get('categories').then(function (c) {
            _this.allc = c;
            for (var i = 0; i < c.length; i++) {
                if (c[i].main_cat == 0) {
                    _this.main.push(c[i]);
                }
            }
        });
    }
    NewproductPage.prototype.changeCategory = function ($event) {
        this.subcat = [];
        for (var i = 0; i < this.allc.length; i++) {
            if (this.allc[i].main_cat == $event) {
                this.subcat.push(this.allc[i]);
            }
        }
    };
    NewproductPage.prototype.controlpiece = function ($event) {
        this.piecetrue = true;
    };
    NewproductPage.prototype.saveProducts = function () {
        var _this = this;
        var load = this.loadingCtrl.create();
        load.present();
        this.storage.get('ID').then(function (id) {
            _this.http.post('http://localhost/assistpark/rest_api/api/new_products', JSON.stringify({
                name: _this.name,
                type: _this.type,
                category: _this.category,
                subcategory: _this.subcategory,
                tags: _this.tags,
                description: _this.description,
                id: id
            })).subscribe(function (r) {
                _this.res = r;
                _this.res = _this.res.result;
                load.dismiss();
                if (_this.res.id != 0) {
                    window.history.back();
                }
                else {
                    var alert_1 = _this.alertCtrl.create({
                        title: "Wrong!",
                        subTitle: "Please check product information",
                        buttons: ["OK!"]
                    });
                    alert_1.present();
                }
            });
        });
    };
    NewproductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewproductPage');
    };
    NewproductPage.prototype.goControl = function () {
        window.history.back();
    };
    NewproductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-newproduct',template:/*ion-inline-start:"C:\Users\pc1\acidpark\src\pages\newproduct\newproduct.html"*/'<!--\n  Generated template for the NewproductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n  <ion-navbar color="darkblue">\n    <ion-buttons start>\n    <button ion-button clear color="light" (tap)="goControl()"><ion-icon name="arrow-back"></ion-icon></button>\n  </ion-buttons>\n    <ion-title>New Product & Services</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class="container">\n    <ion-row>\n      <ion-col col-6>\n\n     \n<ion-list inset>\n  <ion-item>\n    <ion-label stacked>\n      Type\n    </ion-label>\n    <ion-select [(ngModel)]="type" interface="popover">\n      <ion-option selected value="0">Product</ion-option>\n      <ion-option value="1">Service</ion-option>\n    \n    </ion-select>\n  </ion-item>\n    <ion-item>\n    <ion-label stacked>Name</ion-label>\n    <ion-input [(ngModel)]="name" type="text"></ion-input>\n  </ion-item>\n<ion-item>\n  <ion-label stacked>\n    Category\n  </ion-label>\n  <ion-select [(ngModel)]="category" (ionChange)="changeCategory($event)">\n    <ion-option selected>\n      Choose Category\n    </ion-option>\n<ion-option *ngFor="let row of main" [value]="row.ID">\n  {{row.slug | translate}}\n</ion-option>\n\n  </ion-select>\n\n</ion-item>\n<ion-item stacked>\n  <ion-label stacked>\n    Sub Category\n  </ion-label>\n  <ion-select [(ngModel)]="subcategory" multiple="false">\n    <ion-option *ngFor="let row of subcat" [value]="row.ID">\n      {{row.slug | translate}}\n    </ion-option>\n  \n      </ion-select>\n</ion-item>\n<ion-row>\n<ion-item col-6>\n  <ion-label stacked>\n    <div>\n    Price ($)\n  </div>\n  </ion-label>\n  <ion-input type="number" step="0.1"></ion-input>\n</ion-item>\n<ion-item col-6 >\n  <ion-label stacked>\n    <div>\n    Price Type\n    <br />\n    <small>Per Piece,per tone</small>\n  </div>\n  </ion-label>\n<ion-input [class.button-ios-danger]="!piecetrue" [class.button-ios-clear]="piecetrue"  class="piece" type="text" (ionChange)="controlpiece($event)"  [(ngModel)]="prietype"></ion-input>\n\n</ion-item>\n</ion-row>\n</ion-list>\n</ion-col>\n<ion-col col-6>\n  <ion-list inset>\n \n    <ion-card class="gallery">\n    <ion-card-header>\n      Gallery\n     \n    </ion-card-header>\n    <button ion-button class="addgallery" color="dark" clear block>\n   <div>\n      <ion-icon name="add"></ion-icon><br />\n        Add Picture\n      </div>\n      </button>\n    </ion-card>\n    <ion-item>\n      <ion-label stacked>Tags\n        <br />\n        <p>For example:(antalya otel;antalya bungalov;antalya luxury)</p>\n   \n      </ion-label>\n      <ion-textarea [(ngModel)]="tags" rows=3>\n  \n      </ion-textarea>\n    </ion-item>\n</ion-list>\n</ion-col>\n<ion-col col-12 >\n  <ion-list inset>\n  <ion-item >\n    <ion-label stacked>Description</ion-label>\n    <ion-textarea rows=6 [(ngModel)]="description"></ion-textarea>\n  </ion-item>\n<button block full ion-button color="darkblue" (tap)="saveProducts()"><ion-icon name="save" mode="ios"></ion-icon>&nbsp;Save Changes</button>\n</ion-list>\n</ion-col>\n</ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc1\acidpark\src\pages\newproduct\newproduct.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], NewproductPage);
    return NewproductPage;
}());

//# sourceMappingURL=newproduct.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_category_category__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_headerc_headerc__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_segment_segment__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register_register__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_mybusiness_mybusiness__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_products_products__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_product_product__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_subtoolbar_subtoolbar__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_newproduct_newproduct__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ngx_translate_core__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ngx_translate_http_loader__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_globalization__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_newpage_newpage__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_partner_partner__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_freelancer_freelancer__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_company_company__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_services_services__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_detail_detail__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_companyprofile_companyprofile__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_companyservice_companyservice__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_companyreviews_companyreviews__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_freelancerprofile_freelancerprofile__ = __webpack_require__(333);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */] },
    { path: 'home/:country', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */] },
    { path: 'home/:country/:city', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */] },
    { path: 'category/:category', component: __WEBPACK_IMPORTED_MODULE_7__pages_category_category__["a" /* CategoryPage */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */] },
    { path: 'mybusiness', component: __WEBPACK_IMPORTED_MODULE_15__pages_mybusiness_mybusiness__["a" /* MybusinessPage */] },
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_16__pages_products_products__["a" /* ProductsPage */] },
    { path: 'product/:id', component: __WEBPACK_IMPORTED_MODULE_17__pages_product_product__["a" /* ProductPage */] },
    { path: 'product/edit/:id', component: __WEBPACK_IMPORTED_MODULE_19__pages_newproduct_newproduct__["a" /* NewproductPage */] },
    { path: 'newproduct', component: __WEBPACK_IMPORTED_MODULE_19__pages_newproduct_newproduct__["a" /* NewproductPage */] },
    { path: 'newpage', component: __WEBPACK_IMPORTED_MODULE_23__pages_newpage_newpage__["a" /* NewpagePage */] },
    { path: 'partner', component: __WEBPACK_IMPORTED_MODULE_24__pages_partner_partner__["a" /* PartnerPage */] },
    { path: 'freelancer', component: __WEBPACK_IMPORTED_MODULE_25__pages_freelancer_freelancer__["a" /* FreelancerPage */] },
    { path: 'services', component: __WEBPACK_IMPORTED_MODULE_27__pages_services_services__["a" /* ServicesPage */] },
    { path: 'detail', component: __WEBPACK_IMPORTED_MODULE_28__pages_detail_detail__["a" /* DetailPage */] },
    { path: 'companyprofile', component: __WEBPACK_IMPORTED_MODULE_29__pages_companyprofile_companyprofile__["a" /* CompanyprofilePage */] },
    { path: 'companyservice', component: __WEBPACK_IMPORTED_MODULE_30__pages_companyservice_companyservice__["a" /* CompanyservicePage */] },
    { path: 'companyreviews', component: __WEBPACK_IMPORTED_MODULE_31__pages_companyreviews_companyreviews__["a" /* CompanyreviewsPage */] },
    { path: 'freelancerprofile', component: __WEBPACK_IMPORTED_MODULE_32__pages_freelancerprofile_freelancerprofile__["a" /* FreelancerprofilePage */] },
    { path: 'company', component: __WEBPACK_IMPORTED_MODULE_26__pages_company_company__["a" /* CompanyPage */] }
];
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_21__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_8__components_headerc_headerc__["a" /* HeadercComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_segment_segment__["a" /* SegmentComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_mybusiness_mybusiness__["a" /* MybusinessPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_18__components_subtoolbar_subtoolbar__["a" /* SubtoolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_newproduct_newproduct__["a" /* NewproductPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_partner_partner__["a" /* PartnerPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_freelancer_freelancer__["a" /* FreelancerPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_company_company__["a" /* CompanyPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_services_services__["a" /* ServicesPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_companyprofile_companyprofile__["a" /* CompanyprofilePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_companyservice_companyservice__["a" /* CompanyservicePage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_companyreviews_companyreviews__["a" /* CompanyreviewsPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_freelancerprofile_freelancerprofile__["a" /* FreelancerprofilePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_newpage_newpage__["a" /* NewpagePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* RouterModule */].forRoot(routes, { enableTracing: false }),
                __WEBPACK_IMPORTED_MODULE_20__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_20__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_12__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], { animate: false, mode: 'ios' }, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_mybusiness_mybusiness__["a" /* MybusinessPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_newproduct_newproduct__["a" /* NewproductPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_newpage_newpage__["a" /* NewpagePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_globalization__["a" /* Globalization */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* RouterModule */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_globalization__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(global, Translate, storage, http, platform, statusBar, splashScreen) {
        var _this = this;
        this.global = global;
        this.Translate = Translate;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.Translate.setDefaultLang('en');
            _this.Translate.use('en');
            _this.global.getPreferredLanguage()
                .then(function (res) {
                console.log(res);
                _this.Translate.setDefaultLang(res.value);
            })
                .catch(function (e) { return console.log(e); });
            storage.get('firsttime').then(function (firsttime) {
                if (firsttime != false) {
                    http.get('http://localhost/assistpark/rest_api/api/get_all').subscribe(function (r) {
                        _this.resp = r;
                        _this.resp = _this.resp.result;
                        storage.set('countries', _this.resp.countries);
                        storage.set('categories', _this.resp.categories);
                        //  storage.set('city',this.resp.cities);
                        storage.set('firsttime', false);
                    });
                }
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\pc1\acidpark\src\app\app.html"*/'\n         <ion-menu [content]="content">\n            \n            <ion-content padding>\n              <a href="#"   color="primary" small class="ios xs menulink"  clear round mode="ios">Bir assist isteyin</a>\n              <a (tap)="goPartner()"  color="primary" small class="ios xs menulink"  clear round mode="ios">Partner olun</a>\n          \n              <a  (tap)="goLogin()" color="primary" small class="ios xs menulink"  clear round mode="ios">Oturum açın</a>\n              <a  (tap)="goRegister()"  color="primary" small class="ios sx register" round mode="ios">Kaydol</a>\n            </ion-content>\n            \n          </ion-menu>\n          <ion-nav [root]="rootPage" #content></ion-nav>\n<router-outlet></router-outlet>'/*ion-inline-end:"C:\Users\pc1\acidpark\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_native_globalization__["a" /* Globalization */], __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategoryPage = /** @class */ (function () {
    function CategoryPage() {
    }
    CategoryPage.prototype.ngOnInit = function () {
    };
    CategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoryPage');
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"C:\Users\pc1\acidpark\src\pages\category\category.html"*/'\n\n<ion-content>\n  <headerc ></headerc>\n  <ion-grid class="container">\n    <ion-row>\n      <ion-col col-md-3 col-lg-3 col-sm-hidden col-12>\n<ion-list padding >\n  <h3 style="font-size:16px;">  Talep Kategorileri</h3>\n  <ion-item class="selectb" style="margin-bottom:15px;margin-top:15px;">\n    <ion-label style="font-size: 15px;    color: #333333;    letter-spacing: -0.1px;    line-height: 24px;">Seçiniz</ion-label>\n    <ion-select [(ngModel)]="gender">\n      <ion-option value="f">Health</ion-option>\n      <ion-option value="m">Male</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item style="padding:0;">\n    <ion-searchbar style="padding: 0;" class="anasearch android md" mode="md" placeholder="Ara"></ion-searchbar>\n  </ion-item>\n  <div class="catss"> \n  <ion-item>\n    <h3>  <ion-icon name="arrow-down"></ion-icon> Reconstructive Plastic Surgery (51)</h3>\n  </ion-item>\n  <ion-item>\n    <h3>  <ion-icon name="arrow-down"></ion-icon> Dentists (45)</h3>\n  </ion-item>\n  <ion-item>\n    <h3>  <ion-icon name="arrow-down"></ion-icon> Physiotherapy / Rehabilitation (28)</h3>\n  </ion-item>\n  <ion-item>\n    <h3>  <ion-icon name="arrow-down"></ion-icon> Oral and Dental Health (31) </h3>\n  </ion-item>\n</div>\n  <div class="hr"></div>\n</ion-list>\n\n\n      </ion-col>\n      <ion-col col-md-9 col-lg-9 col-12  class="lastchance">\n        <ion-row>\n        <ion-col col-5>\n        <h3 style="float: left;margin-right: 20px;">Kişisel Bakım</h3>\n        <h5 style="font-size: 13px;color: #999999;">  124 request found </h5>\n        </ion-col>\n \n       \n  \n         <ion-item   class="filt" >\n           <ion-label style="text-align: right;  ">\n         Show filters\n        </ion-label>\n          <ion-select [selectOptions]="selectOptions" class="select2" interface="popover">\n            <ion-option value="Popularity">Popularity</ion-option>\n          </ion-select>\n         </ion-item>\n      </ion-row>\n    \n        <ion-row class="heightop">\n          <ion-col col-md-4 col-lg-4 col-12 col-sm-12>\n            <ion-card text-left>\n              <ion-item class="pa13"> \n                <img src="https://via.placeholder.com/36x36?text=placeholder" alt="pp" class="ppcat" style="float: left; margin-right: 10px;">\n                <h5 class="name">Scott Hardy</h5>\n                <h5 class="talep">Güzellik  </h5>\n              </ion-item>\n\n              <ion-card-content>\n                <p class="descs">\n                  Her hafta cumartesi ev temizliğine gelmek isteyene 100 TL ücret öderim.\n                </p>\n                <h5 class="talepkonum">Fatih, İstanbul  </h5>        \n                <h5 class="talepsaat">1 hour ago  </h5>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n          <ion-col col-md-4 col-lg-4 col-12 col-sm-12>\n            <ion-card text-left>\n              <ion-item class="pa13"> \n                <img src="https://via.placeholder.com/36x36?text=placeholder" alt="pp" class="ppcat" style="float: left; margin-right: 10px;">\n                <h5 class="name">Scott Hardy</h5>\n                <h5 class="talep">Güzellik  </h5>\n              </ion-item>\n          <img src="https://via.placeholder.com/250x141?text=placeholder"/>\n              <ion-card-content>\n                <p class="descs">\n                  Her hafta cumartesi ev temizliğine gelmek isteyene 100 TL ücret öderim.\n                </p>\n                <h5 class="talepkonum">Fatih, İstanbul  </h5>        \n                <h5 class="talepsaat">1 hour ago  </h5>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        \n          <ion-col col-md-4 col-lg-4 col-12 col-sm-12>\n            <ion-card text-left>\n              <ion-item class="pa13"> \n                <img src="https://via.placeholder.com/36x36?text=placeholder" alt="pp" class="ppcat" style="float: left; margin-right: 10px;">\n                <h5 class="name">Scott Hardy</h5>\n                <h5 class="talep">Güzellik  </h5>\n              </ion-item>\n\n              <ion-card-content>\n                <p class="descs">\n                  Her hafta cumartesi ev temizliğine gelmek isteyene 100 TL ücret öderim.\n                </p>\n                <h5 class="talepkonum">Fatih, İstanbul  </h5>        \n                <h5 class="talepsaat">1 hour ago  </h5>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n          <ion-col col-md-4 col-lg-4 col-12 col-sm-12>\n            <ion-card text-left>\n              <ion-item class="pa13"> \n                <img src="https://via.placeholder.com/36x36?text=placeholder" alt="pp" class="ppcat" style="float: left; margin-right: 10px;">\n                <h5 class="name">Scott Hardy</h5>\n                <h5 class="talep">Güzellik  </h5>\n              </ion-item>\n          <img src="https://via.placeholder.com/250x141?text=placeholder"/>\n              <ion-card-content>\n                <p class="descs">\n                  Her hafta cumartesi ev temizliğine gelmek isteyene 100 TL ücret öderim.\n                </p>\n                <h5 class="talepkonum">Fatih, İstanbul  </h5>        \n                <h5 class="talepsaat">1 hour ago  </h5>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc1\acidpark\src\pages\category\category.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadercComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(33);
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
 * Generated class for the HeadercComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var HeadercComponent = /** @class */ (function () {
    function HeadercComponent(loadingCtrl, storage, router) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.router = router;
        this.id = 0;
        this.maincat = [];
        this.subcat = [];
        this.backs = 0;
        this.storage.get('ID').then(function (id) {
            if (id > 0) {
                _this.id = id;
            }
        });
        this.storage.get('country').then(function (c) {
            console.log(c);
            if (c == undefined || c == null || c == "" || c.length == 0) {
                _this.country = "GLOBAL";
            }
            else {
                _this.country = c;
            }
        });
        this.storage.get('categories').then(function (c) {
            _this.categories = c;
            for (var i = 0; i < _this.categories.length; i++) {
                console.log("for ", _this.catid);
                if (_this.categories[i].main_cat == 0) {
                    _this.maincat.push(_this.categories[i]);
                }
                else if (_this.categories[i].main_cat == _this.catid) {
                    console.log(_this.categories[i]);
                    _this.subcat.push(_this.categories[i]);
                }
            }
        });
    }
    HeadercComponent.prototype.countryChange = function ($event) {
        var _this = this;
        var load = this.loadingCtrl.create();
        load.present();
        this.storage.set('country', $event).then(function () {
            _this.router.navigateByUrl("home/" + $event);
            load.dismiss();
        });
    };
    HeadercComponent.prototype.countryIcon = function () {
        setTimeout(function () {
            var t = document.getElementsByClassName('select-popover')[0].children[1].children[1].children[0].children[1].children[0].children;
            console.log(t);
            var pcd = t;
            console.log(pcd);
            for (var i = 0; i < pcd.length; i++) {
                var item = pcd[i].children[0].children[1];
                var content = pcd[i].children[0].children[0];
                var flag = item.getAttribute('ng-reflect-value');
                var text = content.children[0].textContent;
                if (text == "Global") {
                    content.children[0].innerHTML = "<img src='assets/imgs/globe.svg' alt='' > <span>" + text + "</span>";
                }
                else {
                    content.children[0].innerHTML = "<img src='https://restcountries.eu/data/" + flag.toLocaleLowerCase() + ".svg' /> <span>" + text + "</span>";
                }
            }
        }, 10);
    };
    HeadercComponent.prototype.ngAfterViewInit = function () {
        this.catidm = this.catid;
        // alert(this.catid);
    };
    HeadercComponent.prototype.topicselect = function (id) {
        this.router.navigateByUrl('/category/' + id);
        //  this.navCtrl.push(CategoryPage,{id:id},{animate:false});
    };
    HeadercComponent.prototype.comeback = function () {
        this.router.navigateByUrl('/home');
    };
    HeadercComponent.prototype.goRegister = function () {
        this.router.navigateByUrl('/register');
    };
    HeadercComponent.prototype.goLogin = function () {
        this.router.navigateByUrl('/login');
    };
    HeadercComponent.prototype.goPartner = function () {
        this.router.navigateByUrl('/partner');
    };
    HeadercComponent.prototype.goControl = function () {
        this.router.navigateByUrl('/mybusiness');
    };
    HeadercComponent.prototype.clear = function () {
        this.storage.clear();
        this.router.navigateByUrl('/login');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("catid"),
        __metadata("design:type", Object)
    ], HeadercComponent.prototype, "catid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('profile'),
        __metadata("design:type", Object)
    ], HeadercComponent.prototype, "profile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('back'),
        __metadata("design:type", Object)
    ], HeadercComponent.prototype, "back", void 0);
    HeadercComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'headerc',template:/*ion-inline-start:"C:\Users\pc1\acidpark\src\components\headerc\headerc.html"*/'\n  \n<!-- <ion-header>\n  <ion-toolbar color="darkblue">\n    <ion-item start class="country-select md">\n      <ion-select id="countries" interface="popover" [(ngModel)]="country" (tap)="countryIcon()" (ionChange)="countryChange($event)">\n        <ion-option value="GLOBAL"><ion-icon name="globe"></ion-icon>Global</ion-option>\n        <ion-option value="TUR">Turkey</ion-option>\n        <ion-option value="CHN">China</ion-option>\n      </ion-select>\n    </ion-item>\n <ion-buttons *ngIf="back == true" start>\n  <button ion-button clear color="light" (tap)="goControl()"><ion-icon name="arrow-back"></ion-icon></button>\n  \n </ion-buttons>\n<ion-buttons end *ngIf="id == 0">\n  <button ion-button clear (tap)="goRegister()">Free Sign Up</button> <b class="sp">/</b>\n  <button ion-button clear (tap)="goLogin()"> Sign In</button>\n</ion-buttons>\n<ion-buttons end *ngIf="id != 0">\n  <button ion-button clear (tap)="goControl()"><ion-icon name="chatbubbles"></ion-icon> &nbsp; Mailboxes (0)</button> \n   <b class="sp">/</b>\n  <button ion-button clear (tap)="goControl()"><ion-icon name="cart"></ion-icon> &nbsp; Buyer Requests (0)</button> \n   <b class="sp">/</b>\n  <button ion-button clear (tap)="goControl()"><ion-icon name="cog"></ion-icon> &nbsp; My Business</button> \n   <b class="sp">/</b>\n\n  <button ion-button clear (tap)="clear()">Logout</button>\n</ion-buttons>\n\n  </ion-toolbar>\n  \n  \n</ion-header> -->\n\n  <div class="header " >\n    <ion-grid class="container">\n      <ion-row >\n        <ion-col col-sm-12 col-12 col-xs-12 col-md-12 col-lg-3 class="logocenter" >\n          <img src="assets/imgs/assistlogo.png" class="logo" (tap)="comeback()" tappable />\n        </ion-col>\n        <ion-col col-lg-4 col-12 col-xl-3 col-sm-12 col-md-12>\n          <ion-searchbar class="anasearch android md" mode="md" placeholder="Ara"></ion-searchbar>\n        </ion-col>\n        <ion-col col-lg-3 col-12 col-xl-6 col-sm-12 col-md-12 class="menubars">\n       <!--   <ion-buttons start>\n            <button ion-button icon-only menuToggle>\n              <ion-icon name="menu"></ion-icon>>\n            </button>\n        </ion-buttons>--> \n    <ion-item start class="country-select md">\n      <ion-select id="countries" interface="popover" [(ngModel)]="country" (tap)="countryIcon()" (ionChange)="countryChange($event)">\n        <ion-option value="TUR">Turkey</ion-option>\n        <ion-option value="CHN">China</ion-option>\n      </ion-select>\n    </ion-item>\n    <img src="assets/imgs/globe.svg" alt="" style="margin-right: 30px;">\n   \n          <a href="#"   color="primary" small class="ios xs menulink"  clear round mode="ios">Bir assist isteyin</a>\n          <a (tap)="goPartner()"  color="primary" small class="ios xs menulink"  clear round mode="ios">Partner olun</a>\n      \n          <a  (tap)="goLogin()" color="primary" small class="ios xs menulink"  clear round mode="ios">Oturum açın</a>\n          <a  (tap)="goRegister()"  color="primary" small class="ios sx register" round mode="ios">Kaydol</a>\n\n        </ion-col>\n\n      </ion-row>\n    \n    </ion-grid>\n   \n  </div>\n  <div *ngIf="profile != 1" >\n  <ion-grid class="slide" *ngIf="catidm == 0">\n    <ion-slides>\n      <ion-slide  *ngFor="let row of maincat" col-md-2 col-lg-2 col-sm-4 (tap)="topicselect(row.slug)"> \n        <ion-card text-center class="gride" tappable [style.background]="\'url(\'+row.gorsel+\')\'" style="background-size:cover !important;background-position: center;">\n          <h3>{{row.slug | translate}}</h3>\n        </ion-card>\n    </ion-slide>\n    </ion-slides>\n  </ion-grid>\n  <ion-grid class=\'container kapat\' *ngIf="catidm != 0">\n    <ion-row>\n      <ion-col (tap)="comeback()" col-md-3 col-lg-3 col-sm-12 col-12> \n        <ion-card text-center class="cats" tappable style="        background: #f7f7f7;">\n          <img src="assets/icon/request-colored.svg" />\n          <h3> Talepler</h3>\n          <h5>4322</h5>\n        </ion-card>\n      </ion-col>\n      <ion-col (tap)="comeback()" col-md-3 col-lg-3 col-sm-12 col-12> \n        <ion-card text-center class="cats" tappable >\n          <img src="assets/icon/services-colored.svg" />\n          <h3> Hizmetler</h3>\n          <h5>4322</h5>\n        </ion-card>\n      </ion-col>\n      <ion-col (tap)="comeback()" col-md-3 col-lg-3 col-sm-12 col-12> \n        <ion-card text-center class="cats" tappable >\n          <img src="assets/icon/ads.svg" />\n          <h3> İlanlar</h3>\n          <h5>4322</h5>\n        </ion-card>\n      </ion-col>\n      <ion-col (tap)="comeback()" col-md-3 col-lg-3 col-sm-12 col-12> \n        <ion-card text-center class="cats" tappable >\n          <img src="assets/icon/deals-colored.svg" />\n          <h3> Fırsatlar</h3>\n          <h5>4322</h5>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>'/*ion-inline-end:"C:\Users\pc1\acidpark\src\components\headerc\headerc.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HeadercComponent);
    return HeadercComponent;
}());

//# sourceMappingURL=headerc.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SegmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the SegmentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SegmentComponent = /** @class */ (function () {
    function SegmentComponent() {
        this.icons = "deals";
    }
    SegmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'segment',template:/*ion-inline-start:"C:\Users\pc1\acidpark\src\components\segment\segment.html"*/'<ion-segment [(ngModel)]="icons" color="secondary" class="seghome" style="margin-top:70px;margin-bottom:30px;">\n  <ion-segment-button value="deals" >\n    <ion-icon name="flame"></ion-icon> Deals of the Day\n  </ion-segment-button>\n  <ion-segment-button value="near">\n    <ion-icon name="bonfire"></ion-icon> Near you\n  </ion-segment-button>\n  <ion-segment-button value="shop">\n    <ion-icon name="bonfire"></ion-icon> Shopping\n  </ion-segment-button>\n  <ion-segment-button value="explore">\n    <ion-icon name="bonfire"></ion-icon> Explore \n  </ion-segment-button>\n</ion-segment>\n\n<div  [ngSwitch]="icons" >\n<ion-slides *ngSwitchCase="\'deals\'" slidesPerView=1 spaceBetween=0>\n  <ion-slide>\n    <ion-col col-lg-5 col-xl-5 col-md-5 col-12 class="leftblock">\n      <p class="indirim">\n         60% OFF\n      </p>\n        <ion-card-title class="slidetit">\n          Swedish Massage and Full Body Scrub for 2 People\n        </ion-card-title>\n          \n        <p class="branding">  Istanbul, Turkey </p>\n        <p class="branding"> Beauty & Wellness </p> <br>\n        <ion-col col-lg-12 col-xl-12-col-md-12 col-12 class="pricearea">\n        <span class="price"><b class="realprice">50 TL</b><b class="discountprice">30 TL</b></span>\n        <a  color="primary" small class="ios sx buynow" round mode="ios">Buy now</a> \n        </ion-col>\n      </ion-col>\n      <ion-col col-lg-7 col-xl-7 col-md-7 col-12 class="rightblock" >\n        <img style="border-radius: 20px;" src="https://via.placeholder.com/614x312?text=placeholder"/>\n    </ion-col> \n  \n  </ion-slide>\n  <ion-slide>\n    <ion-col col-lg-5 col-xl-5 col-md-5 col-12 class="leftblock">\n        <ion-card-title class="slidetit">\n          Swedish Massage and Full Body Scrub for 2 People\n        </ion-card-title>\n          \n        <p class="branding"> Istanbul, Turkey </p>\n        <p class="branding"> Beauty & Wellness </p> <br>\n        <ion-col col-lg-12 col-xl-12-col-md-12 col-12 class="pricearea">\n        <span class="price"><b class="realprice">50 TL</b><b class="discountprice">30 TL</b></span>\n        <a  color="primary" small class="ios sx buynow" round mode="ios">Buy now</a>\n        </ion-col>\n      </ion-col>\n      <ion-col col-lg-7 col-xl-7 col-md-7 col-12 class="rightblock" >\n        \n        <img style="border-radius: 20px;" src="https://via.placeholder.com/614x312?text=placeholder"/>\n\n    </ion-col> \n  \n  </ion-slide>\n\n</ion-slides>\n\n\n<ion-slides *ngSwitchCase="\'near\'" slidesPerView=1 spaceBetween=0>\n\n  <ion-slide>\n    <ion-col col-lg-5 col-xl-5 col-md-5 col-12 class="leftblock">\n        <ion-card-title class="slidetit">\n          Swedish Massage and Full Body Scrub for 2 Peoples\n        </ion-card-title>\n          \n        <p class="branding"> Istanbul, Turkey </p>\n        <p class="branding"> Beauty & Wellness </p> <br>\n        <ion-col col-lg-12 col-xl-12-col-md-12 col-12 class="pricearea">\n        <span class="price"><b class="realprice">$50</b><b class="discountprice">$30</b></span>\n        <a  color="primary" small class="ios sx buynow" round mode="ios">Buy now</a>\n        </ion-col>\n      </ion-col>\n      <ion-col col-lg-7 col-xl-7 col-md-7 col-12 class="rightblock" >\n        \n        <img style="border-radius: 20px;" src="https://via.placeholder.com/614x312?text=placeholder"/>\n\n    </ion-col> \n  \n  </ion-slide>\n  <ion-slide>\n    <ion-col col-lg-5 col-xl-5 col-md-5 col-12 class="leftblock">\n        <ion-card-title class="slidetit">\n          Swedish Massage and Full Body Scrub for 2 People\n        </ion-card-title>\n          \n        <p class="branding"> Istanbul, Turkey </p>\n        <p class="branding"> Beauty & Wellness </p> <br>\n        <ion-col col-lg-12 col-xl-12-col-md-12 col-12 class="pricearea">\n        <span class="price"><b class="realprice">$50</b><b class="discountprice">$30</b></span>\n        <a  color="primary" small class="ios sx buynow" round mode="ios">Buy now</a>\n        </ion-col>\n      </ion-col>\n    <ion-col col-lg-7 col-xl-7 col-md-7 col-12 class="rightblock" >\n        \n      <img style="border-radius: 20px;" src="https://via.placeholder.com/614x312?text=placeholder"/>\n\n    </ion-col> \n  \n  </ion-slide>\n</ion-slides>\n\n</div>'/*ion-inline-end:"C:\Users\pc1\acidpark\src\components\segment\segment.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SegmentComponent);
    return SegmentComponent;
}());

//# sourceMappingURL=segment.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(19);
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
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(router, alertCtrl, loadctrl, http, storage) {
        var _this = this;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.loadctrl = loadctrl;
        this.http = http;
        this.storage = storage;
        this.password = null;
        this.country_selected = true;
        this.company_information_ok = true;
        this.user_information_ok = true;
        this.city = null;
        this.name = null;
        this.email = null;
        this.position = null;
        this.countries = [];
        this.address = null;
        this.employees = null;
        this.storage.get('countries')
            .then(function (c) {
            _this.countries = c;
        });
    }
    RegisterPage.prototype.finish = function () {
        var _this = this;
        var load = this.loadctrl.create({ content: "Please wait..." });
        load.present();
        this.http.post('http://localhost/assistpark/rest_api/api/register_company', JSON.stringify({ company: this.company, country: this.country,
            city: this.city, address: this.address, employees: this.employees,
            name: this.name, position: this.position, email: this.email, password: this.password }))
            .subscribe((function (r) {
            load.dismiss();
            _this.res = r;
            _this.res = _this.res.result;
            if (_this.res.ID != 0) {
                var alert_1 = _this.alertCtrl.create({
                    title: "Register success!",
                    subTitle: 'Register successfull!',
                    buttons: ["Go Login"]
                });
                alert_1.present();
                _this.router.navigateByUrl('/login');
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: "Wrong!",
                    subTitle: 'Please check this informations',
                    buttons: ["Try Again"]
                });
                alert_2.present();
            }
        }));
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.next = function () {
        this.slides.slideNext();
    };
    RegisterPage.prototype.geri = function () {
        this.router.navigateByUrl('/home');
    };
    RegisterPage.prototype.chooseCountry = function (country) {
        this.country = country;
        this.country_selected = false;
    };
    RegisterPage.prototype.control = function () {
        if (this.company.length > 3 && this.city != null && this.address != null && this.employees != null) {
            this.company_information_ok = false;
        }
        else {
            this.company_information_ok = true;
        }
    };
    RegisterPage.prototype.control2 = function () {
        if (this.name.length > 3 && this.email.length > 5 && this.password.length > 3 && this.position != null) {
            this.user_information_ok = false;
        }
        else {
            this.user_information_ok = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */])
    ], RegisterPage.prototype, "slides", void 0);
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\pc1\acidpark\src\pages\register\register.html"*/'\n<ion-content>\n  <ion-grid>\n  \n    <ion-row>\n  <ion-col col-lg-7 col-md-7 col-sm-hidden class="registerbg">\n    <button ion-button iconOnly clear color="light" (tap)="geri()">\n       <img src="assets/imgs/assistlogo.png" style="height: 30px;margin: 20px; margin-top: 40px;" class="logo" />\n    </button>\n    <div class="description" style="text-align: center;">\n    <img src="assets/imgs/register.png" alt="register">\n  \n  </div>\n  </ion-col>\n        <ion-col col-12 col-lg-5 col-md-12 col-sm-12 class="registeralan">\n  \n            <ion-item class="registers">\n              <ion-label class="register-title" >Sign up with</ion-label>\n            </ion-item>\n            <ion-item >\n              <img class="i1" src="assets/imgs/f1.png" alt="">\n              <img class="i1" src="assets/imgs/f2.png" alt="">\n              <img class="i1" src="assets/imgs/f3.png" alt="">\n            </ion-item> \n          <ion-item>\n            <p class="formbelow"> <span style="background:white; padding: 0 14px;"> Or fill the form below </span> </p>\n          </ion-item>\n\n          \n                <ion-item   >\n                  <ion-label  >Full Name</ion-label>\n                </ion-item>\n\n                  <ion-item >\n      <ion-input type="text" (ionChange)=\'control()\' [(ngModel)]="company" placeholder="Full Name" ></ion-input>\n      </ion-item>\n\n              <ion-item >\n                <ion-label >Email</ion-label>\n          </ion-item>\n          <ion-item >\n          <ion-input type="text" (ionChange)=\'control2()\' [(ngModel)]="email" placeholder="youremail@gmail.com" ></ion-input>\n          </ion-item>\n\n          <ion-item >\n            <ion-label >Password</ion-label> \n          </ion-item>\n          <ion-item >\n\n          <ion-input type="password" (ionChange)=\'control2()\' [(ngModel)]="password"  placeholder="6 or more characters"></ion-input>\n          </ion-item>\n          <ion-item >\n            <p class="policy">You agree to the Assistpark User Agreement, Privacy Policy and <br> Cookie Policy</p>\n          </ion-item>\n          <ion-item>\n\n          <button class="regbut" ion-button rounded color="primary" [disabled]="user_information_ok" (tap)="finish()">Agree & Sign up </button>\n  \n        </ion-item>\n  \n        <ion-item style="text-align: center;" >\n          <p class="log"> Already have an account? <span style="color: #0066FF;"> Login </span> </p>\n        </ion-item>\n  \n           \n  \n  \n  \n  \n        </ion-col>\n  \n     \n    </ion-row>\n  \n  </ion-grid>\n  </ion-content>\n<!-- \n<ion-content>\n<ion-grid>\n\n  <ion-row>\n<ion-col col-lg-6 col-md-6 col-sm-hidden class="registerbg">\n  <button ion-button iconOnly clear color="light" (tap)="geri()">\n     <img src="assets/imgs/assistlogo.png" class="logo" />\n  </button>\n  <div class="description">\n  <img src="assets/imgs/register.png" alt="register">\n\n</div>\n</ion-col>\n      <ion-col col-lg-6 col-md-6 col-sm-12 class="registeralan">\n          \n\n\n \n          \n\n          <ion-item class="registers">\n            <ion-label class="register-title" stacked>Register your new\n            \n               <ion-select interface="popover" class="membertype">\n                  <ion-option selected value="business">Business</ion-option>\n                  <ion-option value="assistant">Assistant</ion-option>\n                </ion-select>\n           \n                account</ion-label>\n              </ion-item>\n         \n\n          <ion-slides class="register-wizard" centeredSlides="false">\n            <ion-slide class="swiper-no-swiping" text-center>\n              <h3 class="register-title-2">Choose Your Country</h3>\n              \n              <ion-row class="flags">\n                <ion-col col-md-3 col-lg-3 col-sm-4 *ngFor="let row of countries" class="flag" tappable [class.active]="country == row.abv3" (tap)="chooseCountry(row.abv3)">\n                  <img  src="https://restcountries.eu/data/{{row.abv3.toLowerCase()}}.svg" />\n                </ion-col>\n           \n                <ion-col col-12>\n                  <button ion-button rounded color="primary" [disabled]="country_selected" (tap)="next()">Selected &nbsp; <ion-icon name="arrow-forward"></ion-icon></button>\n                </ion-col>\n              </ion-row>\n              \n            </ion-slide>\n            <ion-slide>\n              <h3 class="register-title-2">Company Information</h3>\n              <ion-item stacked>\n                <ion-label stacked>Company Name</ion-label>\n    <ion-input type="text" (ionChange)=\'control()\' [(ngModel)]="company" placeholder="Full Company Name" ></ion-input>\n    </ion-item>\n    <ion-item stacked>\n      <ion-label stacked>City</ion-label>\n<ion-select interface="popover" (ionChange)=\'control()\' [(ngModel)]="city">\n  <ion-option selected>Choose City</ion-option>\n  <ion-option value="Izmir">Izmir</ion-option>\n</ion-select>\n</ion-item>\n<ion-item stacked>\n  <ion-label stacked>Address</ion-label>\n<ion-textarea placeholder (ionChange)=\'control()\'  [(ngModel)]="address"></ion-textarea>\n</ion-item>\n<ion-item stacked>\n  <ion-label stacked>Employees</ion-label>\n  <ion-select [(ngModel)]="employees" interface="popover" (ionChange)=\'control()\'>\n    <ion-option selected>Choose Emplooyes</ion-option>\n    <ion-option value="1-10">1-10</ion-option>\n    <ion-option value="11-50">11-50</ion-option>\n    <ion-option value="51-100">51-100</ion-option>\n    <ion-option value="101-300">101-300</ion-option>\n    <ion-option value="301-500">301-500</ion-option>\n    <ion-option value="501+">501+</ion-option>\n  </ion-select>\n</ion-item>\n<ion-col col-12>\n  <button ion-button rounded color="primary" [disabled]="company_information_ok" (tap)="next()">Next &nbsp; <ion-icon name="arrow-forward"></ion-icon></button>\n</ion-col>\n\n            </ion-slide>\n            <ion-slide>\n              <h3 class="register-title-2">Authorized Personal Information</h3>\n              <ion-item stacked>\n                <ion-label stacked>Name Surname</ion-label>\n    <ion-input type="text" (ionChange)=\'control2()\' [(ngModel)]="name" placeholder="Enter name and surname" ></ion-input>\n    </ion-item>\n    <ion-item stacked>\n      <ion-label stacked>Position</ion-label>\n      <ion-select [(ngModel)]="position" interface="popover" (ionChange)=\'control2()\'>\n        <ion-option selected>Choose Position</ion-option>\n        <ion-option value="general">General Manager</ion-option>\n        <ion-option value="sales">Sales Manager</ion-option>\n   \n      </ion-select>\n</ion-item>\n    <ion-item stacked>\n      <ion-label stacked>E-Mail</ion-label>\n<ion-input type="text" (ionChange)=\'control2()\' [(ngModel)]="email" placeholder="Enter e-mail" ></ion-input>\n</ion-item>\n<ion-item stacked>\n  <ion-label stacked>Password</ion-label> \n<ion-input type="password" (ionChange)=\'control2()\' [(ngModel)]="password"  ></ion-input>\n</ion-item>\n<button ion-button rounded color="primary" [disabled]="user_information_ok" (tap)="finish()">Register &nbsp; <ion-icon name="arrow-forward"></ion-icon></button>\n\n            </ion-slide>\n          </ion-slides>\n\n         \n\n\n\n\n      </ion-col>\n\n   \n  </ion-row>\n\n</ion-grid>\n</ion-content>-->'/*ion-inline-end:"C:\Users\pc1\acidpark\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(33);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(router, alertCtrl, loadctrl, http, storage) {
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.loadctrl = loadctrl;
        this.http = http;
        this.storage = storage;
        this.password = null;
        this.name = null;
        this.email = null;
        this.type = 'business';
    }
    LoginPage.prototype.finish = function () {
        var _this = this;
        var load = this.loadctrl.create({ content: "Please wait..." });
        load.present();
        this.http.post('http://localhost/assistpark/rest_api/api/login', JSON.stringify({ type: this.type, email: this.email, pass: this.password }))
            .subscribe((function (r) {
            _this.res = r;
            _this.res = _this.res.result;
            if (_this.res.ID != 0) {
                _this.storage.set('ID', _this.res.ID).then(function () {
                    load.dismiss();
                    _this.router.navigateByUrl('/home');
                });
            }
            else {
                load.dismiss();
                var alert_1 = _this.alertCtrl.create({
                    title: "Wrong!",
                    subTitle: 'Please check this informations',
                    buttons: ["Try Again"]
                });
                alert_1.present();
            }
        }));
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    LoginPage.prototype.geri = function () {
        this.router.navigateByUrl('/home');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\pc1\acidpark\src\pages\login\login.html"*/'\n<ion-content>\n  <ion-grid>\n  \n    <ion-row>\n  <ion-col col-lg-7 col-md-7 col-sm-hidden class="registerbg">\n    <button ion-button iconOnly clear color="light" (tap)="geri()">\n       <img src="assets/imgs/assistlogo.png" style="height: 30px;margin: 20px; margin-top: 40px;" class="logo" />\n    </button>\n    <div class="description" style="text-align: center;">\n    <img src="assets/imgs/images_1.png" alt="login">\n  \n  </div>\n  </ion-col>\n        <ion-col col-12 col-lg-5 col-md-12 col-sm-12 class="registeralan">\n  \n            <ion-item class="registers">\n              <ion-label class="register-title" >Login with</ion-label>\n            </ion-item>\n            <ion-item >\n              <img class="i1" src="assets/imgs/f1.png" alt="">\n              <img class="i1" src="assets/imgs/f2.png" alt="">\n              <img class="i1" src="assets/imgs/f3.png" alt="">\n            </ion-item> \n          <ion-item>\n            <p class="formbelow"> <span style="background:white; padding: 0 14px;"> Or fill the form below </span> </p>\n          </ion-item>\n\n          \n\n              <ion-item >\n                <ion-label >Email</ion-label>\n          </ion-item>\n          <ion-item >\n          <ion-input type="text" (ionChange)=\'control2()\' [(ngModel)]="email" placeholder="youremail@gmail.com" ></ion-input>\n          </ion-item>\n\n          <ion-item >\n            <ion-label >Password</ion-label> \n          </ion-item>\n          <ion-item >\n\n          <ion-input type="password" (ionChange)=\'control2()\' [(ngModel)]="password"  placeholder="6 or more characters"></ion-input>\n          </ion-item>\n          <ion-item >\n            <p class="policy">Forgot password?</p>\n          </ion-item>\n          <ion-item>\n\n          <button class="regbut" ion-button rounded color="primary"  (tap)="finish()">Agree & Sign up </button>\n  \n        </ion-item>\n  \n        <ion-item style="text-align: center;" >\n          <p class="log"> Do you want to join? <span style="color: #0066FF;"> Sign up </span> </p>\n        </ion-item>\n  \n           \n  \n  \n  \n  \n        </ion-col>\n  \n     \n    </ion-row>\n  \n  </ion-grid>\n  </ion-content>\n'/*ion-inline-end:"C:\Users\pc1\acidpark\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MybusinessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
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
 * Generated class for the MybusinessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MybusinessPage = /** @class */ (function () {
    function MybusinessPage(router) {
        this.router = router;
    }
    MybusinessPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MybusinessPage');
    };
    MybusinessPage.prototype.goProducts = function () {
        this.router.navigateByUrl('products');
    };
    MybusinessPage.prototype.comeback = function () {
        this.router.navigateByUrl('home');
    };
    MybusinessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-mybusiness',template:/*ion-inline-start:"C:\Users\pc1\acidpark\src\pages\mybusiness\mybusiness.html"*/'<!--\n  Generated template for the MybusinessPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<headerc profile="1"></headerc>\n<subtoolbar type="mybusiness"></subtoolbar>\n<ion-content>\n<ion-grid >\n  <ion-row>\n    <ion-col col-lg-2 col-sm-12 col-md-2 col-xl-2 tappable>\n      <ion-card class="mycard" (tap)="goProducts()">\n        <ion-card-header>\n          Products & Services\n        </ion-card-header>\n        <ion-card-content>\n          <ion-icon name="cog"></ion-icon>\n           Products & Services Management\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col col-lg-2 col-sm-12 col-md-3 col-xl-2 tappable>\n      <ion-card class="mycard">\n        <ion-card-header>\n          Deals\n        </ion-card-header>\n        <ion-card-content>\n          <ion-icon name="pricetag"></ion-icon>\n          Mobile Application Deals Management.\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col col-lg-2 col-sm-12 col-md-3 col-xl-2 tappable>\n      <ion-card class="mycard">\n        <ion-card-header>\n         Private Buyer Requests\n        </ion-card-header>\n        <ion-card-content>\n          <ion-icon name="cart"></ion-icon>\n         \n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col col-lg-2 col-sm-12 col-md-3 col-xl-2 tappable>\n      <ion-card class="mycard">\n        <ion-card-header>\n         Team Management\n        </ion-card-header>\n        <ion-card-content>\n          <ion-icon name="people"></ion-icon>\n         \n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col col-lg-2 col-sm-12 col-md-3 col-xl-2 tappable>\n      <ion-card class="mycard">\n        <ion-card-header>\n         Business Configuration\n        </ion-card-header>\n        <ion-card-content>\n          <ion-icon name="cog"></ion-icon>\n         \n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc1\acidpark\src\pages\mybusiness\mybusiness.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], MybusinessPage);
    return MybusinessPage;
}());

//# sourceMappingURL=mybusiness.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(33);
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
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductsPage = /** @class */ (function () {
    function ProductsPage(storage, http, router) {
        var _this = this;
        this.storage = storage;
        this.http = http;
        this.router = router;
        this.type = "products";
        this.products = [];
        this.services = [];
        this.products = [];
        this.services = [];
        this.storage.get('ID').then(function (id) {
            _this.http.post('http://localhost/assistpark/rest_api/api/get_company_products', JSON.stringify({
                id: id
            })).subscribe(function (r) {
                _this.r = r;
                _this.r = _this.r.result;
                var p = _this.r.products;
                for (var i = 0; i < p.length; i++) {
                    if (p[i].type == 0) {
                        _this.products.push(p[i]);
                    }
                    else {
                        _this.services.push(p[i]);
                    }
                }
            });
            ;
        });
    }
    ProductsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductsPage');
    };
    ProductsPage.prototype.onSegmentChanged = function ($event) {
        // this.type = $event;
    };
    ProductsPage.prototype.goProduct = function (id) {
        this.router.navigateByUrl('product/' + id);
    };
    ProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-products',template:/*ion-inline-start:"C:\Users\pc1\acidpark\src\pages\products\products.html"*/'<headerc profile="1" back="true"></headerc>\n<subtoolbar type="products"></subtoolbar>\n<ion-content>\n<ion-grid>\n<ion-col col-12>\n  <ion-segment [(ngModel)]="type" color="darkblue" (ionChange)="onSegmentChanged($event)">\n    <ion-segment-button value="products">\n      Products\n    </ion-segment-button>\n    <ion-segment-button value="services">\n      Services\n    </ion-segment-button>\n   \n\n  </ion-segment>\n</ion-col>\n  <ion-col col-12>\n    <ion-list *ngIf="type == \'products\'">\n<ion-list>\n  <ion-item color="darkblue" class="head">\n    <ion-label class="sira">\n      #\n    </ion-label>\n    <ion-label>\n      Product\n    </ion-label>\n    <ion-label>\n      Category\n    </ion-label>\n    <ion-label>\n      Sub Category\n    </ion-label>\n   \n    <ion-label>\n      Created time\n    </ion-label>\n  </ion-item>\n  <ion-item *ngFor="let row of products;let i = index" (tap)="goProduct(row.ID)">\n    <ion-label class="sira" >\n      {{i+1}}\n    </ion-label>\n    <ion-label>\n      {{row.name}}\n    </ion-label>\n    <ion-label>\n      {{row.category }}\n    </ion-label>\n    <ion-label>\n      {{row.subcategory}}\n    </ion-label>\n   \n    <ion-label>\n     {{row.created_time}}\n    </ion-label>\n  </ion-item>\n\n</ion-list>\n    </ion-list>\n    <ion-list *ngIf="type == \'services\'">\n      <ion-list>\n        <ion-item color="darkblue" class="head">\n          <ion-label class="sira">\n            #\n          </ion-label>\n          <ion-label>\n            Product\n          </ion-label>\n          <ion-label>\n            Category\n          </ion-label>\n          <ion-label>\n            Sub Category\n          </ion-label>\n         \n          <ion-label>\n            Created time\n          </ion-label>\n        </ion-item>\n        <ion-item *ngFor="let row of services;let i = index" (tap)="goProduct(row.ID)">\n          <ion-label class="sira" >\n            {{i+1}}\n          </ion-label>\n          <ion-label>\n            {{row.name}}\n          </ion-label>\n          <ion-label>\n            {{row.category }}\n          </ion-label>\n          <ion-label>\n            {{row.subcategory}}\n          </ion-label>\n         \n          <ion-label>\n           {{row.created_time}}\n          </ion-label>\n        </ion-item>\n      \n      </ion-list>\n    </ion-list>\n   \n  \n  </ion-col>\n</ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\pc1\acidpark\src\pages\products\products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ProductsPage);
    return ProductsPage;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
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
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductPage = /** @class */ (function () {
    function ProductPage(router, route) {
        this.router = router;
        this.route = route;
        this.id = this.route.snapshot.paramMap.get('id');
    }
    ProductPage.prototype.ionViewDidLoad = function () {
    };
    ProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-product',template:/*ion-inline-start:"C:\Users\pc1\acidpark\src\pages\product\product.html"*/'<!--\n  Generated template for the ProductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<headerc profile="1" back="true"></headerc>\n<subtoolbar type="product"></subtoolbar>\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc1\acidpark\src\pages\product\product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ProductPage);
    return ProductPage;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubtoolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_newproduct_newproduct__ = __webpack_require__(221);
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
 * Generated class for the SubtoolbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SubtoolbarComponent = /** @class */ (function () {
    function SubtoolbarComponent(router, modalCtrl) {
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.NewproductPage = __WEBPACK_IMPORTED_MODULE_3__pages_newproduct_newproduct__["a" /* NewproductPage */];
        console.log('Hello SubtoolbarComponent Component');
        this.text = 'Hello World';
    }
    SubtoolbarComponent.prototype.comeback = function () {
        window.history.back();
    };
    SubtoolbarComponent.prototype.openModal = function (page) {
        this.router.navigateByUrl(page);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('type'),
        __metadata("design:type", Object)
    ], SubtoolbarComponent.prototype, "type", void 0);
    SubtoolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'subtoolbar',template:/*ion-inline-start:"C:\Users\pc1\acidpark\src\components\subtoolbar\subtoolbar.html"*/'<!-- Generated template for the SubtoolbarComponent component -->\n<ion-toolbar color="darkblue" class="md app-md">\n  <ion-buttons>\n    <button ion-button color="light" clear (tap)="comeback()">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n  \n    <button class="btns" ion-button *ngIf="type == \'products\'" color="dark"  (tap)="openModal(\'newproduct\')">\n      <ion-icon name="add-circle"></ion-icon> &nbsp; New Product\n    </button>\n    <button class="btns" ion-button *ngIf="type == \'product\'" color="dark"  (tap)="newProduct()">\n      <ion-icon name="save"></ion-icon> &nbsp; Save Changes\n    </button>\n  \n  </ion-buttons>\n</ion-toolbar>\n\n'/*ion-inline-end:"C:\Users\pc1\acidpark\src\components\subtoolbar\subtoolbar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ModalController */]])
    ], SubtoolbarComponent);
    return SubtoolbarComponent;
}());

//# sourceMappingURL=subtoolbar.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewpagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewpagePage = /** @class */ (function () {
    function NewpagePage() {
    }
    NewpagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewpagePage');
    };
    NewpagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-newpage',template:/*ion-inline-start:"C:\Users\pc1\acidpark\src\pages\newpage\newpage.html"*/'<!--\n  Generated template for the NewpagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>newpage</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc1\acidpark\src\pages\newpage\newpage.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], NewpagePage);
    return NewpagePage;
}());

//# sourceMappingURL=newpage.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PartnerPage = /** @class */ (function () {
    function PartnerPage() {
    }
    PartnerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PartnerPage');
    };
    PartnerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-partner',template:/*ion-inline-start:"C:\Users\pc1\acidpark\src\pages\partner\partner.html"*/'\n<ion-content>\n  <ion-grid>\n  \n    <ion-row>\n  <ion-col col-lg-5 col-md-5 col-sm-hidden col-12 class="registerbg">\n    <button ion-button iconOnly clear color="light" (tap)="geri()">\n       <img src="assets/imgs/assistlogo.png" style="height: 30px;margin: 20px; margin-top: 40px;" class="logo" />\n    </button>\n    <div class="description" style="text-align: center;">\n  \n  </div>\n  </ion-col>\n        <ion-col col-lg-5 col-md-5 col-sm-12 class="registeralan">\n          <ion-item>\n            <img style=" height: 46px; width: 46px!important;" src="assets/imgs/handshake.png" alt="partner">\n          </ion-item>\n            <ion-item class="registers">\n              <ion-label class="register-title" >Şimdi Partner olma zamanı! </ion-label>\n            </ion-item>\n         \n          <ion-item style="margin-bottom: 30px;">\n            <p class="parttext">  İsterseniz dünyada freelance bir çalışan olarak, isterseniz ekibinizle kurumsal bir işletme olarak hizmet verin veya ürünlerinizi satın. </p>\n          </ion-item>\n          <ion-item  style="margin-bottom: 20px;">\n            <ion-icon name="arrow-down" style="float: left;margin-right: 17px;"></ion-icon>  <p class="why">Neden bir freelancer olmalıyım?</p>\n          </ion-item>\n          <ion-item style="margin-bottom: 50px;">\n            <ion-icon name="arrow-down"  style="float: left;margin-right: 17px;"></ion-icon>  <p class="why">Neden bir firma hesabım olmalı?</p>\n          </ion-item>\n          <ion-item>\n\n<button class="regbut"  color="primary"  (tap)="goFreelancer()"> <ion-icon name="person-add" style="margin-right: 20px;"></ion-icon> Freelancer olarak katılın   \n </button>\n\n        </ion-item>\n  \n        <ion-item  >\n          <button class="regbut"  color="primary"  (tap)="finish()"> <ion-icon name="people"  style="margin-right: 20px;"></ion-icon> Firmanız ve ekibinizle katılın  \n          </button>\n        </ion-item>\n  \n           \n  \n  \n  \n  \n        </ion-col>\n  \n     \n    </ion-row>\n  \n  </ion-grid>\n  </ion-content>\n'/*ion-inline-end:"C:\Users\pc1\acidpark\src\pages\partner\partner.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], PartnerPage);
    return PartnerPage;
}());

//# sourceMappingURL=partner.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FreelancerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FreelancerPage = /** @class */ (function () {
    function FreelancerPage() {
    }
    FreelancerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FreelancerPage');
    };
    FreelancerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-freelancer',template:/*ion-inline-start:"C:\Users\pc1\acidpark\src\pages\freelancer\freelancer.html"*/'\n<ion-content>\n  <ion-grid>\n  \n    <ion-row>\n  <ion-col col-lg-5 col-md-5 col-sm-hidden class="registerbg">\n    <button ion-button iconOnly clear color="light" (tap)="geri()">\n       <img src="assets/imgs/assistlogo.png" style="height: 30px;margin: 20px; margin-top: 40px;" class="logo" />\n    </button>\n    <div class="description" style="text-align: center;">\n  \n  </div>\n  </ion-col>\n        <ion-col col-12 col-lg-7 col-md-12 col-sm-12 class="registeralan">\n          <ion-item>\n            <img style=" height: 46px; width: 46px!important;" src="assets/imgs/freelance.png" alt="partner">\n          </ion-item>\n            <ion-item class="registers">\n              <ion-label class="register-title" >Freelancer ol</ion-label>\n            </ion-item>\n            <ion-item >\n              <img class="i1" src="assets/imgs/f1.png" alt="">\n              <img class="i1" src="assets/imgs/f2.png" alt="">\n              <img class="i1" src="assets/imgs/f3.png" alt="">\n            </ion-item> \n          <ion-item>\n            <p class="formbelow"> <span style="background:white; padding: 0 14px;"> Or fill the form below </span> </p>\n          </ion-item>\n\n          \n                <ion-item   >\n                  <ion-label  >Full Name</ion-label>\n                </ion-item>\n\n                  <ion-item >\n      <ion-input type="text" (ionChange)=\'control()\' [(ngModel)]="company" placeholder="Full Name" ></ion-input>\n      </ion-item>\n\n              <ion-item >\n                <ion-label >Email</ion-label>\n          </ion-item>\n          <ion-item >\n          <ion-input type="text" (ionChange)=\'control2()\' [(ngModel)]="email" placeholder="youremail@gmail.com" ></ion-input>\n          </ion-item>\n\n          <ion-item >\n            <ion-label >Password</ion-label> \n          </ion-item>\n          <ion-item >\n\n          <ion-input type="password" (ionChange)=\'control2()\' [(ngModel)]="password"  placeholder="6 or more characters"></ion-input>\n          </ion-item>\n          <ion-item >\n            <p class="policy">You agree to the Assistpark User Agreement, Privacy Policy and <br> Cookie Policy</p>\n          </ion-item>\n          <ion-item>\n\n          <button class="regbut" ion-button rounded color="primary" [disabled]="user_information_ok" (tap)="finish()">Agree & Sign up </button>\n  \n        </ion-item>\n  \n        <ion-item style="text-align: center;" >\n          <p class="log"> Already have an account? <span style="color: #0066FF;"> Login </span> </p>\n        </ion-item>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n  </ion-content>'/*ion-inline-end:"C:\Users\pc1\acidpark\src\pages\freelancer\freelancer.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], FreelancerPage);
    return FreelancerPage;
}());

//# sourceMappingURL=freelancer.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompanyPage = /** @class */ (function () {
    function CompanyPage() {
    }
    CompanyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompanyPage');
    };
    CompanyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-company',template:/*ion-inline-start:"C:\Users\pc1\acidpark\src\pages\company\company.html"*/'\n<ion-content>\n  <ion-grid>\n  \n    <ion-row>\n  <ion-col col-lg-5 col-md-5 col-sm-hidden class="registerbg">\n    <button ion-button iconOnly clear color="light" (tap)="geri()">\n       <img src="assets/imgs/assistlogo.png" style="height: 30px;margin: 20px; margin-top: 40px;" class="logo" />\n    </button>\n    <div class="description" style="text-align: center;">\n  \n  </div>\n  </ion-col>\n        <ion-col col-12 col-lg-7 col-md-12 col-sm-12 class="registeralan">\n          <ion-item>\n            <img style=" height: 46px; width: 46px!important;" src="assets/imgs/office.png" alt="partner">\n          </ion-item>\n            <ion-item class="registers">\n              <ion-label class="register-title" >İşletmenizi Assistpark yapın</ion-label>\n            </ion-item>\n\n\n          \n                <ion-item   >\n                  <ion-label  >Marka adınız</ion-label>\n                </ion-item>\n\n                  <ion-item >\n      <ion-input type="text" (ionChange)=\'control()\' [(ngModel)]="company" placeholder="Apple" ></ion-input>\n      </ion-item>\n\n              <ion-item >\n                <ion-label >Ülke</ion-label>\n          </ion-item>\n          <ion-item >\n          <ion-input type="text" (ionChange)=\'control2()\' [(ngModel)]="email" placeholder="youremail@gmail.com" ></ion-input>\n          </ion-item>\n\n       \n       \n          <ion-list style="margin:0;">\n<ion-item style="    border: 0;">\n <ion-label class="policy">           Remote ve global çalışan bir işletmeyseniz seçiniz.</ion-label>     <ion-checkbox [(ngModel)]="pepperoni"></ion-checkbox>\n</ion-item>\n          </ion-list>\n          <ion-item>\n\n          <button class="regbut" ion-button rounded color="primary" [disabled]="user_information_ok" (tap)="finish()">Sonraki adım </button>\n  \n        </ion-item>\n  \n        </ion-col>\n    </ion-row>\n  </ion-grid>\n  </ion-content>'/*ion-inline-end:"C:\Users\pc1\acidpark\src\pages\company\company.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], CompanyPage);
    return CompanyPage;
}());

//# sourceMappingURL=company.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesPage = /** @class */ (function () {
    function ServicesPage() {
    }
    ServicesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicesPage');
    };
    ServicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-services',template:/*ion-inline-start:"C:\Users\pc1\acidpark\src\pages\services\services.html"*/'<ion-content>\n  <headerc ></headerc>\n  <ion-grid class="container">\n    <ion-row>\n      <ion-col col-md-3 col-lg-3 col-12 col-sm-hidden>\n<ion-list padding >\n  <h3 style="font-size:16px;">  Talep Kategorileri</h3>\n  <ion-item class="selectb" style="margin-bottom:15px;margin-top:15px;">\n    <ion-label style="font-size: 15px;    color: #333333;    letter-spacing: -0.1px;    line-height: 24px;">Seçiniz</ion-label>\n    <ion-select [(ngModel)]="gender">\n      <ion-option value="f">Health</ion-option>\n      <ion-option value="m">Male</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item style="padding:0;">\n    <ion-searchbar style="padding: 0;" class="anasearch android md" mode="md" placeholder="Ara"></ion-searchbar>\n  </ion-item>\n  <div class="catss"> \n  <ion-item>\n    <h3>  <ion-icon name="arrow-down"></ion-icon> Reconstructive Plastic Surgery (51)</h3>\n  </ion-item>\n  <ion-item>\n    <h3>  <ion-icon name="arrow-down"></ion-icon> Dentists (45)</h3>\n  </ion-item>\n  <ion-item>\n    <h3>  <ion-icon name="arrow-down"></ion-icon> Physiotherapy / Rehabilitation (28)</h3>\n  </ion-item>\n  <ion-item>\n    <h3>  <ion-icon name="arrow-down"></ion-icon> Oral and Dental Health (31) </h3>\n  </ion-item>\n</div>\n  <div class="hr"></div>\n</ion-list>\n\n\n      </ion-col>\n      <ion-col col-md-9 col-lg-9 col-12  class="lastchance">\n        <ion-row>\n        <ion-col col-12 col-md-5 col-lg-5>\n        <h3 style="float: left;margin-right: 20px;">Kişisel Bakım</h3>\n        <h5 style="font-size: 13px;color: #999999;">  124 request found </h5>\n        </ion-col>\n \n       \n  \n         <ion-item   class="filt" >\n           <ion-label style="text-align: right;  ">\n         Show filters\n        </ion-label>\n          <ion-select [selectOptions]="selectOptions" class="select2" interface="popover">\n            <ion-option value="Popularity">Popularity</ion-option>\n          </ion-select>\n         </ion-item>\n        </ion-row>\n    \n        <ion-row class="heightop">\n          <ion-col col-12 col-md-4 col-lg-4> \n            <ion-card text-left>\n              <img src="https://via.placeholder.com/270x141?text=placeholder"/>\n                  <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n         \n              <ion-card-content>\n                <ion-card-title>\n                  3-Hour Phyto 5 Elements Spa Indulgence with Facial and Body Massage for 1 Person\n                  \n                  </ion-card-title>\n                  \n                <p class="branding">\n                  Beauty & Wellness </p>\n              </ion-card-content>\n              <a  color="primary" small class="ios sx buynow" round mode="ios" style="margin-left: 16px;">Request an offer</a>\n  \n            </ion-card>\n          </ion-col>\n          <ion-col col-12 col-md-4 col-lg-4>\n          <ion-card text-left>\n            <img src="https://via.placeholder.com/270x141?text=placeholder"/>\n                <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n       \n            <ion-card-content>\n              <ion-card-title>\n                3-Hour Phyto 5 Elements Spa Indulgence with Facial and Body Massage for 1 Person\n                \n                </ion-card-title>\n                \n              <p class="branding">\n                Beauty & Wellness </p>\n            </ion-card-content>\n            <span class="price"><b class="realprice">$50</b><b class="discountprice">$30</b></span>\n            <a  color="primary" small class="ios sx buynow" round mode="ios">Buy now</a>\n\n          </ion-card>\n        </ion-col>\n        <ion-col col-12 col-md-4 col-lg-4>\n          <ion-card text-left>\n            <img src="https://via.placeholder.com/270x141?text=placeholder"/>\n                <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n       \n            <ion-card-content>\n              <ion-card-title>\n                3-Hour Phyto 5 Elements Spa Indulgence with Facial and Body Massage for 1 Person\n                \n                </ion-card-title>\n                \n              <p class="branding">\n                Beauty & Wellness </p>\n            </ion-card-content>\n            <a  color="primary" small class="ios sx buynow" round mode="ios" style="margin-left: 16px;">Request an offer</a>\n\n          </ion-card>\n        </ion-col>\n        <ion-col col-12 col-md-4 col-lg-4>\n        <ion-card text-left>\n          <img src="https://via.placeholder.com/270x141?text=placeholder"/>\n              <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n     \n          <ion-card-content>\n            <ion-card-title>\n              3-Hour Phyto 5 Elements Spa Indulgence with Facial and Body Massage for 1 Person\n              \n              </ion-card-title>\n              \n            <p class="branding">\n              Beauty & Wellness </p>\n          </ion-card-content>\n          <span class="price"><b class="realprice">$50</b><b class="discountprice">$30</b></span>\n          <a  color="primary" small class="ios sx buynow" round mode="ios">Buy now</a>\n\n        </ion-card>\n         </ion-col>\n        <ion-col col-12 col-md-4 col-lg-4>\n          <ion-card text-left>\n            <img src="https://via.placeholder.com/270x141?text=placeholder"/>\n                <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n      \n            <ion-card-content>\n              <ion-card-title>\n                3-Hour Phyto 5 Elements Spa Indulgence with Facial and Body Massage for 1 Person\n                \n                </ion-card-title>\n                \n              <p class="branding">\n                Beauty & Wellness </p>\n            </ion-card-content>\n            <a  color="primary" small class="ios sx buynow" round mode="ios" style="margin-left: 16px;">Request an offer</a>\n\n          </ion-card>\n        </ion-col>\n          <ion-col col-12 col-md-4 col-lg-4>\n          <ion-card text-left>\n            <img src="https://via.placeholder.com/270x141?text=placeholder"/>\n                <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n      \n            <ion-card-content>\n              <ion-card-title>\n                3-Hour Phyto 5 Elements Spa Indulgence with Facial and Body Massage for 1 Person\n                \n                </ion-card-title>\n                \n              <p class="branding">\n                Beauty & Wellness </p>\n            </ion-card-content>\n            <span class="price"><b class="realprice">$50</b><b class="discountprice">$30</b></span>\n            <a  color="primary" small class="ios sx buynow" round mode="ios">Buy now</a>\n\n          </ion-card>\n        </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc1\acidpark\src\pages\services\services.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], ServicesPage);
    return ServicesPage;
}());

//# sourceMappingURL=services.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DetailPage = /** @class */ (function () {
    function DetailPage() {
        this.icons = "what";
    }
    DetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailPage');
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"C:\Users\pc1\acidpark\src\pages\detail\detail.html"*/'\n\n<ion-content >\n  <headerc ></headerc>\n  <ion-grid class="container">\n    <ion-row>\n      <ion-col col-md-12 col-12 col-lg-12>\n        <ion-item class="bread"> \n          <h5>Home  <span class="ok">></span>  Singapore   <span class="ok">></span>   Massage   <span class="ok">></span> <span class="last"> Coslab</span> </h5>\n        </ion-item>\n      </ion-col>\n      <ion-col col-md-8 col-12 col-lg-8>\n        <ion-slides class="rad">\n          <ion-slide>\n            <img src="https://via.placeholder.com/720x450?text=placeholder"/>\n          </ion-slide>\n          <ion-slide>\n            <img src="https://via.placeholder.com/720x450?text=placeholder"/>\n          </ion-slide>\n          <ion-slide>\n            <img src="https://via.placeholder.com/720x450?text=placeholder"/>\n          </ion-slide>\n        </ion-slides>\n       \n      </ion-col>\n      <ion-col col-md-4 col-12 col-lg-4>\n        <ion-item class="pricearea">\n         <b class="realprice">50 TL</b> <br> <b class="discountprice">30 <span style="font-size:24px;">TL</span></b>\n         <p class="buyers">678 BOUGHT</p>\n          <a  color="primary" small class="ios sx buynoww" round mode="ios">Buy now</a>\n          <p class="wish">   <ion-icon name="create"></ion-icon> Add to wishlist</p>\n        </ion-item>  \n        \n        <ion-item class="profil">\n          <img src="https://via.placeholder.com/96x96?text=placeholder"/>\n          <h5 class="pname"> Guest Manager </h5>\n          <h5 class="pnamesub"> Aygul Muradova</h5>\n          <a  color="primary" small class="ios sx getin" round mode="ios">    <ion-icon name="send"></ion-icon> Get in touch </a>\n          <h5 class="adres"> Spanish, Italiano +2  </h5>\n        </ion-item>\n      </ion-col>\n      <ion-col col-md-8 col-12 col-lg-8 class="hidden-xs">\n        <ion-slides  slidesPerView=5 spaceBetween=3>\n          <ion-slide>\n            <ion-card text-left>\n              <img src="https://via.placeholder.com/250x141?text=placeholder"/>\n\n            </ion-card>  </ion-slide>\n            <ion-slide>\n              <ion-card text-left>\n                <img src="https://via.placeholder.com/250x141?text=placeholder"/>\n  \n              </ion-card>  </ion-slide>\n            <ion-slide>\n              <ion-card text-left>\n                <img src="https://via.placeholder.com/250x141?text=placeholder"/>\n\n              </ion-card>  </ion-slide>\n            <ion-slide>\n              <ion-card text-left>\n                <img src="https://via.placeholder.com/250x141?text=placeholder"/>\n\n              </ion-card>  </ion-slide>\n                  <ion-slide>\n                    <ion-card text-left>\n                      <img src="https://via.placeholder.com/250x141?text=placeholder"/>\n                    </ion-card>  </ion-slide>\n        </ion-slides>\n        <button type="submit"  float-left ion-button color="primary" class="btnPrev" (click)="slidePrev()">  <ion-icon name="arrow-back"></ion-icon>\n        </button>\n                    <button type="submit" float-right ion-button color="primary" class="btnNext" (click)="nextSlide()">  <ion-icon name="arrow-forward"></ion-icon>\n                    </button>\n      </ion-col>\n\n\n\n\n\n<ion-col col-12 col-lg-8 col-md-8>\n  <h1 class="contentitle"> Coslab beauth Spa</h1>\n  <h1 class="contentitle2"> 3-Hour Phyto 5 Elements Spa Indulgence with Facial and Body Massage for 1 Person </h1>\n  <h1 class="content"> Treat your skin with a refreshing facial! Made in Switzerland, the PHYTO 5 skincare line abounds with natural ingredients such as clay, algae, plankton, trace minerals, and essential oils that help soothe and renew the body. The package also includes a full body massage which stimulates the body’s lymphatic system, improves blood circulation, and body toxins removal.</h1>\n  <h1 class="resreq">  <ion-icon name="information-circle"></ion-icon>    Reservation required, read fine print for details</h1>\n\n\n\n  \n\n\n<ion-segment [(ngModel)]="icons" color="secondary" class="seghome" style="margin-top:70px;margin-bottom:0px;">\n  <ion-segment-button value="what" >\n    What you get\n    </ion-segment-button>\n  <ion-segment-button value="rez">\n Reservation\n  </ion-segment-button>\n  <ion-segment-button value="locations">\n   Locations\n  </ion-segment-button>\n  <ion-segment-button value="reviews">\n    Reviews (48) \n  </ion-segment-button>\n</ion-segment>\n\n<div  [ngSwitch]="icons" >\n<ion-item *ngSwitchCase="\'what\'"  style="padding:0;">\n    <ion-col col-lg-5 col-xl-5 col-md-5 col-12 class="leftblock">\n        <ion-card-title class="segtits">\n          3-hour package includes: <br>\n          •	75-min Phyto 5 Elements Facial: <br>\n          ⁃	Cleanse <br>\n          ⁃	Scrub <br>\n          ⁃	Base mask <br>\n          ⁃	Point massage <br>\n          ⁃	Face guasha <br>\n          ⁃	5 Element mask\n        </ion-card-title>\n      </ion-col>\n</ion-item>\n<ion-slides *ngSwitchCase="\'rez\'" slidesPerView=1 spaceBetween=0>\n\n  <ion-slide>\n\n  \n  </ion-slide>\n\n</ion-slides>\n\n</div>\n</ion-col>\n\n<ion-col col-12 col-md-4 col-lg-4>\n    <ion-item class="profil" style="text-align: left;">\n      <h5 class="avaible" style="margin-bottom:30px;"> Assist Partners</h5>\n     <ion-item style="padding: 0;background: transparent;">\n      <img style="margin-left: 43px;margin-right: 20px;float: left;border-radius: 24px;width: 48px;height: 48px;margin-top: -8px;" src="https://via.placeholder.com/48x48?text=placeholder"/> \n      <h3 class="postname"> Massage therapist  </h3>\n      <h3 class="postsub"> Erdem Kirmitci </h3>\n      <ion-icon name="send" class="sends"></ion-icon>\n    </ion-item>\n    <ion-item style="padding: 0;background: transparent;">\n      <img style="margin-left: 43px;margin-right: 20px;float: left;border-radius: 24px;width: 48px;height: 48px;margin-top: -8px;" src="https://via.placeholder.com/48x48?text=placeholder"/> \n      <h3 class="postname"> Customer service  </h3>\n      <h3 class="postsub"> Vincent Cain  </h3>\n      <ion-icon name="send" class="sends"></ion-icon>\n\n    </ion-item>\n    </ion-item>\n</ion-col>\n\n\n\n\n\n      <ion-col col-12 class="lastchance">\n        <h4 style="width:100%;    margin-bottom: 0px;">Similar Services  <small color="darkblue" tappable style="color:#000 !important;float:right;text-decoration: none;font-size: 15px;">View all  \n           <ion-icon style="    font-size: 16px;" name="arrow-round-forward"></ion-icon>\n        </small></h4>\n        <ion-slides  slidesPerView=4 spaceBetween=10>\n  \n          <ion-slide>\n            <ion-card text-left>\n              <img src="https://via.placeholder.com/270x141?text=placeholder"/>\n                  <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n         \n              <ion-card-content>\n                <ion-card-title>\n                  3-Hour Phyto 5 Elements Spa Indulgence with Facial and Body Massage for 1 Person\n                  \n                  </ion-card-title>\n                  \n                <p class="branding">\n                  Beauty & Wellness </p>\n              </ion-card-content>\n              <a  color="primary" small class="ios sx buynow" round mode="ios" style="margin-left: 30px;">Request an offer</a>\n  \n            </ion-card>  </ion-slide>\n  \n  \n            <ion-slide>\n              <ion-card text-left>\n                <img src="https://via.placeholder.com/270x141?text=placeholder"/>\n                    <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n           \n                <ion-card-content>\n                  <ion-card-title>\n                    3-Hour Phyto 5 Elements Spa Indulgence with Facial and Body Massage for 1 Person\n                    \n                    </ion-card-title>\n                    \n                  <p class="branding">\n                    Beauty & Wellness </p>\n                </ion-card-content>\n                <a  color="primary" small class="ios sx buynow" round mode="ios" style="margin-left: 30px;">Request an offer</a>\n  \n    \n              </ion-card>  </ion-slide>\n              <ion-slide>\n                <ion-card text-left>\n                  <img src="https://via.placeholder.com/270x141?text=placeholder"/>\n                      <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n             \n                  <ion-card-content>\n                    <ion-card-title>\n                      3-Hour Phyto 5 Elements Spa Indulgence with Facial and Body Massage for 1 Person\n                      \n                      </ion-card-title>\n                      \n                    <p class="branding">\n                      Beauty & Wellness </p>\n                  </ion-card-content>\n                  <span class="price"><b class="realprice">$50</b><b class="discountprice">$30</b></span>\n                  <a  color="primary" small class="ios sx buynow" round mode="ios">Buy now</a>\n      \n                </ion-card>  </ion-slide>\n                <ion-slide>\n                  <ion-card text-left>\n                    <img src="https://via.placeholder.com/270x141?text=placeholder"/>\n                        <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n               \n                    <ion-card-content>\n                      <ion-card-title>\n                        3-Hour Phyto 5 Elements Spa Indulgence with Facial and Body Massage for 1 Person\n                        \n                        </ion-card-title>\n                        \n                      <p class="branding">\n                        Beauty & Wellness </p>\n                    </ion-card-content>\n                    <span class="price"><b class="realprice">$50</b><b class="discountprice">$30</b></span>\n                    <a  color="primary" small class="ios sx buynow" round mode="ios">Buy now</a>\n        \n                  </ion-card>  </ion-slide>\n                  <ion-slide>\n                    <ion-card text-left>\n                      <img src="https://via.placeholder.com/250x141?text=placeholder"/>\n                          <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n                 \n                      <ion-card-content>\n                        <ion-card-title>\n                          3-Hour Phyto 5 Elements Spa Indulgence with Facial and Body Massage for 1 Person\n                          \n                          </ion-card-title>\n                          \n                        <p class="branding">\n                          Beauty & Wellness </p>\n                      </ion-card-content>\n                      <span class="price"><b class="realprice">$50</b><b class="discountprice">$30</b></span>\n                   \n                      <a  color="primary" small class="ios sx buynow" round mode="ios">Buy now</a> \n          \n                    </ion-card>  </ion-slide>\n        </ion-slides>\n \n      </ion-col>\n      <div style="clear: both;"></div>\n      <ion-col col-12 class="lastchance">\n        <h4 style="width:100%;    margin-bottom: 0px;">Offers nearby Antalya    <small color="darkblue" tappable style="color:#000 !important;float:right;text-decoration: none;font-size: 15px;">View all  \n           <ion-icon style="    font-size: 16px;" name="arrow-round-forward"></ion-icon>\n        </small></h4>\n        <ion-slides  slidesPerView=4 spaceBetween=10>\n  \n          <ion-slide>\n            <ion-card text-left>\n              <img src="https://via.placeholder.com/270x141?text=placeholder"/>\n                  <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n         \n              <ion-card-content>\n                <ion-card-title>\n                  3-Hour Phyto 5 Elements Spa Indulgence with Facial and Body Massage for 1 Person\n                  \n                  </ion-card-title>\n                  \n                <p class="branding">\n                  Beauty & Wellness </p>\n              </ion-card-content>\n              <a  color="primary" small class="ios sx buynow" round mode="ios" style="margin-left: 30px;">Request an offer</a>\n  \n            </ion-card>  </ion-slide>\n  \n  \n            <ion-slide>\n              <ion-card text-left>\n                <img src="https://via.placeholder.com/270x141?text=placeholder"/>\n                    <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n           \n                <ion-card-content>\n                  <ion-card-title>\n                    3-Hour Phyto 5 Elements Spa Indulgence with Facial and Body Massage for 1 Person\n                    \n                    </ion-card-title>\n                    \n                  <p class="branding">\n                    Beauty & Wellness </p>\n                </ion-card-content>\n                <a  color="primary" small class="ios sx buynow" round mode="ios" style="margin-left: 30px;">Request an offer</a>\n  \n    \n              </ion-card>  </ion-slide>\n              <ion-slide>\n                <ion-card text-left>\n                  <img src="https://via.placeholder.com/270x141?text=placeholder"/>\n                      <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n             \n                  <ion-card-content>\n                    <ion-card-title>\n                      3-Hour Phyto 5 Elements Spa Indulgence with Facial and Body Massage for 1 Person\n                      \n                      </ion-card-title>\n                      \n                    <p class="branding">\n                      Beauty & Wellness </p>\n                  </ion-card-content>\n                  <span class="price"><b class="realprice">$50</b><b class="discountprice">$30</b></span>\n                  <a  color="primary" small class="ios sx buynow" round mode="ios">Buy now</a>\n      \n                </ion-card>  </ion-slide>\n                <ion-slide>\n                  <ion-card text-left>\n                    <img src="https://via.placeholder.com/270x141?text=placeholder"/>\n                        <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n               \n                    <ion-card-content>\n                      <ion-card-title>\n                        3-Hour Phyto 5 Elements Spa Indulgence with Facial and Body Massage for 1 Person\n                        \n                        </ion-card-title>\n                        \n                      <p class="branding">\n                        Beauty & Wellness </p>\n                    </ion-card-content>\n                    <span class="price"><b class="realprice">$50</b><b class="discountprice">$30</b></span>\n                    <a  color="primary" small class="ios sx buynow" round mode="ios">Buy now</a>\n        \n                  </ion-card>  </ion-slide>\n                  <ion-slide>\n                    <ion-card text-left>\n                      <img src="https://via.placeholder.com/250x141?text=placeholder"/>\n                          <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n                 \n                      <ion-card-content>\n                        <ion-card-title>\n                          3-Hour Phyto 5 Elements Spa Indulgence with Facial and Body Massage for 1 Person\n                          \n                          </ion-card-title>\n                          \n                        <p class="branding">\n                          Beauty & Wellness </p>\n                      </ion-card-content>\n                      <span class="price"><b class="realprice">$50</b><b class="discountprice">$30</b></span>\n                      <a  color="primary" small class="ios sx buynow" round mode="ios">Buy now</a>\n          \n                    </ion-card>  </ion-slide>\n        </ion-slides>\n \n      </ion-col>\n      <div style="clear: both;"></div>\n    </ion-row>\n  </ion-grid>\n\n  \n\n\n\n\n\n\n\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\pc1\acidpark\src\pages\detail\detail.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompanyprofilePage = /** @class */ (function () {
    function CompanyprofilePage() {
    }
    CompanyprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompanyprofilePage');
    };
    CompanyprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-companyprofile',template:/*ion-inline-start:"C:\Users\pc1\acidpark\src\pages\companyprofile\companyprofile.html"*/'<ion-content >\n  <headerc ></headerc>\n  <ion-grid class="container">\n    <ion-row>\n      <ion-col col-md-12 col-12 col-lg-12 col-12>\n        <ion-item class="bread"> \n          <h5>Home  <span class="ok">></span>  Partners   <span class="ok">></span>  <span class="last"> Coslab Beauth Spa</span> </h5>\n        </ion-item>\n      </ion-col>\n      <ion-col col-md-8 col-8 col-lg-8 col-12>\n            <img class="cover" src="https://via.placeholder.com/720x271?text=Coslab"/>\n            <img class="profilpic" src="https://via.placeholder.com/128x128?text=Coslab"/>\n          \n      </ion-col>\n      <ion-col col-md-4 col-4 col-lg-4 col-12>\n        <ion-item class="profil">\n          <h5 class="avaible"> Available Assist Partners </h5>\n          <img src="https://via.placeholder.com/56x56?text=placeholder"/>\n          <img src="https://via.placeholder.com/56x56?text=placeholder"/>\n          <img src="https://via.placeholder.com/56x56?text=placeholder"/>\n          <img src="https://via.placeholder.com/56x56?text=placeholder"/>\n          <img src="https://via.placeholder.com/56x56?text=placeholder"/>\n          <h5 class="pnamesub">English, Turkish, Spanish +3 other languages</h5>\n          <a  color="primary" small class="ios sx getin" round mode="ios">See partners </a>\n        </ion-item>\n      <h5 style="font-size: 13px;text-align: center;      color: #000000;">Do you want to be a partner?</h5>\n\n      </ion-col>\n      <ion-col col-md-2 col-lg-2 col-12></ion-col>\n      <ion-col col-md-6 col-lg-6 col-12 style="text-align:right">\n        <h3 class="combname">Coslab Beauty Spa </h3>\n        <h3 class="compcat">Beauty & Wellness  </h3>\n        <h3 class="compcat">Available 6 locations  </h3>\n        <a  color="primary" small class="ios sx follow" round mode="ios">  <ion-icon name="checkmark"></ion-icon> Following</a>\n      </ion-col>\n      <ion-col col-md-4 col-4></ion-col>\n \n\n          \n    </ion-row>\n  </ion-grid>\n  <ion-grid class="container-fluid" style="margin: 30px 0;">\n    <ion-row>\n      <ion-col col-12 col-md-12 col-lg-12 class="centerall" >\n        <ion-card text-center class="cats" tappable >\n          <img src="assets/icon/news-colored.svg" /> \n          <h3>Assistline</h3>\n        </ion-card>\n        <ion-card text-center class="cats" tappable >\n          <img src="assets/icon/services-colored.svg" />\n          <h3>Services</h3>\n        </ion-card>\n        <ion-card text-center class="cats" tappable >\n          <img src="assets/icon/ads.svg" />\n          <h3>Deals</h3>\n        </ion-card>\n        <ion-card text-center class="cats" tappable >\n          <img src="assets/icon/user-reviews-colored.svg" />\n          <h3>Reviews</h3>\n        </ion-card>\n        <ion-card text-center class="cats" tappable >\n          <img src="assets/icon/about-colored.svg" />\n          <h3>About</h3>\n        </ion-card>  \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-grid class="container">\n    <ion-row>\n     <ion-col col-md-6 col-6 col-lg-6  col-12>\n       <h1 class="share">Bir deneyim paylaş</h1>\n        <ion-item class="byar">\n          <img style=" float: left; border-radius: 8px; width:unset!important; border: 1px solid #efefef;" src="https://via.placeholder.com/48x48?text=placeholder"/> \n          <h3 class="foto">  <ion-icon name="photos"></ion-icon> Fotoğraf Ekleyin</h3>\n          <h3 class="foto">  <ion-icon name="play"></ion-icon> Video Ekleyin</h3>\n        </ion-item>\n            <ion-textarea [(ngModel)]="message" type="text" placeholder="Ne düşünüyorsun? "></ion-textarea>\n\n\n      <ion-card class="post">\n        <h1><b>Coslab</b> bir yazıyı paylaştı</h1>\n\n        <img style="margin-left: 20px;margin-right: 20px;float:left; border-radius: 24px;width:48px;height:48px; " src="https://via.placeholder.com/48x48?text=placeholder"/> \n        <h3 class="postname"> Cathy Wong</h3>\n        <h3 class="postsub"> Nutritionist & Wellness Expert  </h3>\n        <p class="text">Treat your skin with a refreshing facial! Made in Switzerland, the PHYTO 5 skincare line abounds with natural ingredients such as clay, algae, plankton, trace minerals, and essential oils that help soothe and renew th</p>\n        <img src="https://via.placeholder.com/530x300?text=placeholder"/> \n        <h3 class="socialbt">Beğen</h3>\n        <h3 class="socialbt">Paylaş</h3>\n        <h3 class="socialtime">2 hours ago</h3>\n      </ion-card>\n      <ion-card class="post">\n        <h1><b>Coslab</b> bir yazıyı paylaştı</h1>\n\n        <img style="margin-left: 20px;margin-right: 20px;float:left; border-radius: 24px;width:48px;height:48px; " src="https://via.placeholder.com/48x48?text=placeholder"/> \n        <h3 class="postname"> Cathy Wong</h3>\n        <h3 class="postsub"> Nutritionist & Wellness Expert  </h3>\n        <p class="text">Treat your skin with a refreshing facial! Made in Switzerland, the PHYTO 5 skincare line abounds with natural ingredients such as clay, algae, plankton, trace minerals, and essential oils that help soothe and renew th</p>\n        <img src="https://via.placeholder.com/530x300?text=placeholder"/> \n        <h3 class="socialbt">Beğen</h3>\n        <h3 class="socialbt">Paylaş</h3>\n        <h3 class="socialtime">2 hours ago</h3>\n      </ion-card>\n     </ion-col>\n     <ion-col col-md-1 col-1 col-lg-1 col-12></ion-col>\n      <ion-col col-md-5 col-5 col-lg-5 col-12>\n      <ion-item class="profil" style="text-align: left;">\n        <h5 class="avaible" style="margin-bottom:30px;"> Assistpartner olabileceğin kişiler</h5>\n       <ion-item style="padding: 0;background: transparent;">\n        <img style="margin-left: 43px;margin-right: 20px;float: left;border-radius: 24px;width: 48px;height: 48px;margin-top: -8px;" src="https://via.placeholder.com/48x48?text=placeholder"/> \n        <h3 class="postname"> Cathy Wong</h3>\n        <h3 class="postsub"> Nutritionist & Wellness Expert  </h3>\n      </ion-item>\n      <ion-item style="padding: 0;background: transparent;">\n        <img style="margin-left: 43px;margin-right: 20px;float: left;border-radius: 24px;width: 48px;height: 48px;margin-top: -8px;" src="https://via.placeholder.com/48x48?text=placeholder"/> \n        <h3 class="postname"> Cathy Wong</h3>\n        <h3 class="postsub"> Nutritionist & Wellness Expert  </h3>\n      </ion-item>\n      <ion-item style="padding: 0;background: transparent;">\n        <img style="margin-left: 43px;margin-right: 20px;float: left;border-radius: 24px;width: 48px;height: 48px;margin-top: -8px;" src="https://via.placeholder.com/48x48?text=placeholder"/> \n        <h3 class="postname"> Cathy Wong</h3>\n        <h3 class="postsub"> Nutritionist & Wellness Expert  </h3>\n      </ion-item>\n      <ion-item style="padding: 0;background: transparent;">\n        <img style="margin-left: 43px;margin-right: 20px;float: left;border-radius: 24px;width: 48px;height: 48px;margin-top: -8px;" src="https://via.placeholder.com/48x48?text=placeholder"/> \n        <h3 class="postname"> Cathy Wong</h3>\n        <h3 class="postsub"> Nutritionist & Wellness Expert  </h3>\n      </ion-item>\n      <ion-item style="padding: 0;background: transparent;">\n        <img style="margin-left: 43px;margin-right: 20px;float: left;border-radius: 24px;width: 48px;height: 48px;margin-top: -8px;" src="https://via.placeholder.com/48x48?text=placeholder"/> \n        <h3 class="postname"> Cathy Wong</h3>\n        <h3 class="postsub"> Nutritionist & Wellness Expert  </h3>\n      </ion-item>\n      </ion-item>\n     </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc1\acidpark\src\pages\companyprofile\companyprofile.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], CompanyprofilePage);
    return CompanyprofilePage;
}());

//# sourceMappingURL=companyprofile.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyservicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompanyservicePage = /** @class */ (function () {
    function CompanyservicePage() {
    }
    CompanyservicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompanyservicePage');
    };
    CompanyservicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-companyservice',template:/*ion-inline-start:"C:\Users\pc1\acidpark\src\pages\companyservice\companyservice.html"*/'<ion-content >\n  <headerc ></headerc>\n  <ion-grid class="container">\n    <ion-row>\n      <ion-col col-md-12 col-12 col-lg-12 col-12>\n        <ion-item class="bread"> \n          <h5>Home  <span class="ok">></span>  Partners   <span class="ok">></span>  <span class="last"> Coslab Beauth Spa</span> </h5>\n        </ion-item>\n      </ion-col>\n      <ion-col col-md-8 col-8 col-lg-8 col-12>\n            <img class="cover" src="https://via.placeholder.com/720x271?text=Coslab"/>\n            <img class="profilpic" src="https://via.placeholder.com/128x128?text=Coslab"/>\n          \n      </ion-col>\n      <ion-col col-md-4 col-4 col-lg-4 col-12>\n        <ion-item class="profil">\n          <h5 class="avaible"> Available Assist Partners </h5>\n          <img src="https://via.placeholder.com/56x56?text=placeholder"/>\n          <img src="https://via.placeholder.com/56x56?text=placeholder"/>\n          <img src="https://via.placeholder.com/56x56?text=placeholder"/>\n          <img src="https://via.placeholder.com/56x56?text=placeholder"/>\n          <img src="https://via.placeholder.com/56x56?text=placeholder"/>\n          <h5 class="pnamesub">English, Turkish, Spanish +3 other languages</h5>\n          <a  color="primary" small class="ios sx getin" round mode="ios">See partners </a>\n        </ion-item>\n      </ion-col>\n      <ion-col col-md-2 col-lg-2 col-12></ion-col>\n      <ion-col col-md-6 col-lg-6 col-12 style="text-align:right">\n        <h3 class="combname">Coslab Beauty Spa </h3>\n        <h3 class="compcat">Beauty & Wellness  </h3>\n        <h3 class="compcat">Available 6 locations  </h3>\n        <a  color="primary" small class="ios sx follow" round mode="ios">  <ion-icon name="checkmark"></ion-icon> Following</a>\n      </ion-col>\n      <ion-col col-md-4 col-4 col-12></ion-col>\n \n\n          \n    </ion-row>\n  </ion-grid>\n  <ion-grid class="container-fluid" style="margin: 30px 0;">\n    <ion-row>\n      <ion-col col-12 col-md-12 col-lg-12 col-12 class="centerall" >\n        <ion-card text-center class="cats" tappable >\n          <img src="assets/icon/news-colored.svg" /> \n          <h3>Assistline</h3>\n        </ion-card>\n        <ion-card text-center class="cats" tappable >\n          <img src="assets/icon/services-colored.svg" />\n          <h3>Services</h3>\n        </ion-card>\n        <ion-card text-center class="cats" tappable >\n          <img src="assets/icon/ads.svg" />\n          <h3>Deals</h3>\n        </ion-card>\n        <ion-card text-center class="cats" tappable >\n          <img src="assets/icon/user-reviews-colored.svg" />\n          <h3>Reviews</h3>\n        </ion-card>\n        <ion-card text-center class="cats" tappable >\n          <img src="assets/icon/about-colored.svg" />\n          <h3>About</h3>\n        </ion-card>  \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-grid class="container">\n    <ion-row>\n      <ion-col col-md-3 col-lg-3 col-12 col-sm-hidden>\n        <ion-list padding >\n          <h3 style="font-size:16px;">  Categories</h3>\n          <div class="catss" style="border-bottom: 1px solid #efefef;margin-bottom: 22px;padding-bottom: 11px;"> \n            <ion-item>\n              <h3>  <ion-icon name="arrow-down"></ion-icon> Reconstructive Plastic Surgery (51)</h3>\n            </ion-item>\n            <ion-item>\n              <h3>  <ion-icon name="arrow-down"></ion-icon> Dentists (45)</h3>\n            </ion-item>\n            <ion-item>\n              <h3>  <ion-icon name="arrow-down"></ion-icon> Physiotherapy / Rehabilitation (28)</h3>\n            </ion-item>\n            <ion-item>\n              <h3>  <ion-icon name="arrow-down"></ion-icon> Oral and Dental Health (31) </h3>\n            </ion-item>\n          </div>\n          <h3 style="font-size:16px;">  Brand </h3>\n          <div style="border-bottom: 1px solid #efefef;margin-bottom: 22px;padding-bottom: 11px;" >\n          <ion-item style="padding:0;">\n            <ion-searchbar style="padding: 0;" class="anasearch android md" mode="md" placeholder="Ara"></ion-searchbar>\n          </ion-item>\n          <ion-item>\n            <ion-label>Exporter</ion-label>\n            <ion-checkbox color="darkblue" checked="false" item-start></ion-checkbox>\n          </ion-item>\n          <ion-item>\n            <ion-label>Manufacturer</ion-label>\n            <ion-checkbox color="darkblue" checked="false" item-start></ion-checkbox>\n          </ion-item>\n        </div>\n        <div style="border-bottom: 1px solid #efefef;margin-bottom: 22px;padding-bottom: 11px;" >\n          <h3 style="font-size:16px;">  Delivery </h3>\n          <ion-item>\n            <ion-label>Exporter</ion-label>\n            <ion-checkbox color="darkblue" checked="false" item-start></ion-checkbox>\n          </ion-item>\n          <ion-item>\n            <ion-label>Manufacturer</ion-label>\n            <ion-checkbox color="darkblue" checked="false" item-start></ion-checkbox>\n          </ion-item>\n          <ion-item>\n            <ion-label>Exporter</ion-label>\n            <ion-checkbox color="darkblue" checked="false" item-start></ion-checkbox>\n          </ion-item>\n          <ion-item>\n            <ion-label>Manufacturer</ion-label>\n            <ion-checkbox color="darkblue" checked="false" item-start></ion-checkbox>\n          </ion-item>\n          <ion-item>\n            <ion-label>Manufacturer</ion-label>\n            <ion-checkbox color="darkblue" checked="false" item-start></ion-checkbox>\n          </ion-item>\n        </div>\n        <div style="border-bottom: 1px solid #efefef;margin-bottom: 22px;padding-bottom: 11px;" >\n          <h3 style="font-size:16px;">  Payment Type </h3>\n          <ion-item>\n            <ion-label>Exporter</ion-label>\n            <ion-checkbox color="darkblue" checked="false" item-start></ion-checkbox>\n          </ion-item>\n          <ion-item>\n            <ion-label>Manufacturer</ion-label>\n            <ion-checkbox color="darkblue" checked="false" item-start></ion-checkbox>\n          </ion-item>\n          <ion-item>\n            <ion-label>Exporter</ion-label>\n            <ion-checkbox color="darkblue" checked="false" item-start></ion-checkbox>\n          </ion-item>\n          <ion-item>\n            <ion-label>Manufacturer</ion-label>\n            <ion-checkbox color="darkblue" checked="false" item-start></ion-checkbox>\n          </ion-item>\n        </div>\n        </ion-list>\n        \n        \n              </ion-col>\n              <ion-col col-md-9 col-lg-9 col-12  class="lastchance">\n                <ion-row>\n                <ion-col col-12 col-md-7 col-7>\n                <h3 style="float: left;margin-right: 20px;">Spa & Massage Services  </h3>\n                <h5 style="font-size: 13px;color: #999999;">  5 services found </h5>\n                </ion-col>\n         \n               \n          \n                 <ion-item   class="filt" >\n                   <ion-label style="text-align: right;  ">\n                 Show filters\n                </ion-label>\n                  <ion-select [selectOptions]="selectOptions" class="select2" interface="popover">\n                    <ion-option value="Popularity">Popularity</ion-option>\n                  </ion-select>\n                 </ion-item>\n                </ion-row>\n            \n                <ion-row class="heightop">\n                  <ion-col col-md-4 col-lg-4 col-12>\n                    <ion-card text-left>\n                      <img src="https://via.placeholder.com/270x141?text=placeholder"/>\n                          <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n                 \n                      <ion-card-content>\n                        <ion-card-title>\n                          3-Hour Phyto 5 Elements Spa Indulgence with Facial and Body Massage for 1 Person\n                          \n                          </ion-card-title>\n                          \n                        <p class="branding">\n                          Beauty & Wellness </p>\n                      </ion-card-content>\n                      <a  color="primary" small class="ios sx buynow" round mode="ios" style="margin-left: 16px;">Request an offer</a>\n          \n                    </ion-card>\n                  </ion-col>\n                  <ion-col col-md-4 col-lg-4 col-12>\n                  <ion-card text-left>\n                    <img src="https://via.placeholder.com/270x141?text=placeholder"/>\n                        <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n               \n                    <ion-card-content>\n                      <ion-card-title>\n                        3-Hour Phyto 5 Elements Spa Indulgence with Facial and Body Massage for 1 Person\n                        \n                        </ion-card-title>\n                        \n                      <p class="branding">\n                        Beauty & Wellness </p>\n                    </ion-card-content>\n                    <span class="price"><b class="realprice">$50</b><b class="discountprice">$30</b></span>\n                    <a  color="primary" small class="ios sx buynow" round mode="ios">Buy now</a>\n        \n                  </ion-card>\n                </ion-col>\n                <ion-col col-md-4 col-lg-4 col-12>\n                  <ion-card text-left>\n                    <img src="https://via.placeholder.com/270x141?text=placeholder"/>\n                        <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n               \n                    <ion-card-content>\n                      <ion-card-title>\n                        3-Hour Phyto 5 Elements Spa Indulgence with Facial and Body Massage for 1 Person\n                        \n                        </ion-card-title>\n                        \n                      <p class="branding">\n                        Beauty & Wellness </p>\n                    </ion-card-content>\n                    <a  color="primary" small class="ios sx buynow" round mode="ios" style="margin-left: 16px;">Request an offer</a>\n        \n                  </ion-card>\n                </ion-col>\n                <ion-col col-md-4 col-lg-4 col-12>\n                <ion-card text-left>\n                  <img src="https://via.placeholder.com/270x141?text=placeholder"/>\n                      <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n             \n                  <ion-card-content>\n                    <ion-card-title>\n                      3-Hour Phyto 5 Elements Spa Indulgence with Facial and Body Massage for 1 Person\n                      \n                      </ion-card-title>\n                      \n                    <p class="branding">\n                      Beauty & Wellness </p>\n                  </ion-card-content>\n                  <span class="price"><b class="realprice">$50</b><b class="discountprice">$30</b></span>\n                  <a  color="primary" small class="ios sx buynow" round mode="ios">Buy now</a>\n        \n                </ion-card>\n              </ion-col>\n              <ion-col col-md-4 col-lg-4 col-12>\n                <ion-card text-left>\n                  <img src="https://via.placeholder.com/270x141?text=placeholder"/>\n                      <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n             \n                  <ion-card-content>\n                    <ion-card-title>\n                      3-Hour Phyto 5 Elements Spa Indulgence with Facial and Body Massage for 1 Person\n                      \n                      </ion-card-title>\n                      \n                    <p class="branding">\n                      Beauty & Wellness </p>\n                  </ion-card-content>\n                  <a  color="primary" small class="ios sx buynow" round mode="ios" style="margin-left: 16px;">Request an offer</a>\n        \n                </ion-card>\n              </ion-col>\n              <ion-col col-md-4 col-lg-4 col-12>\n              <ion-card text-left>\n                <img src="https://via.placeholder.com/270x141?text=placeholder"/>\n                    <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n           \n                <ion-card-content>\n                  <ion-card-title>\n                    3-Hour Phyto 5 Elements Spa Indulgence with Facial and Body Massage for 1 Person\n                    \n                    </ion-card-title>\n                    \n                  <p class="branding">\n                    Beauty & Wellness </p>\n                </ion-card-content>\n                <span class="price"><b class="realprice">$50</b><b class="discountprice">$30</b></span>\n                <a  color="primary" small class="ios sx buynow" round mode="ios">Buy now</a>\n        \n              </ion-card>\n            </ion-col>\n                </ion-row>\n              </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc1\acidpark\src\pages\companyservice\companyservice.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], CompanyservicePage);
    return CompanyservicePage;
}());

//# sourceMappingURL=companyservice.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyreviewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompanyreviewsPage = /** @class */ (function () {
    function CompanyreviewsPage() {
    }
    CompanyreviewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompanyreviewsPage');
    };
    CompanyreviewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-companyreviews',template:/*ion-inline-start:"C:\Users\pc1\acidpark\src\pages\companyreviews\companyreviews.html"*/'<ion-content >\n  <headerc ></headerc>\n  \n  <ion-grid class="container">\n    <ion-row>\n      <ion-col col-md-12 col-12 col-lg-12 col-12>\n        <ion-item class="bread"> \n          <h5>Home  <span class="ok">></span>  Partners   <span class="ok">></span>  <span class="last"> Coslab Beauth Spa</span> </h5>\n        </ion-item>\n      </ion-col>\n      <ion-col col-md-8 col-8 col-lg-8 col-12>\n            <img class="cover" src="https://via.placeholder.com/720x271?text=Coslab"/>\n            <img class="profilpic" src="https://via.placeholder.com/128x128?text=Coslab"/>\n          \n      </ion-col>\n      <ion-col col-md-4 col-4 col-lg-4 col-12>\n        <ion-item class="profil">\n          <h5 class="avaible"> Available Assist Partners </h5>\n          <img src="https://via.placeholder.com/56x56?text=placeholder"/>\n          <img src="https://via.placeholder.com/56x56?text=placeholder"/>\n          <img src="https://via.placeholder.com/56x56?text=placeholder"/>\n          <img src="https://via.placeholder.com/56x56?text=placeholder"/>\n          <img src="https://via.placeholder.com/56x56?text=placeholder"/>\n          <h5 class="pnamesub">English, Turkish, Spanish +3 other languages</h5>\n          <a  color="primary" small class="ios sx getin" round mode="ios">See partners </a>\n        </ion-item>\n      </ion-col>\n      <ion-col col-md-2 col-lg-2 col-12></ion-col>\n      <ion-col col-md-6 col-lg-6 col-12 style="text-align:right">\n        <h3 class="combname">Coslab Beauty Spa </h3>\n        <h3 class="compcat">Beauty & Wellness  </h3>\n        <h3 class="compcat">Available 6 locations  </h3>\n        <a  color="primary" small class="ios sx follow" round mode="ios">  <ion-icon name="checkmark"></ion-icon> Following</a>\n      </ion-col>\n      <ion-col col-md-4 col-4 col-12></ion-col>\n \n\n          \n    </ion-row>\n  </ion-grid>\n  <ion-grid class="container-fluid" style="margin: 30px 0;">\n    <ion-row>\n      <ion-col col-12 col-md-12 col-lg-12 col-12 class="centerall" >\n        <ion-card text-center class="cats" tappable >\n          <img src="assets/icon/news-colored.svg" /> \n          <h3>Assistline</h3>\n        </ion-card>\n        <ion-card text-center class="cats" tappable >\n          <img src="assets/icon/services-colored.svg" />\n          <h3>Services</h3>\n        </ion-card>\n        <ion-card text-center class="cats" tappable >\n          <img src="assets/icon/ads.svg" />\n          <h3>Deals</h3>\n        </ion-card>\n        <ion-card text-center class="cats" tappable >\n          <img src="assets/icon/user-reviews-colored.svg" />\n          <h3>Reviews</h3>\n        </ion-card>\n        <ion-card text-center class="cats" tappable >\n          <img src="assets/icon/about-colored.svg" />\n          <h3>About</h3>\n        </ion-card>  \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-grid class="container">\n    <ion-row>\n      <ion-col col-md-12 col-12 col-lg-12 col-12>\n      <ion-item class="profil" style="text-align: left;">\n       <ion-item style="padding: 0;background: transparent;    display: flex;">\n        <ion-row>\n          <ion-col col-md-4 col-lg-4 col-12 class="mar1" style="    display: block;">\n            <img class="imgmarg" src="https://via.placeholder.com/48x48?text=placeholder"/> \n            <h3 class="postname"> Charlotte Hall</h3>\n            <h3 class="postsub"> Antalya, Turkey </h3>\n          </ion-col>\n          <ion-col col-md-6 col-lg-6 col-12  class="mar2" style="    display: block;">\n            <ion-icon class="stars" name="star"></ion-icon>\n            <ion-icon class="stars" name="star"></ion-icon>\n            <ion-icon class="stars" name="star"></ion-icon>\n            <ion-icon class="stars" name="star"></ion-icon>\n            <ion-icon class="stars" name="star"></ion-icon>\n            <p class="time">13/6/2020 8:24 PM    <ion-icon class="mores" name="more"></ion-icon></p>\n         \n            <p class="comment">Startup’ımız için çok güzel bir iş oldu, çok teşekkürler. Tebrik ederim. </p>\n          </ion-col>\n          <ion-col col-md-4 col-lg-4 col-12 class="mar1" style="    display: block;">\n            <img class="imgmarg" src="https://via.placeholder.com/48x48?text=placeholder"/> \n            <h3 class="postname"> Nicholas Stewart  </h3>\n            <h3 class="postsub"> Antalya, Turkey  </h3>\n          </ion-col>\n          <ion-col col-md-6 col-lg-6 col-12 class="mar2" style="    display: block;">\n            <ion-icon class="stars" name="star"></ion-icon>\n            <ion-icon class="stars" name="star"></ion-icon>\n            <ion-icon class="stars" name="star"></ion-icon>\n            <ion-icon class="stars" name="star"></ion-icon>\n            <ion-icon class="stars" name="star"></ion-icon>\n            <p class="time">13/6/2020 8:24 PM    <ion-icon class="mores" name="more"></ion-icon></p>\n         \n            <p class="comment">Erdem Bey ile daha önce çalıştığım ve yaptığı işi çok beğendiğim için, yeni bir sipariş verdim. Her zamanki gibi, HIZLI ve KALİTELİ hizmet! Çok teşekkür ederim! </p>\n          </ion-col>\n          <ion-col col-md-4 col-lg-4 col-12 class="mar1" style="    display: block;">\n            <img class="imgmarg" src="https://via.placeholder.com/48x48?text=placeholder"/> \n            <h3 class="postname"> Dean Martin</h3>\n            <h3 class="postsub"> Antalya, Turkey   </h3>\n          </ion-col>\n          <ion-col col-md-6 col-lg-6 col-12 class="mar2" style="    display: block;">\n            <ion-icon class="stars" name="star"></ion-icon>\n            <ion-icon class="stars" name="star"></ion-icon>\n            <ion-icon class="stars" name="star"></ion-icon>\n            <ion-icon class="stars" name="star"></ion-icon>\n            <ion-icon class="stars" name="star"></ion-icon>\n            <p class="time">13/6/2020 8:24 PM    <ion-icon class="mores" name="more"></ion-icon></p>\n         \n            <p class="comment">Selfies hella tilde yuccie biodiesel drinking vinegar. Distillery plaid gochujang gastropub locavore poutine man bun whatever kickstarter. Yr cloud bread asymmetrical sartorial </p>\n          </ion-col>\n          <ion-col col-md-4 col-lg-4 col-12 class="mar1" style="    display: block;">\n            <img class="imgmarg" src="https://via.placeholder.com/48x48?text=placeholder"/> \n            <h3 class="postname"> Louisa Flores  </h3>\n            <h3 class="postsub"> Antalya, Turkey   </h3>\n          </ion-col>\n          <ion-col col-md-6 col-lg-6 col-12 class="mar2" style="    display: block;">\n            <ion-icon class="stars" name="star"></ion-icon>\n            <ion-icon class="stars" name="star"></ion-icon>\n            <ion-icon class="stars" name="star"></ion-icon>\n            <ion-icon class="stars" name="star"></ion-icon>\n            <ion-icon class="stars" name="star"></ion-icon>\n            <p class="time">13/6/2020 8:24 PM    <ion-icon class="mores" name="more"></ion-icon></p>\n         \n            <p class="comment"> I\'m baby viral street art cray stumptown </p>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n\n      </ion-item>\n     </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc1\acidpark\src\pages\companyreviews\companyreviews.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], CompanyreviewsPage);
    return CompanyreviewsPage;
}());

//# sourceMappingURL=companyreviews.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FreelancerprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FreelancerprofilePage = /** @class */ (function () {
    function FreelancerprofilePage() {
        this.icons = "what";
    }
    FreelancerprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FreelancerprofilePage');
    };
    FreelancerprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-freelancerprofile',template:/*ion-inline-start:"C:\Users\pc1\acidpark\src\pages\freelancerprofile\freelancerprofile.html"*/'\n\n<ion-content  >\n  <headerc ></headerc>\n  <ion-grid class="container" style="margin-top:50px;">\n    <ion-row>\n  <ion-col col-md-4 col-lg-4 col-12>\n   <ion-card style="text-align:center;    box-shadow: none;">\n      <img style="height: 120px;width: 120px;border-radius: 50%;display:unset;  margin-top: 30px;  " src="https://via.placeholder.com/120x120?text=placeholder"/>\n      <h5 class="pname"> Guest Manager </h5>\n      <h5 class="pnamesub"> Aygul Muradova</h5>\n      <ion-item>\n        <a  color="primary" small class="ios sx follow" round mode="ios">  <ion-icon name="checkmark"></ion-icon> Following</a>\n        <a  color="primary" small class="ios sx follow" round mode="ios">  <ion-icon name="send"></ion-icon> Message</a>\n      </ion-item>\n      <ion-item class="tenter">\n      <a  color="primary" small class="ios sx getin" round mode="ios">    <ion-icon name="call"></ion-icon> Make a call </a>\n      </ion-item>\n      <ion-item class="labelfind">\n      <p class="proview">Proje Görüntüleme</p> <span style="font-size:13px;">129.459</span>\n      </ion-item>\n      <ion-item class="labelfind" style="border-bottom: 1px solid #efefef;      margin-bottom: 20px;">\n      <p class="followers">Takipçiler</p> <span style="font-size:13px;">5.452</span>\n      </ion-item>\n      <ion-item>\n        <p class="followers">Teams</p>\n      </ion-item>\n      <ion-item style="padding: 0;background: transparent;">\n        <img style="margin-left: 54px;margin-right: 20px;float: left;border-radius: 24px;width: 40px!important;height: 40px;margin-top: -8px;" src="https://via.placeholder.com/48x48?text=placeholder"/> \n        <h3 class="postname"> Massage therapist  </h3>\n        <h3 class="postsub"> Erdem Kirmitci </h3>\n        <span class="follows">+ Follow</span>\n      </ion-item>\n      <ion-item style="padding: 0;background: transparent;">\n        <img style="margin-left: 54px;margin-right: 20px;float: left;border-radius: 24px;width: 40px!important;height: 40px;margin-top: -8px;" src="https://via.placeholder.com/48x48?text=placeholder"/> \n        <h3 class="postname"> Customer service  </h3>\n        <h3 class="postsub"> Vincent Cain  </h3>\n        <span class="follows">+ Follow</span>\n  \n      </ion-item>\n<ion-item class="socials">\n  <ion-icon name="logo-twitter"></ion-icon>\n  <ion-icon name="logo-facebook"></ion-icon>\n  <ion-icon name="logo-dribbble"></ion-icon>\n\n</ion-item>\n\n   </ion-card>\n  </ion-col>\n  <ion-col col-md-8 col-12 col-lg-8 style="    padding: 0 35px;">\n    <img src="assets/imgs/topfre.png" style="    height: 62px;" alt="">\n    <img src="assets/imgs/badge.png" style="    height: 62px;" alt="">\n  <ion-item class="editprof">\n    <a  color="primary" small class="ios sx follow" round mode="ios">  Edit your profile</a>\n    <ion-icon class="mors" name="more"></ion-icon>\n  </ion-item>\n\n  <ion-segment [(ngModel)]="icons" color="secondary" class="seghome" style="margin-top:25px;margin-bottom:0px;">\n    <ion-segment-button value="what" >\n        About\n      </ion-segment-button>\n    <ion-segment-button value="rez"> \n   Services\n    </ion-segment-button>\n    <ion-segment-button value="assist">\n     Assistline\n    </ion-segment-button>\n    <ion-segment-button value="reviews">\n      Reviews (124) \n    </ion-segment-button>\n  </ion-segment>\n  \n  <div  [ngSwitch]="icons" >\n  <ion-item *ngSwitchCase="\'what\'" style="padding:0;">\n      <ion-col col-lg-5 col-xl-5 col-md-5 col-12 class="leftblock">\n          <ion-card-title class="segtits">\n            Hi, I am an experienced person who lives in Turkey and loves to design, read and make things happen. I would love to help you and give suggests while you\'re working with me. <br>\n            <span style="font-size: 13px; color: #277DFF;">Edit text</span>\n         <ion-item style=" padding: 0;margin-top: 30px;">\n          <img style=" float: left; margin-right: 10px;height: 21px; width: 24px!important; " src="assets/imgs/hat.png" alt="">\n           <p class="hats">Hats</p> \n           <span style="font-size: 13px; color: #277DFF;">+ Add</span>\n         </ion-item>\n         <p style="font-size: 13px; color: #333333;">The is short description about hats</p>\n         <ion-item style="padding:0;">\n           <span class="hatsitem">Graphic Designer</span>\n           <span class="hatsitem">  Illustrator</span>\n           <span class="hatsitem">Product Designer</span>\n         </ion-item>\n         <p class="colors"> \n            <ion-icon name="arrow-down"></ion-icon>  Show skills (16)     \n         </p>\n\n         <ion-item style=" padding: 0;margin-top: 30px;">\n          <img style=" float: left; margin-right: 10px;height: 21px; width: 24px!important; " src="assets/imgs/grad.png" alt="">\n           <p class="hats">Education</p> \n           <span style="font-size: 13px; color: #277DFF;position: relative; top: 5px;">+ Add</span>\n         </ion-item>\n         <ion-item class="edu">\n             <h3>Graphic Design</h3>\n             <p>Mustafa Kemal University, Turkey</p>\n             <span>2018 - Present</span>\n         </ion-item>\n         <ion-item class="edu">\n            <h3>Graphic Design</h3>\n            <p>Mustafa Kemal University, Turkey</p>\n            <span>2018 - Present</span>\n        </ion-item>\n          </ion-card-title>\n        </ion-col>\n  </ion-item>\n  <ion-item *ngSwitchCase="\'rez\'" style="padding:0;">\n    <ion-row class="servic"> \n      <ion-col col-12 col-lg-6 col-md-6 style="box-shadow:none;">\n        <ion-card text-left style="margin: 0;">\n          <img style="width:100%!important;" src="https://via.placeholder.com/270x141?text=placeholder"/>\n              <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n          <ion-card-content>\n            <ion-card-title>\n              Ben, herşey dahil internet sitenizi hazırlar ve yayınlarım\n              </ion-card-title>\n            <p class="branding">\n              İllüstrasyon </p>\n          </ion-card-content>\n          <span class="price"><b class="realprice">350 TL</b></span>\n          <a  color="primary" small class="ios sx buynow" round mode="ios">See Details</a>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12 col-lg-6 col-md-6 style="box-shadow:none;">\n        <ion-card text-left style="    margin: 0;">\n          <img style="width:100%!important;" src="https://via.placeholder.com/270x141?text=placeholder"/>\n              <h4 class="rating"><ion-icon name="star"></ion-icon>3.5</h4>\n          <ion-card-content>\n            <ion-card-title>\n              Ben, portrenizi animatik/karikatür/realist çizebilirim\n              </ion-card-title>\n            <p class="branding">\n              Karikatür & Karakalem </p>\n          </ion-card-content>\n          <span class="price"><b class="realprice">350 TL</b></span>\n          <a  color="primary" small class="ios sx buynow" round mode="ios">See Details</a>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n</ion-item>\n<ion-item class="forlabel" *ngSwitchCase="\'assist\'" style="padding: 0px;">\n   \n       <h1 class="share">Bir deneyim paylaş</h1>\n        <ion-item class="byar">\n          <img style=" float: left; border-radius: 50%; width:unset!important; border: 1px solid #efefef;" src="https://via.placeholder.com/48x48?text=placeholder"/> \n          <h3 class="foto">  <ion-icon name="photos"></ion-icon> Fotoğraf Ekleyin</h3>\n          <h3 class="foto">  <ion-icon name="play"></ion-icon> Video Ekleyin</h3>\n        </ion-item>\n      <ion-card class="post">\n        <h1><b>Coslab</b> bir yazıyı paylaştı</h1>\n        <img style="margin-left: 20px;margin-right: 20px;float:left; border-radius: 24px;width:48px;height:48px; " src="https://via.placeholder.com/48x48?text=placeholder"/> \n        <h3 class="postname"> Cathy Wong</h3>\n        <h3 class="postsub"> Nutritionist & Wellness Expert  </h3>\n        <p class="text">Treat your skin with a refreshing facial! Made in Switzerland, the PHYTO 5 skincare line abounds with natural ingredients such as clay, algae, plankton, trace minerals, and essential oils that help soothe and renew th</p>\n        <img style="       margin-bottom: 20px; width: 100%!important;" src="https://via.placeholder.com/530x300?text=placeholder"/> \n        <h3 class="socialbt">Beğen</h3>\n        <h3 class="socialbt">Paylaş</h3>\n        <h3 class="socialtime">2 hours ago</h3>\n      </ion-card>\n      <ion-card class="post">\n        <h1><b>Coslab</b> bir yazıyı paylaştı</h1>\n\n        <img style="margin-left: 20px;margin-right: 20px;float:left; border-radius: 24px;width:48px;height:48px; " src="https://via.placeholder.com/48x48?text=placeholder"/> \n        <h3 class="postname"> Cathy Wong</h3>\n        <h3 class="postsub"> Nutritionist & Wellness Expert  </h3>\n        <p class="text">Treat your skin with a refreshing facial! Made in Switzerland, the PHYTO 5 skincare line abounds with natural ingredients such as clay, algae, plankton, trace minerals, and essential oils that help soothe and renew th</p>\n        <img style="     margin-bottom: 20px;width: 100%!important;"  src="https://via.placeholder.com/530x300?text=placeholder"/> \n        <h3 class="socialbt">Beğen</h3>\n        <h3 class="socialbt">Paylaş</h3>\n        <h3 class="socialtime">2 hours ago</h3>\n      </ion-card>\n   \n</ion-item>\n\n<ion-item *ngSwitchCase="\'reviews\'" style="padding:0;">\n  <ion-row class="servic" style="margin-top:30px;"> \n\n      <ion-col col-md-4 col-lg-4 col-12 class="mar1" style="     margin-top: 32px;   display: block;">\n        <img class="imgmarg" src="https://via.placeholder.com/48x48?text=placeholder"/> \n        <h3 class="postname"> Charlotte Hall</h3>\n        <h3 class="postsub"> Antalya, Turkey </h3>\n      </ion-col>\n      <ion-col col-md-8 col-lg-8 col-12  class="mar2" style="    display: block;">\n        <ion-icon class="stars" name="star"></ion-icon>\n        <ion-icon class="stars" name="star"></ion-icon>\n        <ion-icon class="stars" name="star"></ion-icon>\n        <ion-icon class="stars" name="star"></ion-icon>\n        <ion-icon class="stars" name="star"></ion-icon>\n        <p class="time">13/6/2020 8:24 PM    <ion-icon class="mores" name="more"></ion-icon></p>\n     \n        <p class="comment">Startup’ımız için çok güzel bir iş oldu, çok teşekkürler. Tebrik ederim. </p>\n      </ion-col>\n\n  \n  </ion-row>\n</ion-item>\n  </div>\n</ion-col>\n</ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc1\acidpark\src\pages\freelancerprofile\freelancerprofile.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], FreelancerprofilePage);
    return FreelancerprofilePage;
}());

//# sourceMappingURL=freelancerprofile.js.map

/***/ })

},[222]);
//# sourceMappingURL=main.js.map