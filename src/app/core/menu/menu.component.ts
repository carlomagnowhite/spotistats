import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

export interface IMenu {
  title:string,
  url:string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  isMainRoute: boolean = false;

  expanded: boolean = true;

  menu: IMenu[] = [
    {title:'Buscar', url:'/search'},
    {title:'Artistas', url:'/artists'},
    {title:'Álbumes', url:'/albums'},
    {title:'Canciones', url:'/songs'},
    {title:`TOP's`, url:'/tops'},
    {title:'Nuevos', url: '/info'},
    {title:'Mi cuenta', url:'/my-account'},
    {title:'Mis PlayLists', url:'/user-playlist'},
    {title:'Estadísticas', url:'/user-stats'},
  ];


  constructor(private router: Router) { }

  getMenuByUrl(url:string):IMenu {
    return this.menu.find(
      (menu) => menu.url.toLowerCase() === url.toLowerCase()
    ) as IMenu
  }

}
