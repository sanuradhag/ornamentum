import { Component, Input } from '@angular/core';

import { MenuItem } from '../../models';

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss']
})
export class LeftNavigationComponent {
  @Input()
  public menuItems: MenuItem[];
}
