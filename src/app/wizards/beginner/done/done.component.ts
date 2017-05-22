import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { StepEnum, WizStateChange, StepTransition } from '../../../shared/barrel';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../state-management/reducers';
import * as action from '../../../state-management/actions/wizard';

@Component({
  selector: 'done',
  //templateUrl: './done.component.html',
  template: `
    <div>
      <h2 *ngIf="hasDeclaration">{{Declaration}}</h2>
      <h3 *ngIf="hasQuestion">{{Question}}</h3>
      <button *ngIf="hasYes" (click)="StateChanged(YesStep,true)">Next</button>
      <button *ngIf="hasNo" (click)="StateChanged(NoStep,false)">Exit</button>
    </div>
  `,  
  styleUrls: ['./done.component.css']
})
export class Done extends BaseComponent implements OnInit   {

  constructor(private store: Store<fromRoot.State>) { 
    super();
  }

  ngOnInit() {
    super.ngOnInit();

  }

  StateChanged(nextStep:StepEnum, val:any) {
    console.log('StateChange done dispatch ...',this.store);
    //this.stateChanged.emit(new WizStateChange(this.Settings.Name, val,new StepTransition(this.Settings.Name,nextStep)));
    let stateChange:WizStateChange = new WizStateChange(this.Settings.Name, val,new StepTransition(this.Settings.Name,nextStep));
    //super.StateChanged(nextStep, val);
    super.EmitStateChanged(stateChange);
    this.store.dispatch(new action.StateChangeAction(stateChange));
  }


}
