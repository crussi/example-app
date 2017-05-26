import 'rxjs/add/operator/let';
import 'rxjs/add/operator/take';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../state-management/reducers';
import { InboxService } from '../services/inbox.service';
import { InboxItem } from '../shared/barrel';
//import * as book from '../state-management/actions/book';
//import { Book } from '../models/book';


@Component({
  selector: 'bc-inbox-beginner-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <beginner-wizard [inboxItem]="inboxItem" 
                  (onInboxItemProcessed)="onInboxItemProcessed($event)"
                  
                  ></beginner-wizard>    
  `
})
export class InboxBeginnerPageComponent implements OnInit {
  //searchQuery$: Observable<string>;
  //books$: Observable<Book[]>;
  inboxItems$: Observable<InboxItem[]>;
  //loading$: Observable<boolean>;
  //steps:any = {};
  inboxItem:any = {};
  //inboxItems: InboxItem[];
  index = 0;

  constructor(private store: Store<fromRoot.State>,
              private inboxService: InboxService) {
    //this.searchQuery$ = store.select(fromRoot.getSearchQuery).take(1);
    //this.books$ = store.select(fromRoot.getSearchResults);
    this.inboxItems$ = store.select(fromRoot.getInboxItems);
    //this.loading$ = store.select(fromRoot.getSearchLoading);
    
  }

  ngOnInit() {
    //this.inboxService.getInboxItems().subscribe(ary => this.inboxItems = ary);
    
    // if (this.inboxItems.length) {
    //   this.inboxItem = this.inboxItems[this.index];
    // }    
    this.getNextItem();
  }

  onInboxItemProcessed(event:any){
    this.getNextItem();
  }  

  private getNextItem() {
    console.log('getNextItem');
    this.inboxItems$.subscribe(items => {
      console.log('getNextItem subscribe =>');
      if (++this.index <= items.length) {
        this.inboxItem = items[this.index];
        console.log('inbox-beginner-page this.inboxItem',this.inboxItem);
      }
    });    
  }

//   search(query: string) {
//     this.store.dispatch(new book.SearchAction(query));
//   }
}
