import { Component,ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Hello } from '../pages/hello/hello';
import { CameraPage } from '../pages/CameraClick/camera';
import { Maps } from '../pages/maps/maps';
import { Popup } from '../pages/popup/popup';

import { App, MenuController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  pageList: Array<{title: string, component: any}>=[
    { title:"Camera", component:CameraPage},
    {title:"Maps",component:Maps},
    {title:"Popup",component:Popup}
  ];

  @ViewChild(Nav) nav:Nav;
  rootPage:any = Hello;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,app: App,private menu: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });


    menu.enable(true);
  }

  openPage(page)
  {
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);  }
}

