import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { PaginatorComponent } from '../paginator/paginator.component';

export const remoteRoutes: Route[] = [
  { path: '', component: RemoteEntryComponent },
  {
    path: 'paginator',
    component: PaginatorComponent,
  },
];
