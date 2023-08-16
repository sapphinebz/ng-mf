import { Component, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';
@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'ng-mf-mfe1-entry',
  templateUrl: './entry.component.html',
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class RemoteEntryComponent {}
