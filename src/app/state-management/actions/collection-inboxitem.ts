import { Action } from '@ngrx/store';
//import { Book } from '../../models/book';
import { InboxItem } from '../../shared/models/inbox.model';


export const ADD_INBOXITEM =             '[Collection] Add InboxItem';
export const ADD_INBOXITEM_SUCCESS =     '[Collection] Add InboxItem Success';
export const ADD_INBOXITEM_FAIL =        '[Collection] Add InboxItem Fail';
export const REMOVE_INBOXITEM =          '[Collection] Remove InboxItem';
export const REMOVE_INBOXITEM_SUCCESS =  '[Collection] Remove InboxItem Success';
export const REMOVE_INBOXITEM_FAIL =     '[Collection] Remove InboxItem Fail';
export const LOAD =                 '[Collection] Load';
export const LOAD_SUCCESS =         '[Collection] Load Success';
export const LOAD_FAIL =            '[Collection] Load Fail';


/**
 * Add InboxItem to Collection Actions
 */
export class AddInboxItemAction implements Action {
  readonly type = ADD_INBOXITEM;

  constructor(public payload: InboxItem) { }
}

export class AddInboxItemSuccessAction implements Action {
  readonly type = ADD_INBOXITEM_SUCCESS;

  constructor(public payload: InboxItem) { }
}

export class AddInboxItemFailAction implements Action {
  readonly type = ADD_INBOXITEM_FAIL;

  constructor(public payload: InboxItem) { }
}


/**
 * Remove InboxItem from Collection Actions
 */
export class RemoveInboxItemAction implements Action {
  readonly type = REMOVE_INBOXITEM;

  constructor(public payload: InboxItem) { }
}

export class RemoveInboxItemSuccessAction implements Action {
  readonly type = REMOVE_INBOXITEM_SUCCESS;

  constructor(public payload: InboxItem) { }
}

export class RemoveInboxItemFailAction implements Action {
  readonly type = REMOVE_INBOXITEM_FAIL;

  constructor(public payload: InboxItem) {}
}

/**
 * Load Collection Actions
 */
export class LoadAction implements Action {
  readonly type = LOAD;
  constructor(){
    //console.log('collection LoadAction');
  }
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: InboxItem[]) { }
}

export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) { }
}


export type Actions
  = AddInboxItemAction
  | AddInboxItemSuccessAction
  | AddInboxItemFailAction
  | RemoveInboxItemAction
  | RemoveInboxItemSuccessAction
  | RemoveInboxItemFailAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction;
