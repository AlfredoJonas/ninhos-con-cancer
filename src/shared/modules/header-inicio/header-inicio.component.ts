import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-header-inicio',
    templateUrl: './header-inicio.component.html',
    styleUrls: ['./header-inicio.component.scss']
})
export class HeaderInicioComponent implements OnInit {

    pushRightClass: string = 'push-right';
    
    constructor( public router: Router) {
        
    }

    ngOnInit() {}

}
