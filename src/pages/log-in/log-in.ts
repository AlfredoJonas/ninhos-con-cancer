import { Component } from '@angular/core';

@Component({
  selector: 'page-log-in',
  templateUrl: 'log-in.html',
  styleUrls: ['log-in.css']
})
export class LogInPage {

  data: any = "Pagina log in";

  constructor(){

  }

  ionViewDidLoad() { 
    console.log('ionViewDidLoad LogInPage');    
  }
  
  logIn(){
    alert("ingresa");
  }

}
