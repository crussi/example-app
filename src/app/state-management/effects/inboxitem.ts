import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

//import { GoogleBooksService } from '../../services/google-books';
import { InboxService } from '../../services/inbox.service';
import * as inboxitem from '../actions/inboxitem';
import { InboxItem } from '../../shared/barrel';

/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application.
 * The `toPayload` helper function returns just
 * the payload of the currently dispatched action, useful in
 * instances where the current state is not necessary.
 *
 * Documentation on `toPayload` can be found here:
 * https://github.com/ngrx/effects/blob/master/docs/api.md#topayload
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class InboxItemEffects {

  /**
   * This effect makes use of the `startWith` operator to trigger
   * the effect immediately on startup.
   */

  @Effect()
  search$: Observable<Action> = this.actions$
    .ofType(inboxitem.SEARCH)
    .startWith(new inboxitem.SearchAction(""))
    .debounceTime(300)
    .map(toPayload)
    .switchMap(query => {
      // if (query === '') {
      //   return empty();
      // }

      const nextSearch$ = this.actions$.ofType(inboxitem.SEARCH).skip(1);
      //console.log('Effects before getInboxItems',this.inboxService.getInboxItems());
      return this.inboxService.getInboxItems()
        //.takeUntil(nextSearch$)
        .map(inboxitems => new inboxitem.SearchCompleteAction(inboxitems))
        //.catch(() => of(new inboxitem.SearchCompleteAction([])));
    });

    constructor(private actions$: Actions, private inboxService: InboxService) { }
}
