import { Component, Input, AfterViewInit, AfterContentInit, ViewChild, ComponentFactoryResolver, OnDestroy, OnInit, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';

//import { AdDirective } from '../../ad.directive';
import { WizardDirective } from '../wizard.directive';
//import { AdItem }      from './ad-item';
//import { StepYesNo, StepOptions} from '../step.model';
import { StepEnum } from '../step.enum';
import { Step, StepTransition, WizState, StepState, WizStateChange, InboxItemProcessed, InboxItem } from '../step.model';
import { BaseComponent } from '../base/base.component';
import { StepService } from '../step.service';

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
  @Input() steps: Step[];
  @Input() inboxItem: InboxItem;
  @Output() onInboxItemProcessed: EventEmitter<InboxItemProcessed> = new EventEmitter();
  //@Output() onHideDescription: EventEmitter<boolean> = new EventEmitter();
  currentAddIndex: number = -1;
  State: WizState;
  @ViewChild(WizardDirective) adHost: WizardDirective;
  subscription: any;
  interval: any;
  displayDesc = true;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver,
              private stepService: StepService) { }

  ngOnInit(){

  }
  ngAfterViewInit() {
    // this.loadComponent();
    // this.getAds();
  }
  ngAfterContentInit() {
    //this.getAds();  
    this.initialize();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log('ngOnChanges', changes);

    if (changes.inboxItem) {
      console.log('got inboxItem');
      this.initialize();
    }
  
  }  

  initialize(){
    this.State = new WizState(this.inboxItem);    
    this.loadComponent(new StepTransition(StepEnum.Start,StepEnum.IsActionable));
    this.steps = this.stepService.getSteps();
  }

  stateChanged(stateChange:WizStateChange) {
    console.log('wiz stateChanged: ' + StepEnum[stateChange.Step], stateChange.Value);
    //this.State[stateChange.Step] = new StepState(StepEnum[stateChange.Step],stateChange.Value);
    this.State.update(stateChange);
    console.dir(this.State);
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
        this.onInboxItemProcessed.emit(new InboxItemProcessed(this.State));
        break;
      case StepEnum.Exit:
        console.log('exit wizard');        
        break;
    }


    this.loadComponent(stateChange.Transition);
  }

  private loadComponent(stepTransition:StepTransition) {
    //console.log('loadComponent ' + stepTransition.to + ' ads.length: ' + this.ads.length);
    console.log('stepTransition.to: ' + stepTransition.to);
    
    // switch (stepTransition.to) {
    //   case StepEnum.Navigate:
    //     console.log('wizard navigate from here');
    //     break;
    //   case StepEnum.Done:
    //     console.log('wizard is done, process next inbox item');
    //     break;
    // }


    //Find step component to load and load it
    for (let i = 0; i < this.steps.length; i++) {
        //console.log('this.ads[i].Name: ' + this.ads[i].Name);
        //console.log('stepTransition.to: ' + stepTransition.to);

        if (this.steps[i].Name == stepTransition.to) {
          //console.log('found match:')
          let adItem: Step = this.steps[i];
          switch (adItem.Name) {
            case StepEnum.ApproveChange:
              adItem.Steps.CancelStep = stepTransition.from;
              console.log('wiz approve changes ...', adItem.Steps.CancelStep);
              //adItem.Settings.Declaration = stepTransition.approveMsg;
              break;
          }

          let componentFactory = this._componentFactoryResolver.resolveComponentFactory(adItem.Component);
          let viewContainerRef = this.adHost.viewContainerRef;
          viewContainerRef.clear();

          let componentRef = viewContainerRef.createComponent(componentFactory);
          (<BaseComponent>componentRef.instance).Settings = adItem.Settings;
          //console.log('wiz getState stepTransition.to',stepTransition.to); 
          //console.log('wiz getState',this.State.getState(stepTransition.to));
          (<BaseComponent>componentRef.instance).State = this.State.getState(stepTransition.to);            
          //(<BaseComponent>componentRef.instance).stepChanged.subscribe(event => this.loadComponent(event));
          (<BaseComponent>componentRef.instance).stateChanged.subscribe(event => this.stateChanged(event));
          break;          
        }
    }
  }



  // getAds() {
  //   this.loadComponent();
  //   // this.interval = setInterval(() => {
  //   //   this.loadComponent();
  //   // }, 3000);
  // }
}
