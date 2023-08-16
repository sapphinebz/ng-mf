import {
  Component,
  ComponentRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  AsyncSubject,
  EMPTY,
  Observable,
  ReplaySubject,
  defer,
  from,
  fromEvent,
  switchMap,
  takeUntil,
} from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { loadRemoteModule } from '@nx/angular/mf';
import { CommonModule, DOCUMENT } from '@angular/common';
import { WrapperComponent } from '@ng-mf/ng-shared';
import { dispatch, store } from '@ng-mf/store';
@Component({
  selector: 'ng-mf-nx-welcome',
  standalone: true,
  imports: [CommonModule, WrapperComponent],
  template: `
    <div>
      <ng-container *ngComponentOutlet="paginatorComponent$ | async">
      </ng-container>
      <ng-mf-wrapper
        remoteName="mfe-react"
        exposedModule="./PokemonList"
        elementName="pokemon-list-element"
      ></ng-mf-wrapper>
      <div #filterVc></div>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit, OnDestroy {
  @ViewChild('filterVc', { read: ViewContainerRef, static: false })
  set filterVc(vc: ViewContainerRef | undefined) {
    this.filterVcChange.next(vc);
  }
  onDestroy$ = new AsyncSubject<void>();

  title = 'portal';

  paginatorComponent$ = defer(async () => {
    const component = await loadRemoteModule(
      'mfe1',
      './PaginatorComponent'
    ).then((m) => m.PaginatorComponent);
    return component;
  });

  // filterInputs = {
  //   inputFn: (value: string) => {
  //     console.log(value);
  //   },
  // };

  filterVcChange = new ReplaySubject<ViewContainerRef | undefined>(1);

  filterComponent$ = defer(async () => {
    const component = await loadRemoteModule(
      'angular14-remote',
      './FilterComponent'
    ).then((m) => m.FilterComponent);
    return component;
  });

  document = inject(DOCUMENT);

  ngOnInit(): void {
    let compRef: ComponentRef<any>;
    this.filterVcChange
      .pipe(
        switchMap((vc) => {
          if (vc) {
            return from(
              loadRemoteModule('angular14-remote', './FilterComponent').then(
                (m) => m.FilterComponent
              )
            ).pipe(
              switchMap((Component) => {
                compRef = vc.createComponent<any>(Component);
                return fromEvent<CustomEvent>(
                  compRef.location.nativeElement,
                  'inputChange'
                ).pipe(map((event) => event.detail));
              }),
              tap({
                unsubscribe: () => {
                  compRef.destroy();
                },
              })
            );
          }
          return EMPTY;
        })
      )
      .subscribe((filterText) => {
        dispatch({
          filterText,
        });
      });
    // store.pipe(takeUntil(this.onDestroy$)).subscribe((state) => {
    //   console.log('dispatch');
    //   this.document.dispatchEvent(
    //     new CustomEvent('storeUpdated', { detail: state })
    //   );
    // });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
