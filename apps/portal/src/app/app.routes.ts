import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';
import { WrapperComponent } from '@ng-mf/ng-shared';

export const appRoutes: Route[] = [
  {
    path: 'mfe3',
    loadChildren: () =>
      loadRemoteModule('mfe3', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'mfe2',
    loadChildren: () =>
      loadRemoteModule('mfe2', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'mfe1',
    loadChildren: () =>
      loadRemoteModule('mfe1', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'angular14-remote',
    loadChildren: () =>
      loadRemoteModule('angular14-remote', './Routes').then(
        (m) => m.remoteRoutes
      ),
  },
  {
    path: 'mfe-react',
    component: WrapperComponent,
    data: {
      remoteName: 'mfe-react',
      exposedModule: './Module',
      elementName: 'react-element',
    },
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
