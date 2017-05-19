import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { StepEnum } from '../step.enum';

@Component({
  selector: 'newproject',
  //templateUrl: './isactionable.component.html',
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



  constructor() { 
    super();
  }

  ngOnInit() {
    super.ngOnInit();

  }

  Next(nextStep:StepEnum) {
    super.StateChanged(nextStep, {'hello':'world'});
  }

  Navigate(nextStep:StepEnum){
    //Navigate logic goes here
    super.StateChanged(nextStep, {'navigate':'projects'});
  }

}
