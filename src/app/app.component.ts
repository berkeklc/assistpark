import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Globalization } from '@ionic-native/globalization'
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
resp:any;
  constructor(private global:Globalization,public Translate:TranslateService,storage:Storage,http:HttpClient,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.Translate.setDefaultLang('en');
      this.Translate.use('en');
      this.global.getPreferredLanguage()
      .then(res => {
        console.log(res);
        this.Translate.setDefaultLang(res.value);
      })
      .catch(e => console.log(e));
     

      storage.get('firsttime').then((firsttime)=>{
        if(firsttime != false){
          
          http.get('http://localhost/assistpark/rest_api/api/get_all').subscribe((r)=>{
          this.resp =  r;
          this.resp = this.resp.result;
          storage.set('countries',this.resp.countries);
          storage.set('categories',this.resp.categories);
        //  storage.set('city',this.resp.cities);
          storage.set('firsttime',false);
          });
        }
      });
    });
  }
}

