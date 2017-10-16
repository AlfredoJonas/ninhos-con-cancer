import { Component } from '@angular/core';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
  styleUrls: ['welcome.css']
})
export class WelcomePage {

  data: any = "Pagina welcome";

  constructor(){

  }

  ionViewDidLoad() { 
    console.log('ionViewDidLoad WelcomePage');    
  }    

}