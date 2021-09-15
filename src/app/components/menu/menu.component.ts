import { MenuItem } from '@models/menu-item.model';
import { ROUTES } from '@router/app-routing.module';
import { Component, OnInit } from '@angular/core';
import { i18nMenuPath, i18nSettingsPath, i18nKeys, linkedinURI, githubURI } from './config';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  isMenuVisible = true;
  menu: MenuItem[];

  i18nKeys = i18nKeys;
  i18nMenuPath: string = i18nMenuPath;
  i18nSettingsPath: string = i18nSettingsPath;

  linkedinURI = linkedinURI;
  githubURI = githubURI;

  constructor() { }

  ngOnInit(): void {
    this.menu = ROUTES.map<MenuItem>(r =>
      new MenuItem(r.data.titleI18nKey, r.path)
    );
  }

  isActivePage(item: MenuItem): boolean {
    return ('/' + item.pathname) === window.location.pathname;
  }

  getMenuItemLogoSrc(item: MenuItem): string {
    const pathname = item.pathname ? item.pathname : 'about-me';
    return `assets/images/${pathname}/logo.png`;
  }
}
