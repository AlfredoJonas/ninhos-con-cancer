import { Component } from '@angular/core';
import { StateService } from '../../services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  public data: any;

  constructor(
    public state: StateService
  ) {
    this.data = state.data;
    this.state.setRoute('/inicio','Inicio');    
  }

  setRoute(route){
    if(route != this.data.bread_crumb[this.data.bread_crumb.length-1].route){
      this.state.setRoute('/inicio','Inicio');
    }
  }
}
