import { Component, Input } from '@angular/core';
import { InboxItem } from '../shared/barrel';

@Component({
  selector: 'bc-inboxitem-preview-list',
  template: `
    <bc-inboxitem-preview *ngFor="let inboxitem of inboxitems" [inboxitem]="inboxitem"></bc-inboxitem-preview>
  `,
  styles: [`
    :host {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  `]
})
export class InboxItemPreviewListComponent {
  @Input() inboxitems: InboxItem[];
}
