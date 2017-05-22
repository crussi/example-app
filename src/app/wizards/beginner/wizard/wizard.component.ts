import { Component, Input, AfterViewInit, AfterContentInit, ViewChild, ComponentFactoryResolver, OnDestroy, OnInit, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';

import { WizardDirective } from '../wizard.directive';
import { StepEnum } from '../../../shared/barrel';
import { Step, StepTransition, WizState, StepState, WizStateChange, InboxItemProcessed, InboxItem } from '../../../shared/barrel';
import { BaseComponent } from '../base/base.component';
import { StepService } from '../step.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../state-management/reducers';
import * as action from '../../../state-management/actions/wizard';

@Component({
  selector: 'beginner-wizard',
  template: `
              <div class="ad-banner">
                <h3 *ngIf="displayDesc">{{inboxItem.Description}}</h3>
                <ng-template wizard-host></ng-template>                
              </div>
            `
})
export class BeginnerWizard implements AfterViewInit, OnDestroy, OnInit, OnChanges {
  //@Input() steps: Step[];
  steps: Step[];
  @Input() inboxItem: InboxItem;
  @Output() onInboxItemProcessed: EventEmitter<InboxItemProcessed> = new EventEmitter();
  //@Output() onHideDescription: EventEmitter<boolean> = new EventEmitter();
  currentAddIndex: number = -1;
  //State: WizState;
  @ViewChild(WizardDirective) adHost: WizardDirective;
  subscription: any;
  interval: any;
  displayDesc = true;

  constructor(
    private _componentFactoryResolver: ComponentFactoryResolver,
    private stepService: StepService,
    private store: Store<fromRoot.State>) { }

  ngOnInit(){
    let stepStates: Array<StepState> = this.stepService.getStepStates();
    this.store.dispatch(new action.LoadAction(stepStates));
  }
  ngAfterViewInit() {
  }
  ngAfterContentInit() {
    this.initialize();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.inboxItem) {
      this.initialize();
    }
  }  

  initialize(){
    if (!this.steps) {
      this.steps = this.stepService.getSteps();
    }
    this.loadComponent(new StepTransition(StepEnum.Start,StepEnum.IsActionable));
  }

  stateChanged(stateChange:WizStateChange) {
    //console.log('wiz stateChanged: ' + StepEnum[stateChange.Step], stateChange.Value);

    //this.State.update(stateChange);
    //console.dir(this.State);
    this.displayDesc = true;

    switch (stateChange.Transition.to) {
      case StepEnum.Navigate:
        console.log('wizard navigate from here');
        break;
      case StepEnum.Done:
        console.log('Done hide description');
        //this.onHideDescription.emit(true);
        this.displayDesc = false;
        break;
      case StepEnum.Next:
        console.log('wizard is done, process next inbox item');
        //this.onInboxItemProcessed.emit(new InboxItemProcessed(this.State));
        break;
      case StepEnum.Exit:
        console.log('exit wizard');        
        break;
    }

    console.log('calling loadComponent from stateChanged');
    this.loadComponent(stateChange.Transition);
  }

  private loadComponent(stepTransition:StepTransition) {
    //console.log('loadComponent ' + stepTransition.to + ' ads.length: ' + this.ads.length);
    //console.log('stepTransition.to: ' + stepTransition.to);
    
    //Find step component to load and load it
    if (!this.steps || !this.steps.length) {
      console.log('steps empty');
      return;
    }
    for (let i = 0; i < this.steps.length; i++) {
        if (this.steps[i].Name == stepTransition.to) {
          //console.log('found match:')
          let step: Step = this.steps[i];
          switch (step.Name) {
            case StepEnum.ApproveChange:
              step.StepOptions.CancelStep = stepTransition.from;
              //console.log('wiz approve changes ...', adItem.Steps.CancelStep);
              //adItem.Settings.Declaration = stepTransition.approveMsg;
              break;
          }

          let componentFactory = this._componentFactoryResolver.resolveComponentFactory(step.Component);
          let viewContainerRef = this.adHost.viewContainerRef;
          viewContainerRef.clear();

          let componentRef = viewContainerRef.createComponent(componentFactory);
          (<BaseComponent>componentRef.instance).Settings = step.Settings;
          //(<BaseComponent>componentRef.instance).State = this.State.getState(stepTransition.to);            
          (<BaseComponent>componentRef.instance).stateChanged.subscribe(event => this.stateChanged(event));
          break;          
        }
    }
  }

}
