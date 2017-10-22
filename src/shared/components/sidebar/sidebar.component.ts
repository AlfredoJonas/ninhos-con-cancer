import { Component } from '@angular/core';
import { StateService } from '../../services/state/state.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  public data: any;

  constructor(public state: StateService) {
    this.data = state.data;
  }

  setRoute(){
    this.state.setRoute('/inicio','Inicio');
  }
}
