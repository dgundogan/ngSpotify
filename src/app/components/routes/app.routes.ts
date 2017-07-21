import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from '../search/search.component';
import {AboutComponent} from '../about/about.component';

const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  },
];

// - Updated Export
export const routing = RouterModule.forRoot(routes);