import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeatureComponent, MainComponent, HomeComponent } from './main/components';

import { MenuItem } from './core/models';

const dropdownNavigationData: MenuItem[] = [
  {
    routePath: '/feature/dropdown/overview',
    title: 'Overview',
  },
  {
    routePath: '/feature/dropdown/data-binding',
    title: 'Data binding',
  },
  {
    routePath: '/feature/dropdown/editing',
    title: 'Editing',
  },
  {
    routePath: '/feature/dropdown/filtering',
    title: 'Filtering',
  },
  {
    routePath: '/feature/dropdown/grouping',
    title: 'Grouping',
  },
  {
    routePath: '/feature/dropdown/pagination',
    title: 'Pagination',
  },
  {
    routePath: '/feature/dropdown/sorting',
    title: 'Sorting',
  }
];

const dataTableNavigationData: MenuItem[] = [
  {
    routePath: '/feature/data-table/overview',
    title: 'Overview'
  },
  {
    routePath: '/feature/data-table/client-side-data-binding',
    title: 'Client Side Data Binding',
  },
  {
    routePath: '/feature/data-table/server-side-data-binding',
    title: 'Server Side Data Binding'
  },
  {
    routePath: '/feature/data-table/real-time-data-binding',
    title: 'Real Time Data Binding'
  },
  {
    routePath: '/feature/data-table/pagination',
    title: 'Pagination'
  },
  {
    routePath: '/feature/data-table/column/sorting',
    title: 'Column Sorting'
  },
  {
    routePath: '/feature/data-table/grouping',
    title: 'Row Grouping'
  },
  {
    routePath: '/feature/data-table/column/filtering',
    title: 'Filtering'
  },
  {
    routePath: '/feature/data-table/row-selection',
    title: 'Row Selection'
  },
  {
    routePath: '/feature/data-table/column/resizable',
    title: 'Column Resizing'
  },
  {
    routePath: '/feature/data-table/data-persistence',
    title: 'Data Persistence'
  },
  {
    routePath: '/feature/data-table/substitute-rows',
    title: 'Substitute Rows'
  },
  {
    routePath: '/feature/data-table/loading-spinner',
    title: 'Data Loading Spinner'
  },
  {
    routePath: '/feature/data-table/templates/cell-template',
    title: 'Cell Template'
  },
  {
    routePath: '/feature/data-table/templates/expand-template',
    title: 'Row Expand Template'
  },
  {
    routePath: '/feature/data-table/templates/loading-spinner-template',
    title: 'Loading Spinner Template'
  },
  {
    routePath: '/feature/data-table/templates/no-records-template',
    title: 'No Records Template'
  },
  {
    routePath: '/feature/data-table/limit',
    title: 'Data Limit'
  },
  {
    routePath: '/feature/data-table/header-details',
    title: 'Header Details'
  },
  {
    routePath: '/feature/data-table/responsive-configuration',
    title: 'Responsive Configuration'
  },
  {
    routePath: '/feature/data-table/translations',
    title: 'Translations'
  },
  // {
  //   routePath: '/data-table/events/init',
  //   title: 'init'
  // },
  // {
  //   routePath: '/data-table/events/allRowSelectChange',
  //   title: 'allRowSelectChange'
  // },
  // {
  //   routePath: '/data-table/events/rowBind',
  //   title: 'rowBind'
  // },
  // {
  //   routePath: '/data-table/events/rowSelectChange',
  //   title: 'rowSelectChange'
  // },
  // {
  //   routePath: '/data-table/events/cellBind',
  //   title: 'cellBind'
  // },
  // {
  //   routePath: '/data-table/events/cellClick',
  //   title: 'cellClick'
  // },
  // {
  //   routePath: '/data-table/events/columnBind',
  //   title: 'columnBind'
  // },
  // {
  //   routePath: '/data-table/events/dataBound',
  //   title: 'dataBound'
  // },
  // {
  //   routePath: '/data-table/events/headerClick',
  //   title: 'headerClick'
  // },
  // {
  //   routePath: '/data-table/events/rowClick',
  //   title: 'rowClick'
  // },
  // {
  //   routePath: '/data-table/events/rowDoubleClick',
  //   title: 'rowDoubleClick'
  // }
];

/**
 * Represent application main routes.
 * @type Routes
 */
const appRoutes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: MainComponent,
    path: 'feature',
    children: [
      {
        component: FeatureComponent,
        loadChildren: './feature/data-table/data-table-feature.module#DataTableFeatureModule',
        path: 'data-table',
        data: {
          navigation: dataTableNavigationData
        }
      },
      {
        component: FeatureComponent,
        loadChildren: './feature/dropdown/dropdown-feature.module#DropdownFeatureModule',
        path: 'dropdown',
        data: {
          navigation: dropdownNavigationData
        }
      }
    ]
  },
];

/**
 * Application routing module.
 * @class AppRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)]
})
export class AppRoutingModule {
}

