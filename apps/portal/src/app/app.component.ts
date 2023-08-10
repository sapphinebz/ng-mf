import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { DataStoreModule } from '@ng-mf/data-store';
import { loadRemoteModule } from '@nx/angular/mf';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, DataStoreModule],
  selector: 'ng-mf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'portal';

  ngOnInit(): void {
    loadRemoteModule('mfe-react', './Module').then((value) => {
      console.log(value);
    });
  }
}
