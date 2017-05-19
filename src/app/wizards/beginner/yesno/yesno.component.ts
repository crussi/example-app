import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { StepEnum } from '../step.enum';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../state-management/reducers';
import * as test from '../../../state-management/actions/wizard';

@Component({
  selector: 'yesno',
  // templateUrl: './yesno.component.html',
  template: `
    <div>
      <h2 *ngIf="hasDeclaration">{{Declaration}}</h2>
      <h3 *ngIf="hasQuestion">{{Question}}</h3>
      <button *ngIf="hasYes" (click)="StateChanged(YesStep,true)">Yes</button>
      <button *ngIf="hasNo" (click)="StateChanged(NoStep,false)">No</button>
      <button *ngIf="hasPrev" (click)="StateChanged(PrevStep,undefined)">Previous</button>
    </div>
  `,  
  styleUrls: ['./yesno.component.css']
})
export class YesNo extends BaseComponent implements OnInit   {


private store: Store<fromRoot.State>
  constructor() { 
    super();
  }

  ngOnInit() {
    super.ngOnInit();

  }

  StateChange(nextStep:StepEnum, val:any) {
    this.store.dispatch(new test.WizardTestAction());
    //super.StateChanged(nextStep, val);
  }


}
