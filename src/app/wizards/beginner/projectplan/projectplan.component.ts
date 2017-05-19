import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { StepEnum } from '../step.enum';

@Component({
  selector: 'projectplan',
  //templateUrl: './isactionable.component.html',
  template: `
    <div>
      <h2 *ngIf="hasDeclaration">{{Declaration}}</h2>
      <h3 *ngIf="hasQuestion">{{Question}}</h3>
      <input type="text" placeholder="Outcome" [(ngModel)]="outcome" >
      <input type="text" placeholder="Project title" [(ngModel)]="title" >

      <button *ngIf="hasPrev" (click)="StateChanged(PrevStep,undefined)">Previous</button>
      <button *ngIf="hasNext" (click)="Next(NextStep)">Next</button>
    </div>
  `,  
  styleUrls: ['./projectplan.component.css']
})
export class ProjectPlan extends BaseComponent implements OnInit   {

  constructor() { 
    super();
  }

  outcome: string;
  title: string;
  ngOnInit() {
    super.ngOnInit();
    if (this.State) {
      this.outcome = this.State.Outcome;
      this.title = this.State.Title ;
    } 
  }

  Next(nextStep:StepEnum) {
    super.StateChanged(nextStep, {'Outcome':this.outcome, 'Title':this.title});
  }

}
