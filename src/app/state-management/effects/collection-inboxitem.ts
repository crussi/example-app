import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Database } from '@ngrx/db';
import { Observable } from 'rxjs/Observable';
import { defer } from 'rxjs/observable/defer';
import { of } from 'rxjs/observable/of';

import * as collection from '../actions/collection-inboxitem';
import { InboxItem } from '../../shared/barrel';


@Injectable()
export class CollectionInboxItemEffects {

  /**
   * This effect does not yield any actions back to the store. Set
   * `dispatch` to false to hint to @ngrx/effects that it should
   * ignore any elements of this effect stream.
   *
   * The `defer` observable accepts an observable factory function
   * that is called when the observable is subscribed to.
   * Wrapping the database open call in `defer` makes
   * effect easier to test.
   */
  @Effect({ dispatch: false })
  openDB$: Observable<any> = defer(() => {
    return this.db.open('inboxitems_app');
  });

  /**
   * This effect makes use of the `startWith` operator to trigger
   * the effect immediately on startup.
   */
  @Effect()
  loadCollection$: Observable<Action> = this.actions$
    .ofType(collection.LOAD)
    .startWith(new collection.LoadAction())
    .switchMap(() =>
      this.db.query('inboxitems')
        .toArray()
        .map((inboxitems: InboxItem[]) => new collection.LoadSuccessAction(inboxitems))
        .catch(error => of(new collection.LoadFailAction(error)))
    );

  @Effect()
  addInboxItemToCollection$: Observable<Action> = this.actions$
    .ofType(collection.ADD_INBOXITEM)
    .map((action: collection.AddInboxItemAction) => action.payload)
    .mergeMap(inboxitem =>
      this.db.insert('inboxitems', [ inboxitem ])
        .map(() => new collection.AddInboxItemSuccessAction(inboxitem))
        .catch(() => of(new collection.AddInboxItemFailAction(inboxitem)))
    );


  @Effect()
  removeInboxItemFromCollection$: Observable<Action> = this.actions$
    .ofType(collection.REMOVE_INBOXITEM)
    .map((action: collection.RemoveInboxItemAction) => action.payload)
    .mergeMap(inboxitem =>
      this.db.executeWrite('inboxitems', 'delete', [ inboxitem.id ])
        .map(() => new collection.RemoveInboxItemSuccessAction(inboxitem))
        .catch(() => of(new collection.RemoveInboxItemFailAction(inboxitem)))
    );

    constructor(private actions$: Actions, private db: Database) { }
}
