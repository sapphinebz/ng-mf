import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { defer } from 'rxjs';
import { loadRemoteModule } from '@nx/angular/mf';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from '@ng-mf/ng-shared';
// import { loadRemoteModule } from '@nx/angular/mf';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, CommonModule, WrapperComponent],
  selector: 'ng-mf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'portal';

  paginatorComponent$ = defer(async () => {
    const component = await loadRemoteModule(
      'mfe1',
      './PaginatorComponent'
    ).then((m) => m.PaginatorComponent);
    return component;
  });

  ngOnInit(): void {
    // loadRemoteModule('mfe-react', './Module').then((value) => {
    //   console.log(value);
    // });
  }
}
