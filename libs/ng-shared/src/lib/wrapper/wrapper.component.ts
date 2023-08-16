import {
  Component,
  ElementRef,
  Input,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { WebComponentWrapperOptions } from '../models/web-component-wrapper-options';
import { loadRemoteModule } from '@nx/angular/mf';
import { MaintainComponent } from '../maintain/maintain.component';

@Component({
  selector: 'ng-mf-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent {
  el: ElementRef<HTMLElement> = inject(ElementRef);
  vc = inject(ViewContainerRef);
  @Input() exposedModule?: string;
  @Input() elementName?: string;
  @Input() remoteName?: string;

  async ngAfterContentInit() {
    if (this.exposedModule && this.elementName && this.remoteName) {
      try {
        await loadRemoteModule(this.remoteName, this.exposedModule);
        const element = document.createElement(this.elementName);
        this.el.nativeElement.appendChild(element);
      } catch (error) {
        this.vc.createComponent(MaintainComponent);

        // console.error(error);
      }
    }
  }
}
