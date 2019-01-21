import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FavPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fav',
  templateUrl: 'fav.html',
})
export class FavPage {
  favoritos= [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.favoritos = this.navParams.get('favoritos');
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavPage');
  }

}
