import { Component } from '@angular/core';
import { SideNavToggle } from '../shared/sidenav/nav-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.isSideNavCollapsed = data.collapsed;
    this.screenWidth = data.screenWidth;
  }

  getBodyClass(): string {
    let bodyStyleClass = '';

    if (this.isSideNavCollapsed && this.screenWidth > 768) {
      bodyStyleClass = 'dashboard__body-trimmed';
    } else if (
      this.isSideNavCollapsed &&
      this.screenWidth <= 768 &&
      this.screenWidth > 0
    ) {
      bodyStyleClass = 'dashboard__body-md-screen';
    }
    return bodyStyleClass;
  }
}
