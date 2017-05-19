import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { StepEnum } from '../step.enum';

@Component({
  selector: 'nonactionable',
  //templateUrl: './isactionable.component.html',
  template: `
    <div>
      <h2 *ngIf="hasDeclaration">{{Declaration}}</h2>
      <h3 *ngIf="hasQuestion">{{Question}}</h3>
      <form #f="ngForm">
        <input type="radio" name="nonactionable" [(ngModel)]="nonactionable" value="trash">Trash?<br>
        <input type="radio" name="nonactionable" [(ngModel)]="nonactionable" value="someday">Someday/maybe?<br>
        <input type="radio" name="nonactionable" [(ngModel)]="nonactionable" value="ref">Reference
      </form>      

      <button *ngIf="hasPrev" (click)="StateChanged(PrevStep,undefined)">Previous</button>
      <button *ngIf="hasNext" (click)="Next(NextStep)">Next</button>
    </div>
  `,  
  styleUrls: ['./nonactionable.component.css']
})
export class NonActionable extends BaseComponent implements OnInit   {

  nonactionable = "";

  constructor() { 
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    if (this.State){
      this.nonactionable = this.State;
      console.log('nonactionable this.State ', this.State);
    }
  }

  Next(nextStep:StepEnum) {
    //console.log('Next: ' + this.nonactionable);
    
    super.StateChanged(nextStep, this.nonactionable);
  }

}
