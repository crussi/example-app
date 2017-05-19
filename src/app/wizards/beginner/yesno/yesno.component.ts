import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { StepEnum } from '../step.enum';

@Component({
  selector: 'yesno',
  //templateUrl: './isactionable.component.html',
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
