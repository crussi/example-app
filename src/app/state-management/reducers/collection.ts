import * as collection from '../../state-management/actions/collection';


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
      console.log('collection LOAD');
      return Object.assign({}, state, {
        loading: true
      });
    }

    case collection.LOAD_SUCCESS: {
      const books = action.payload;
      console.log('collection LOAD_SUCCESS');

      return {
        loaded: true,
        loading: false,
        ids: books.map(book => book.id)
      };
    }

    case collection.ADD_BOOK_SUCCESS:
    case collection.REMOVE_BOOK_FAIL: {
      const book = action.payload;
      console.log('collection ADD_BOOK_SUCCESS, REMOVE_BOOK_FAIL');

      if (state.ids.indexOf(book.id) > -1) {
        return state;
      }

      return Object.assign({}, state, {
        ids: [ ...state.ids, book.id ]
      });
    }

    case collection.REMOVE_BOOK_SUCCESS:
    case collection.ADD_BOOK_FAIL: {
      const book = action.payload;
      console.log('collection REMOVE_BOOK_SUCCESS, ADD_BOOK_FAIL');

      return Object.assign({}, state, {
        ids: state.ids.filter(id => id !== book.id)
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
