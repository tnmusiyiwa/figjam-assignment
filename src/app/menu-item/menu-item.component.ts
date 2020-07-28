import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MenuItem } from './../models/menu-item';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent implements OnInit {
  @Input('subMenu') subMenu: MenuItem[];
  @ViewChild('childMenu') public childMenu;

  constructor() {}

  ngOnInit(): void {}
}
