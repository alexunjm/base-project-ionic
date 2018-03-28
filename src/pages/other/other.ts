import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController
} from 'ionic-angular';

/**
 * Generated class for the OtherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-other',
  templateUrl: 'other.html',
})
export class OtherPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtherPage');
  }

  onPageDidEnter() {
    this.menu.enable(true);
    /* this.menu.enable(false); */
  }

  /*
  onPageDidLeave() {
  }
 */
}