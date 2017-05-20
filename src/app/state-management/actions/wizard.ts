import { Action } from '@ngrx/store';
import { WizStateChange, StepTransition } from '../../wizards/beginner/step.model';
export const STATECHANGE =   '[Wizard] State Change';

export class StateChangeAction implements Action {
  readonly type = STATECHANGE;
  constructor(public payload: WizStateChange) { 
    console.log('Wizard STATECHANGE payload',payload);
  }
}


export type Actions = StateChangeAction;