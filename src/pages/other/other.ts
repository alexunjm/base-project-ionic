import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController,
  Events
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

  data: Array<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    public menu: MenuController) {
      this.data = [];
      for (let i = 0; i < 10; i++) {
        this.data.push(i);
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtherPage');
  }

  onPageDidEnter() {
    this.events.publish('test:created', 'test', Date.now());
  }

}
