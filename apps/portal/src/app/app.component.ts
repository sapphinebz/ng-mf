import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { DataStoreModule } from '@ng-mf/data-store';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, DataStoreModule],
  selector: 'ng-mf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portal';
}
