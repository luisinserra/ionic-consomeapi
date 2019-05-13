import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  tSenha: string;
  private alertCtrl;
  tLogin: string;
  tParm: string;
  oo: string;

  constructor(public navCtrl: NavController, alertCtrl : AlertController) {
    this.alertCtrl = alertCtrl;
    this.tParm="Veja!";
  }

  handleChange = () => {
    console.log("mudou");
  }

  setLogin = (parm) => {
    this.tLogin=parm;
  }

  setSenha = (parm) => {
    this.tSenha = parm;
  }

  clicou = () => {
    this.oo="MMM";
      let msg="Botão pressionado! para "+this.tLogin+", senha = "+this.tSenha;
      const alert = this.alertCtrl.create({
        title: 'Vamos nessa!',
        subTitle: msg,
        buttons: ['Tá bom']
      });
      alert.present();
  }

}
