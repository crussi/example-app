import * as collection from '../../state-management/actions/collection-inboxitem';


export interface State {
  loaded: boolean;
  loading: boolean;
  ids: string[];
};

const initialState: State = {
  loaded: false,
  loading: false,
  ids: []
};

export function reducer(state = initialState, action: collection.Actions): State {
  switch (action.type) {
    case collection.LOAD: {
      //console.log('collection LOAD');
      return Object.assign({}, state, {
        loading: true
      });
    }

    case collection.LOAD_SUCCESS: {
      const inboxitems = action.payload;
      //console.log('collection LOAD_SUCCESS');

      return {
        loaded: true,
        loading: false,
        ids: inboxitems.map(inboxitem => inboxitem.id)
      };
    }

    case collection.ADD_INBOXITEM_SUCCESS:
    case collection.REMOVE_INBOXITEM_FAIL: {
      const inboxitem = action.payload;
      console.log('collection ADD_INBOXITEM_SUCCESS, REMOVE_INBOXITEM_FAIL');

      if (state.ids.indexOf(inboxitem.id) > -1) {
        return state;
      }

      return Object.assign({}, state, {
        ids: [ ...state.ids, inboxitem.id ]
      });
    }

    case collection.REMOVE_INBOXITEM_SUCCESS:
    case collection.ADD_INBOXITEM_FAIL: {
      const inboxitem = action.payload;
      console.log('collection REMOVE_INBOXITEM_SUCCESS, ADD_INBOXITEM_FAIL');

      return Object.assign({}, state, {
        ids: state.ids.filter(id => id !== inboxitem.id)
      });
    }

    default: {
      return state;
    }
  }
}


export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getIds = (state: State) => state.ids;
