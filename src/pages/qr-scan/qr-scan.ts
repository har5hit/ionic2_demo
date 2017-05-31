import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the QrScan page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-qr-scan',
  templateUrl: 'qr-scan.html',
})
export class QrScan {

  text: String;
  format: String;
  constructor(public navCtrl: NavController, public navParams: NavParams,private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrScan');
  }

  scanQr(){

    console.log("scanning");  
    this.barcodeScanner.scan().then((barcodeData) => {
 // Success! Barcode data is here
 this.text=barcodeData.text;
 this.format=barcodeData.format;

}, (err) => {
this.text="err:"+err;
});
  }

}
