import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrScan } from './qr-scan';

@NgModule({
  declarations: [
    QrScan,
  ],
  imports: [
    IonicPageModule.forChild(QrScan),
  ],
  exports: [
    QrScan
  ]
})
export class QrScanModule {}
