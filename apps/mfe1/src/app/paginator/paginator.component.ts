import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { dispatch } from '@ng-mf/store';
@Component({
  selector: 'ng-mf-paginator',
  standalone: true,
  imports: [CommonModule, PaginatorModule],
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  rows = 10;
  document = inject(DOCUMENT);

  ngOnInit(): void {
    dispatch({
      paginatorState: {
        page: 0,
        first: 0,
        rows: this.rows,
        pageCount: 12,
      },
    });
  }

  onPageChange(event: PaginatorState) {
    dispatch({
      paginatorState: event,
    });
  }
}
