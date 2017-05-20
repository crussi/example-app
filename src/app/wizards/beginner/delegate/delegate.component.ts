import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { StepEnum } from '../step.enum';
// import { Store } from '@ngrx/store';
// import * as fromRoot from '../../../state-management/reducers';
// import * as test from '../../../state-management/actions/wizard';

@Component({
  selector: 'delegate',
  //templateUrl: './delegate.component.html',
  template: `
    <div>
      <h2 *ngIf="hasDeclaration">{{Declaration}}</h2>
      <h3 *ngIf="hasQuestion">{{Question}}</h3>
      <p>Delegate controls go here ....</p>
        <ul>
          <li>Donald Duck</li>
          <li>Daffy Duck</li>
          <li>Micky Mouse</li>
          <li>Minnie Mouse</li>
        </ul>
      <button *ngIf="hasPrev" (click)="StateChanged(PrevStep,undefined)">Previous</button>
      <button *ngIf="hasNext" (click)="Next(NextStep)">Next</button>
    </div>
  `,  
  styleUrls: ['./delegate.component.css']
})
export class Delegate extends BaseComponent implements OnInit   {

  constructor() { 
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    if (this.State) {
      
    }
  }

  Next(nextStep:StepEnum) {
    //this.store.dispatch(new test.WizardTestAction());
    //super.StateChanged(nextStep, {Delegate:"Donald Duck"});
  }
}