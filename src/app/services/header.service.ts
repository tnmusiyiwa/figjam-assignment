import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  menu: string[][][];
  pageTitle: string;

  constructor() {
    this.pageTitle = 'Page Title';
    this.menu = this.getMenu();
  }

  getMenu() {
    return [
      [['menu1', 'menu1_link_url']],
      [
        ['menu3'],
        ['submenu3_1', 'submenu3_1_link_url'],
        ['submenu3_2', 'submenu3_2_link_url'],
      ],
      [
        ['menu2'],
        ['submenu2_1', 'submenu2_1_link_url'],
        ['submenu2_2', 'submenu2_2_link_url'],
        ['submenu2_3', 'submenu2_3_link_url'],
      ],
    ];
  }

  getTitle() {
    return this.pageTitle;
  }
}
