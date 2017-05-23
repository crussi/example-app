import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BaseComponent } from '../base/base.component';
import { StepEnum, WizStateChange, StepTransition, StepState } from '../../../shared/barrel';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../state-management/reducers';
import * as action from '../../../state-management/actions/wizard';

@Component({
  selector: 'newproject',
  //templateUrl: './newproject.component.html',
  template: `
    <div>
      <h2 *ngIf="hasDeclaration">{{Declaration}}</h2>
      <h3 *ngIf="hasQuestion">{{Question}}</h3>
      <button *ngIf="hasYes" (click)="Navigate(YesStep)">Go to new project</button>
      <button *ngIf="hasNo" (click)="Next(NoStep)">Continue</button>
      <button *ngIf="hasPrev" (click)="StateChanged(PrevStep,undefined)">Previous</button>
    </div>
  `,  
  styleUrls: ['./newproject.component.css']
})
export class NewProject extends BaseComponent implements OnInit   {

  state$: Observable<StepState>;

  constructor(private store: Store<fromRoot.State>) { 
    super();
    //this.state$ = store.select(fromRoot.getSelectedStep);
    //console.log('--> newproject:',this.state$);
  }

  ngOnInit() {
    super.ngOnInit();
    console.log('newproject ngOnInit');
  }
  ngAfterViewInit() {
    console.log('newproject ngAfterViewInit');
  }
  ngAfterContentInit() {
    console.log('newproject ngAfterContentInit');
  }  

  Next(nextStep:StepEnum) {
    //super.StateChanged(nextStep, {'hello':'world'});
    let val = {'next':'inbox item'};
    let stateChange:WizStateChange = new WizStateChange(this.Settings.Name, val,new StepTransition(this.Settings.Name,nextStep));
    super.EmitStateChanged(stateChange);
    this.store.dispatch(new action.StateChangeAction(stateChange));
    
  }

  Navigate(nextStep:StepEnum){
    //Navigate logic goes here
    //super.StateChanged(nextStep, {'navigate':'projects'});
    let val = {'navigate':'projects'};
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
