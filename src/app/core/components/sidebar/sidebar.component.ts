import { Component, OnInit } from '@angular/core';
import { Acces } from '../../models/acess';
import { Menus } from '../../models/menus';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  menus: Menus[] = [];

  ngOnInit(): void {
    this.getMenus();
  }

  getMenus(): void {
    this.menus = [
      {
        name: 'Compra',
        icon: 'bx bxs-shopping-bag-alt',
        childrens: [
          { accesId: 1, name: 'Proyectos', path: '/projects', status: 'A' },
        ],
      },
      {
        name: 'Venta',
        icon: 'bx bxs-purchase-tag',
        childrens: [
          { accesId: 1, name: 'Estadisticas', path: '/sales', status: 'A' },
        ],
      },
    ];
  }
}
