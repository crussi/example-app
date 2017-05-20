import * as wizard from '../../state-management/actions/wizard';

export interface State {
  test: boolean;
  //IsActionable: StepEnum;
}

const initialState: State = {
  test: false,
};

export function reducer(state = initialState, action: wizard.Actions): State {
  switch (action.type) {
    case wizard.STATECHANGE:
      console.log('wizard reducer',action.payload);
      return {
        test: true
      };

    default:
      console.log('wizard reducer default');
      return state;
  }
}

export const getTest = (state: State) => state.test;
