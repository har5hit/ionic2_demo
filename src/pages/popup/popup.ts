import { Component } from '@angular/core';
import { ModalController,IonicPage, NavController, NavParams } from 'ionic-angular';
import {ImageButton} from './modals/ImageButton'


/**
 * Generated class for the Hello page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-popup',
  templateUrl: 'popup.html',
})
export class Popup {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }



 showModal(){
 let modal = this.modalCtrl.create(ImageButton);
    modal.present();
 }
}