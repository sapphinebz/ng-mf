import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-mf-maintain',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './maintain.component.html',
  styleUrls: ['./maintain.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaintainComponent {}
