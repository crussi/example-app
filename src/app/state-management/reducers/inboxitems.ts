import { createSelector } from 'reselect';
import { InboxItem } from '../../shared/barrel';
import * as inboxItem from '../../state-management/actions/inboxitem';
import * as collection from '../../state-management/actions/collection';


export interface State {
  ids: string[];
  entities: { [id: string]: InboxItem };
  selectedInboxItemId: string | null;
};

export const initialState: State = {
  ids: [],
  entities: {},
  selectedInboxItemId: null,
};

export function reducer(state = initialState, action: inboxItem.Actions | collection.Actions): State {
  switch (action.type) {
    //case collection.LOAD_SUCCESS:
    case inboxItem.SEARCH_COMPLETE:
     {
      const inboxItems:InboxItem[] = action.payload;
      const newInboxItems = inboxItems.filter(inboxItem => !state.entities[inboxItem.id]);

      const newInboxItemIds = newInboxItems.map(inboxItem => inboxItem.id);
      const newInboxItemEntities = newInboxItems.reduce((entities: { [id: string]: InboxItem }, inboxItem: InboxItem) => {
        return Object.assign(entities, {
          [inboxItem.id]: inboxItem
        });
      }, {});

      return {
        ids: [ ...state.ids, ...newInboxItemIds ],
        entities: Object.assign({}, state.entities, newInboxItemEntities),
        selectedInboxItemId: state.selectedInboxItemId
      };
    }

    case inboxItem.LOAD: {
      const inboxItem = action.payload;

      if (state.ids.indexOf(inboxItem.id) > -1) {
        return state;
      }

      return {
        ids: [ ...state.ids, inboxItem.id ],
        entities: Object.assign({}, state.entities, {
          [inboxItem.id]: inboxItem
        }),
        selectedInboxItemId: state.selectedInboxItemId
      };
    }

    case inboxItem.SELECT: {
      return {
        ids: state.ids,
        entities: state.entities,
        selectedInboxItemId: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

export const getSelectedId = (state: State) => state.selectedInboxItemId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
  return entities[selectedId];
});

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});
