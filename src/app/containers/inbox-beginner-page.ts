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
import * as action from '../state-management/actions/inboxitem';


@Component({
  selector: 'bc-inbox-beginner-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <beginner-wizard [inboxItem]="inboxItem$ | async" 
                  (onInboxItemProcessed)="onInboxItemProcessed()"
                  
                  ></beginner-wizard>    
  `
})
export class InboxBeginnerPageComponent implements OnInit {
  //searchQuery$: Observable<string>;
  //books$: Observable<Book[]>;
  //inboxItems$: Observable<InboxItem[]>;
  //loading$: Observable<boolean>;
  //steps:any = {};
  //inboxItem:any = {};
  inboxItem$: Observable<InboxItem>;
  //inboxItems: InboxItem[];
  index = 0;
  test: InboxItem;
  constructor(private store: Store<fromRoot.State>,
              private inboxService: InboxService) {
    //this.searchQuery$ = store.select(fromRoot.getSearchQuery).take(1);
    //this.books$ = store.select(fromRoot.getSearchResults);
    //this.store.dispatch(new action.SearchAction(""));
    //this.store.dispatch(new action.SelectAction("1"));
    //this.loading$ = store.select(fromRoot.getSearchLoading);
    
  }

  ngOnInit() {
    //this.inboxService.getInboxItems().subscribe(ary => this.inboxItems = ary);
    
    // if (this.inboxItems.length) {
    //   this.inboxItem = this.inboxItems[this.index];
    // }  
    //console.log('fromRoot.getSelectedInboxItem:',fromRoot.getSelectedInboxItem);
    this.inboxItem$ = this.store.select(fromRoot.getSelectedInboxItem);
    //this.store.select(fromRoot.getSelectedInboxItem).subscribe(x => {this.test = x; console.log('this.test: ',this.test)});
    //console.log('inbox-beginner-page ctr this.inboxItem$',this.inboxItem$);
  }

  onInboxItemProcessed(){
    console.log('******** emit new inboxitem.SelectAction ********');
    this.store.dispatch(new action.SelectAction());
  }  



//   search(query: string) {
//     this.store.dispatch(new book.SearchAction(query));
//   }
}
