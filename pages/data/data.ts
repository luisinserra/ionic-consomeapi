import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SQLite } from '@ionic-native/sqlite';

@Component({
  selector: 'page-api',
  templateUrl: 'api.html'
})

export class DataPage {

  constructor(public navCtrl: NavController) {

  }

  providers: [
    StatusBar,
    SQLite
  ]
}