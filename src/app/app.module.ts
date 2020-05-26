import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CategoryPage } from '../pages/category/category';
import { HeadercComponent } from '../components/headerc/headerc';
import { SegmentComponent } from '../components/segment/segment';
import { RouterModule, Routes,Router} from '@angular/router';
import { RegisterPage } from '../pages/register/register';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { LoginPage } from '../pages/login/login';
import { MybusinessPage } from '../pages/mybusiness/mybusiness';
import { ProductsPage } from '../pages/products/products';
import { ProductPage } from '../pages/product/product';
import { SubtoolbarComponent } from '../components/subtoolbar/subtoolbar';
import { NewproductPage } from '../pages/newproduct/newproduct';
import { TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Globalization } from '@ionic-native/globalization'
import { NewpagePage } from '../pages/newpage/newpage';
import { PartnerPage } from '../pages/partner/partner';
import { FreelancerPage } from '../pages/freelancer/freelancer';
import { CompanyPage } from '../pages/company/company';
import { ServicesPage } from '../pages/services/services';
import { DetailPage } from '../pages/detail/detail';
import { CompanyprofilePage } from '../pages/companyprofile/companyprofile';
import { CompanyservicePage } from '../pages/companyservice/companyservice';
import { CompanyreviewsPage } from '../pages/companyreviews/companyreviews';
import { FreelancerprofilePage } from '../pages/freelancerprofile/freelancerprofile';
const routes: Routes = [
  { path: '', component:HomePage,pathMatch: 'full'  },
  { path: 'home', component:HomePage },
  { path: 'home/:country', component:HomePage },
  { path: 'home/:country/:city', component:HomePage },
  {path:'category/:category',component:CategoryPage},
  {path:'register',component:RegisterPage},
  {path:'login',component:LoginPage},
  {path:'mybusiness',component:MybusinessPage},
  {path:'products',component:ProductsPage},
  {path:'product/:id',component:ProductPage},
  {path:'product/edit/:id',component:NewproductPage},
  {path:'newproduct',component:NewproductPage},
  {path:'newpage',component:NewpagePage},
  {path:'partner',component:PartnerPage},
  {path:'freelancer',component:FreelancerPage},
  {path:'services',component:ServicesPage},
  {path:'detail',component:DetailPage},
  {path:'companyprofile',component:CompanyprofilePage},
  {path:'companyservice',component:CompanyservicePage},
  {path:'companyreviews',component:CompanyreviewsPage},
  {path:'freelancerprofile',component:FreelancerprofilePage},
  {path:'company',component:CompanyPage}

];
export function createTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/','.json')
}

@NgModule({
  
  declarations: [
    MyApp,
    HomePage,
    CategoryPage,
    HeadercComponent,
    SegmentComponent,
    RegisterPage,
    LoginPage,
    MybusinessPage,
    ProductsPage,
    ProductPage,
    SubtoolbarComponent,
    NewproductPage,
    PartnerPage,
    FreelancerPage,
    CompanyPage,
    ServicesPage,
    DetailPage,
    CompanyprofilePage,
    CompanyservicePage,
    CompanyreviewsPage,
    FreelancerprofilePage,
NewpagePage  ],
  imports: [
    BrowserModule,
    HttpClientModule,
   
    RouterModule.forRoot(routes,{enableTracing:false}),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory:(createTranslateLoader),
          deps: [HttpClient]
      }
  }),
    IonicStorageModule.forRoot(),
   
  IonicModule.forRoot(MyApp,{animate: false,mode:'ios'}),
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CategoryPage,
    RegisterPage,
    LoginPage,
    MybusinessPage,
    ProductsPage,
    ProductPage,
    NewproductPage,
    NewpagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Globalization,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  exports: [RouterModule]
})
export class AppModule {
  
}
