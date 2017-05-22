import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { StepEnum, WizStateChange, StepTransition } from '../../../shared/barrel';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../state-management/reducers';
import * as action from '../../../state-management/actions/wizard';

@Component({
  selector: 'approvechange',
  //templateUrl: './approvechange.component.html',
  template: `
    <div>
      <h2 *ngIf="hasDeclaration">{{Declaration}}</h2>
      <h3 *ngIf="hasQuestion">{{Question}}</h3>
      <button *ngIf="hasOk" (click)="Ok(OkStep)">Ok</button>
      <button *ngIf="hasCancel" (click)="Cancel(CancelStep)">Cancel</button>
    </div>
  `,  
  styleUrls: ['./approvechange.component.css']
})
export class ApproveChange extends BaseComponent implements OnInit   {

  constructor(private store: Store<fromRoot.State>) { 
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }
  
  Ok(step:StepEnum){
    //console.log('ok logic goes here');
    //super.LoadStep(step)
    //super.EmitStateChanged(step,{'hello':'ok world'});
    let val = {'approve':'ok'};
    let stateChange:WizStateChange = new WizStateChange(this.Settings.Name, val,new StepTransition(this.Settings.Name,step));
    super.EmitStateChanged(stateChange);
    this.store.dispatch(new action.StateChangeAction(stateChange));
    
  }

  Cancel(step:StepEnum){
    //console.log('cancel logic goes here');
    let val = {'approve':'ok'};
    let stateChange:WizStateChange = new WizStateChange(this.Settings.Name, val,new StepTransition(this.Settings.Name,step));
    super.EmitStateChanged(stateChange);
    this.store.dispatch(new action.StateChangeAction(stateChange));
  }

}
