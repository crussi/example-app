import 'rxjs/add/operator/let';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../state-management/reducers';
import { InboxItem } from '../shared/barrel';


@Component({
  selector: 'bc-collection-inboxitem-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <md-card>
      <md-card-title>Inbox</md-card-title>
    </md-card>

    <bc-inboxitem-preview-list [inboxitems]="inboxitems$ | async"></bc-inboxitem-preview-list>
  `,
  /**
   * Container components are permitted to have just enough styles
   * to bring the view together. If the number of styles grow,
   * consider breaking them out into presentational
   * components.
   */
  styles: [`
    md-card-title {
      display: flex;
      justify-content: center;
    }
  `]
})
export class CollectionInboxItemPageComponent {
  inboxitems$: Observable<InboxItem[]>;

  constructor(store: Store<fromRoot.State>) {
    this.inboxitems$ = store.select(fromRoot.getInboxItemCollection);
  }
}
