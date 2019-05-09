import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-api',
  templateUrl: 'api.html'
})
export class ApiPage {

  constructor(public navCtrl: NavController, public http: HttpClient) {
    console.log("No construtor");

    this.http.get("http://clevermidia.com.br/nomes.json").subscribe(data => {
      console.log(data);
    });

    
    /*
    this.http.get("http://clevermidia.com.br/nomes.json")
      .map(any).first
      .map(res => res.json()).subscribe(data => {
                let responseData = data;
                console.log(responseData);
            },
            err => {
                console.log('error in ETPhoneHome');
            });
            */
      //console.log(json);
  }

}
