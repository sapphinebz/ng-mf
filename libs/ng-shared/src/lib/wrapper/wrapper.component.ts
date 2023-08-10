import { Component, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { WebComponentWrapperOptions } from '../models/web-component-wrapper-options';
import { loadRemoteModule } from '@nx/angular/mf';

@Component({
  selector: 'ng-mf-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent {
  el: ElementRef<HTMLElement> = inject(ElementRef);
  route = inject(ActivatedRoute);
  async ngAfterContentInit() {
    const options = this.route.snapshot.data as WebComponentWrapperOptions;

    try {
      await loadRemoteModule(options.remoteName, options.exposedModule);
      const element = document.createElement(options.elementName);
      this.el.nativeElement.appendChild(element);
    } catch (error) {
      console.error(error);
    }
  }
}
