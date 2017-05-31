import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { CameraPage } from '../pages/camera/camera';
import { Hello } from '../pages/hello/hello';
import { Maps } from '../pages/maps/maps';
import { Popup } from '../pages/popup/popup';
import {ImageButton} from '../pages/popup/modals/ImageButton'
import { QrScan } from '../pages/qr-scan/qr-scan';

import { GoogleMaps} from '@ionic-native/google-maps';

import { Camera } from '@ionic-native/camera';

import { Geolocation } from '@ionic-native/geolocation';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@NgModule({
  declarations: [
    MyApp,
    CameraPage,
    Hello,
    Maps,
    Popup,
    ImageButton,
    QrScan
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CameraPage,
    Hello,
    Maps,
    Popup,
    ImageButton,
    QrScan
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    GoogleMaps,
    Geolocation,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
