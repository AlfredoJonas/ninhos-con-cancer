import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { slideToTop } from '../../app/router.animations';
import * as $ from 'jquery';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    animations: [slideToTop()]    
})
export class LayoutComponent implements OnInit {

    constructor(public router: Router) { }

    ngOnInit() {
        if (this.router.url === '/') {
            this.router.navigate(['/tablero']);
        }
    }

}
