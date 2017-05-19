import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { StepEnum } from '../step.enum';

@Component({
  selector: 'refineaction',
  //templateUrl: './isactionable.component.html',
  template: `
    <div>
      <h2 *ngIf="hasDeclaration">{{Declaration}}</h2>
      <h3 *ngIf="hasQuestion">{{Question}}</h3>
      <p>Refine action controls go here ....</p>

      <button *ngIf="hasPrev" (click)="StateChanged(PrevStep,undefined)">Previous</button>
      <button *ngIf="hasNext" (click)="Next(NextStep)">Next</button>
    </div>
  `,  
  styleUrls: ['./refineaction.component.css']
})
export class RefineAction extends BaseComponent implements OnInit   {

  constructor() { 
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  Next(nextStep:StepEnum) {
    super.StateChanged(nextStep, {'refineaction':'Refine action goes here'});
  }

}
