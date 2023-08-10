import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';
import { DataStoreModule } from '@ng-mf/data-store';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent, DataStoreModule],
  selector: 'ng-mf-mfe3-entry',
  template: `<ng-mf-nx-welcome></ng-mf-nx-welcome>`,
})
export class RemoteEntryComponent {}
