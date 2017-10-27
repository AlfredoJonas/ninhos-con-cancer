import { Component, OnInit } from '@angular/core';
import { slideToTop } from '../../app/router.animations';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [slideToTop()]
})
export class SignupComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}
