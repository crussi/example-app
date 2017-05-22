import { Action } from '@ngrx/store';
import { WizStateChange, StepTransition, StepState } from '../../shared/barrel';
export const STATECHANGE = '[Wizard] State Change';
export const LOAD = '[Wizard] Load';
// export const LOAD_SUCCESS = '[Wizard] Load Success';
// export const LOAD_FAIL = '[Wizard] Load Fail';

export class LoadAction implements Action {
  readonly type = LOAD;
  constructor(public payload: Array<StepState>) {
    //console.log('Wizard LoadAction payload: ',payload);
   }
}
export class StateChangeAction implements Action {
  readonly type = STATECHANGE;
  constructor(public payload: WizStateChange) { 
    //console.log('Wizard STATECHANGE payload',payload);
  }
}

// export class LoadSuccessAction implements Action {
//   readonly type = LOAD_SUCCESS;

//   constructor(public payload: string[]) { }
// }

// export class LoadFailAction implements Action {
//   readonly type = LOAD_FAIL;

//   constructor(public payload: any) { }
// }

export type Actions 
= StateChangeAction
| LoadAction;
// | LoadSuccessAction
// | LoadFailAction;