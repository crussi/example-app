import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { StepEnum, WizStateChange, StepTransition } from '../../../shared/barrel';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../state-management/reducers';
import * as action from '../../../state-management/actions/wizard';

@Component({
  selector: 'refineaction',
  //templateUrl: './refineaction.component.html',
  template: `
    <div>
      <h2 *ngIf="hasDeclaration">{{Declaration}}</h2>
      <h3 *ngIf="hasQuestion">{{Question}}</h3>
      <p>Refine action controls go here ....</p>
      <input type="text" placeholder="Enter a refine action" [(ngModel)]="state$.RefineAction" >

      <button *ngIf="hasPrev" (click)="StateChanged(PrevStep,undefined)">Previous</button>
      <button *ngIf="hasNext" (click)="Next(NextStep)">Next</button>
    </div>
  `,  
  styleUrls: ['./refineaction.component.css']
})
export class RefineAction extends BaseComponent implements OnInit   {

  constructor(private store: Store<fromRoot.State>) { 
    super();
  }
  state$: any;

  ngOnInit() {
    super.ngOnInit();
    this.store.select(fromRoot.getSelectedStep).subscribe(stepState => this.state$ = stepState);    
  }

  Next(nextStep:StepEnum) {
    //super.StateChanged(nextStep, {'refineaction':'Refine action goes here'});
    let val = this.state$;
    let stateChange:WizStateChange = new WizStateChange(this.Settings.Name, val,new StepTransition(this.Settings.Name,nextStep));
    super.EmitStateChanged(stateChange);
    this.store.dispatch(new action.StateChangeAction(stateChange));    
  }

  StateChanged(nextStep:StepEnum, val:any) {
    let stateChange:WizStateChange = new WizStateChange(this.Settings.Name, val,new StepTransition(this.Settings.Name,nextStep));
    super.EmitStateChanged(stateChange);
    this.store.dispatch(new action.StateChangeAction(stateChange));
  }   

}
