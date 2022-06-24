import { Component } from '@angular/core';
import { faUserLargeSlash, faHouse, faDashboard, faComputer, faStore, faCartShopping, faChartSimple, faGears } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  faUserSlash = faUserLargeSlash;
  faHouse = faHouse;
  faDashboard = faDashboard;
  faComputer = faComputer;
  faPedido = faStore;
  faCompra = faCartShopping;
  faReportes = faChartSimple;
  faConfiguracion = faGears;

  constructor() { }

  ngOnInit(): void {
  }

}
