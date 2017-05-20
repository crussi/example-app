import 'rxjs/add/operator/let';
import 'rxjs/add/operator/take';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../state-management/reducers';
import { InboxService } from '../services/inbox.service';
import { InboxItem } from '../models/inbox';
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
export class InboxBeginnerPageComponent implements OnInit {
  //searchQuery$: Observable<string>;
  //books$: Observable<Book[]>;
  //loading$: Observable<boolean>;
  steps:any = {};
  inboxItem:any = {};
  inboxItems: InboxItem[];
  index = 0;

  constructor(private store: Store<fromRoot.State>,
              private inboxService: InboxService) {
    //this.searchQuery$ = store.select(fromRoot.getSearchQuery).take(1);
    //this.books$ = store.select(fromRoot.getSearchResults);
    //this.loading$ = store.select(fromRoot.getSearchLoading);
  }

  ngOnInit() {
    this.inboxItems = this.inboxService.getInboxItems();
    if (this.inboxItems.length) {
      this.inboxItem = this.inboxItems[this.index];
    }    
  }

  onInboxItemProcessed(event:any){
    console.log('app.component done!',event);
    if (++this.index <= this.steps.length) {
      console.log('set new inboxItem');
      this.inboxItem = this.inboxItems[this.index];
    }
  }  

//   search(query: string) {
//     this.store.dispatch(new book.SearchAction(query));
//   }
}
