import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  buttons: any[] = [
    {
      route: '/home',
      selected: true
    },
    {
      route: '/components',
      selected: false
    },
    {
      route: '/colors',
      selected: false
    },
    {
      route: '/account',
      selected: false
    },
    {
      route: '/settings',
      selected: false
    },
    {
      route: '/test',
      selected: false
    },


  ]

  constructor() {}

  onClickSidebarButtons(index: number) : void
  {
      for(let i=0; i < this.buttons.length; i++)
      {
        this.buttons[i].selected = false;
      }

      this.buttons[index].selected = true;
  }
}
