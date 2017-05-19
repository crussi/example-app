import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { StepEnum } from '../step.enum';

@Component({
  selector: 'done',
  //templateUrl: './isactionable.component.html',
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

  constructor() { 
    super();
  }

  ngOnInit() {
    super.ngOnInit();

  }

  // StateChange(nextStep:StepEnum, val) {
  //   super.StateChanged(nextStep, val);
  // }


}
