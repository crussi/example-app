import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { StepEnum } from '../step.enum';

@Component({
  selector: 'approvechange',
  //templateUrl: './isactionable.component.html',
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

  constructor() { 
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }
  
  Ok(step:StepEnum){
    console.log('ok logic goes here');
    //super.LoadStep(step)
    super.StateChanged(step,{'hello':'ok world'});
  }

  Cancel(step:StepEnum){
    console.log('cancel logic goes here');
    super.StateChanged(step,undefined);
  }

}
