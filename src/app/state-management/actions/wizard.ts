import { Action } from '@ngrx/store';

export const TEST =   '[Wizard] Test';

export class WizardTestAction implements Action {
  readonly type = TEST;
}


export type Actions = WizardTestAction;