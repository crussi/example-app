import * as wizard from '../../state-management/actions/wizard';


export interface State {
  test: boolean;
}

const initialState: State = {
  test: false,
};

export function reducer(state = initialState, action: wizard.Actions): State {
  switch (action.type) {
    case wizard.TEST:
      console.log('wizard reducer');
      return {
        test: true
      };

    default:
      return state;
  }
}

export const getTest = (state: State) => state.test;
