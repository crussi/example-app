import 'rxjs/add/operator/let';
import 'rxjs/add/operator/take';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../state-management/reducers';
//import * as book from '../state-management/actions/book';
//import { Book } from '../models/book';


@Component({
  selector: 'bc-inbox-beginner-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <beginner-wizard [steps]="steps" 
                  [inboxItem]="inboxItem" 
                  (onInboxItemProcessed)="onInboxItemProcessed($event)"
                  
                  ></beginner-wizard>    
  `
})
export class InboxBeginnerPageComponent {
  //searchQuery$: Observable<string>;
  //books$: Observable<Book[]>;
  //loading$: Observable<boolean>;
  steps:any = {};
  inboxItem:any = {};
  constructor(private store: Store<fromRoot.State>) {
    //this.searchQuery$ = store.select(fromRoot.getSearchQuery).take(1);
    //this.books$ = store.select(fromRoot.getSearchResults);
    //this.loading$ = store.select(fromRoot.getSearchLoading);
  }

//   search(query: string) {
//     this.store.dispatch(new book.SearchAction(query));
//   }
}
