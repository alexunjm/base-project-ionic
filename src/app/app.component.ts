import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Config } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MenuProvider } from '../providers/providers';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;
  @ViewChild(Nav) nav: Nav;
  menu: Array<any>;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private config: Config,
    private _menuP: MenuProvider
  ) {
    this.buildMenu();
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.config.set('ios', 'backButtonText', 'regresar');
  }

  buildMenu() {
    this._menuP.initNavigationMenu().subscribe(
      res => {
        this.menu = this._menuP.pages
        console.log('MENU', this.menu);
      },
      err => {
        console.error('ERROR', err);
        this.menu = [];
      }
    );
  }

  openPage(menuElm) {
    let params = {};

    if (menuElm.category) {
      params = { category: menuElm.category };
      this.nav.push(menuElm.page, params);
    } else {
      this.nav.setRoot(menuElm.page);
    }
  }

  menuItemHandler(menuElm): void {
    menuElm.showSubs = !menuElm.showSubs;
  }

  isActive(menuElm) {
    if (this.nav.getActive() && this.nav.getActive().name === menuElm.page) {
      return 'selected';
    }
    return;
  }
}

