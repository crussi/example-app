import * as wizard from '../../state-management/actions/wizard';
import { StepState, StepEnum, WizStateChange } from '../../shared/barrel';
export interface State {
  readonly loaded: boolean;
  //readonly stepStates: StepState[];
  readonly stepStates: Array<StepState>;
}

const initialState: State = {
  loaded: false,
  stepStates:[]
};

export function reducer(state = initialState, action: wizard.Actions): State {
  switch (action.type) {
    case wizard.LOAD: {
      const s = action.payload;
      //console.log('wizard.LOAD',s);
      //console.log('wizard LOAD prev state',state);
      let obj = Object.assign({}, state, {
        loaded: true,
        stepStates: s.map(ss => ss)
      });  
      console.log('wizard LOAD new state',obj);
      return obj;
    }

    // case wizard.LOAD_SUCCESS: {
    //   const s = action.payload;

    //   return {
    //     loaded: true,
    //     loading: false,
    //     test: false,
    //     stepStates: s.map(ss => ss)
    //   };
    // }

    case wizard.STATECHANGE:
      const s = action.payload;
      let name = StepEnum[s.Step];
      let idx = state.stepStates.findIndex(function(el){return el.Step==name});
      //console.log('idx',idx);
      //console.log('wizard.STATECHANGE payload',s);
      //console.log('wizard STATECHANGE prev state',state);
      let obj = Object.assign({}, state, {
        loaded: true,
        stepStates: state.stepStates.slice(0,idx).concat(new StepState(name,s.Value))
        .concat(state.stepStates.slice(idx+1)) 
        }
      );  
      console.log('wizard STATECHANGE new state',obj);
      return obj;

    default:
      return state;
  }
}

//export const getTest = (state: State) => state.test;

export const getLoaded = (state: State) => state.loaded;

//export const getLoading = (state: State) => state.loading;

