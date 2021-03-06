import { Routes } from '@angular/router';

import { BookExistsGuard } from './guards/book-exists';
import { FindBookPageComponent } from './containers/find-book-page';
import { InboxBeginnerPageComponent } from './containers/inbox-beginner-page';
import { ViewBookPageComponent } from './containers/view-book-page';
import { CollectionPageComponent } from './containers/collection-page';
import { CollectionInboxItemPageComponent } from './containers/collection-inboxitem-page';
import { NotFoundPageComponent } from './containers/not-found-page';

export const routes: Routes = [
  {
    path: '',
    component: CollectionPageComponent
  },
  {
    path: 'inbox',
    component: CollectionInboxItemPageComponent
  },  
  {
    path: 'book/find',
    component: FindBookPageComponent
  },
  {
    path: 'book/:id',
    canActivate: [ BookExistsGuard ],
    component: ViewBookPageComponent
  },
  {
    path: 'wizard',
    component: InboxBeginnerPageComponent
  }, 
  {
    path: '**',
    component: NotFoundPageComponent
  }
];
