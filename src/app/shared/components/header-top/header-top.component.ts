import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutService } from '../../services/layout.service';
import { NavigationService } from '../../services/navigation.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html'
})
export class HeaderTopComponent implements OnInit, OnDestroy {
  layoutConf: any;
  menuItems: any;
  menuItemSub: Subscription;
  egretThemes: any[] = [];

  constructor(
    private layout: LayoutService,
    private navService: NavigationService,
    public themeService: ThemeService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.layoutConf = this.layout.layoutConf;
    this.egretThemes = this.themeService.egretThemes;
    this.menuItemSub = this.navService.menuItems$.subscribe(res => {
      res = res.filter(
        item => item.type !== 'icon' && item.type !== 'separator'
      );
      const limit = 4;
      const mainItems: any[] = res.slice(0, limit);
      if (res.length <= limit) {
        return (this.menuItems = mainItems);
      }
      const subItems: any[] = res.slice(limit, res.length - 1);
      mainItems.push({
        name: 'More',
        type: 'dropDown',
        tooltip: 'More',
        icon: 'more_horiz',
        sub: subItems
      });
      this.menuItems = mainItems;
    });
  }
  ngOnDestroy() {
    this.menuItemSub.unsubscribe();
  }
  changeTheme(theme: { name: any; }) {
    this.layout.publishLayoutChange({matTheme: theme.name});
  }
  toggleSidenav() {
    if (this.layoutConf.sidebarStyle === 'closed') {
      return this.layout.publishLayoutChange({
        sidebarStyle: 'full'
      });
    }
    this.layout.publishLayoutChange({
      sidebarStyle: 'closed'
    });
  }
}
