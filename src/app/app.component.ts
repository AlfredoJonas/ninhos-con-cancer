import { Component } from '@angular/core';
import { StateService } from '../shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ StateService ]
})
export class AppComponent {

  public data: any;

  constructor(public state: StateService) {
    this.data = state.data;
  }
}
