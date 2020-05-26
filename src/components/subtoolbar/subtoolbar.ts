import { Component ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from 'ionic-angular';
import { NewproductPage } from '../../pages/newproduct/newproduct';

/**
 * Generated class for the SubtoolbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'subtoolbar',
  templateUrl: 'subtoolbar.html'
})
export class SubtoolbarComponent {
NewproductPage=NewproductPage;
  text: string;
@Input('type') type;
  constructor(public router:Router,public modalCtrl:ModalController) {
    console.log('Hello SubtoolbarComponent Component');
    this.text = 'Hello World';
  }

  comeback(){
window.history.back();
  }
  openModal(page){
  this.router.navigateByUrl(page);
  }

}
