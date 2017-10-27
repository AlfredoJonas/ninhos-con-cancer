import { Component } from '@angular/core';
import { slideToRight } from '../../app/router.animations';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['not-found.component.scss'],
    animations: [slideToRight()]
})
export class NotFoundComponent { }
