import { Component, OnInit } from '@angular/core';
import { MenuItem } from './../models/menu-item';
import { HeaderService } from './../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  menuList: MenuItem[] = [
    {
      title: 'menu1',
      path: 'menu1_link_url',
      subMenu: null,
    },
    {
      title: 'menu3',
      path: null,
      subMenu: [
        {
          title: 'submenu3_1',
          path: 'submenu3_1_link_url',
          subMenu: null,
        },
        {
          title: 'submenu3_2',
          path: 'submenu3_1_link_url',
          subMenu: null,
        },
      ],
    },
    {
      title: 'menu2',
      path: null,
      subMenu: [
        {
          title: 'submenu2_1',
          path: 'submenu2_1_link_url',
          subMenu: null,
        },
        {
          title: 'submenu2_2',
          path: 'submenu2_1_link_url',
          subMenu: null,
        },
        {
          title: 'submenu2_2',
          path: 'submenu2_1_link_url',
          subMenu: null,
        },
      ],
    },
  ];

  constructor(private service: HeaderService) {
    this.createMenu(service.menu);
  }

  createMenu(menu: string[][][]) {
    return this.menuList;
  }
}
