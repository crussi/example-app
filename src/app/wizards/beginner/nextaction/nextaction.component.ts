import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { StepEnum } from '../step.enum';

@Component({
  selector: 'nextaction',
  //templateUrl: './isactionable.component.html',
  template: `
    <div>
      <h2 *ngIf="hasDeclaration">{{Declaration}}</h2>
      <h3 *ngIf="hasQuestion">{{Question}}</h3>
      <input placeholder="Next action" [(ngModel)]="nextaction"/>

      <button *ngIf="hasPrev" (click)="StateChanged(PrevStep,undefined)">Previous</button>
      <button *ngIf="hasNext" (click)="Next(NextStep)">Next</button>
    </div>
  `,  
  styleUrls: ['./nextaction.component.css']
})
export class NextAction extends BaseComponent implements OnInit   {

  constructor() { 
    super();
  }

  nextaction: string;

  ngOnInit() {
    super.ngOnInit();
    if (this.State) {
      this.nextaction = this.State.NextAction;
    } 
    
  }

  Next(nextStep:StepEnum) {
    super.StateChanged(nextStep, {'NextAction':this.nextaction});
  }

}
