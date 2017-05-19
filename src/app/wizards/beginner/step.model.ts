import { Type } from '@angular/core';
import { StepEnum, NonActionableTypeEnum } from './step.enum';

export class InboxItem {
    constructor(public Description: string, public DateCreated: Date, public CreatedBy: string){}
}

export class InboxItemProcessed {    
    constructor(public State:WizState) {}
}

export class Step {
    //Name: StepEnum;
    get Name() : StepEnum {
        return this.Settings.Name;
    }
    //Declaration: string;
    get Declaration() : string {
        return this.Settings.Declaration;
    }    
    //Question: string;
    get Question() : string {
        return this.Settings.Question;
    }    
    
    //Component: Type<any>;
    get Component() : Type<any> {
        return this.component;
    }    

    //Steps: StepOptions;
    get Steps() : StepOptions {
        return this.Settings.Steps;
    }    
    
    Settings: StepSettings;
    constructor(public component: Type<any>, settings: StepSettings) {
        //this.Steps = new StepOptions();
        this.Settings = settings;
        //this.Component = component;
        //this.Name = data.Name;
        //this.Declaration = data.Declaration ? data.Declaration : '';
        //this.Question = data.Question ? data.Question : '';
        // this.Steps.YesStep = data.YesStep ? data.YesStep : StepEnum.Undefined;
        // this.Steps.NoStep = data.NoStep ? data.NoStep : StepEnum.Undefined;
        // this.Steps.PrevStep = data.PrevStep ? data.PrevStep : StepEnum.Undefined;
        // this.Steps.NextStep = data.NextStep ? data.NextStep : StepEnum.Undefined;

    }
}

export class StepSettings {
    constructor(public Name: StepEnum, public  Declaration: string = "", public  Question: string = "", public ApproveMsg: string = "", public  Steps: StepOptions){}
}

export class StepOptions {
    get hasYes() : boolean {
        return this.YesStep != StepEnum.Undefined;
    }   
    get hasNo() : boolean {
        return this.NoStep != StepEnum.Undefined;
    }
    get hasPrev() : boolean {
        return this.PrevStep != StepEnum.Undefined;
    }                  
    get hasNext() : boolean {
        return this.NextStep != StepEnum.Undefined;
    }                  
    get hasOk() : boolean {
        return this.OkStep != StepEnum.Undefined;
    }                  
    get hasCancel() : boolean {
        return this.CancelStep != StepEnum.Undefined;
    }                  
    constructor(public YesStep: StepEnum = StepEnum.Undefined, 
                public NoStep: StepEnum = StepEnum.Undefined, 
                public PrevStep: StepEnum = StepEnum.Undefined, 
                public NextStep: StepEnum = StepEnum.Undefined, 
                public OkStep: StepEnum = StepEnum.Undefined, 
                public CancelStep: StepEnum = StepEnum.Undefined) {

    }
}

export class StepTransition {
    from:StepEnum;
    to: StepEnum;
    constructor(from:StepEnum, to: StepEnum){
        this.from = from;
        this.to = to;
    }
}

export class ProjectPlan {
    Outcome: string;
    Title: string;
    //Tasks and subtasks go here
}

export class NextAction {
    Nextaction: string;
}

export class Delegate {
    Name: string;
}

export class Schedule {
    EventDate: Date;
    Title: string;
}

export class Action {
    NextAction: string;
    DateCreated: Date;
    CreatedBy: User;
}

export class User {
    Name: string;
    Id: string;
}

export class WizStateChange {    
    constructor(public Step: StepEnum, public Value: any, public Transition: StepTransition) {}
}

export class StepState {
    constructor(public Step: string, public State: any) {}
}

export class WizState  {
    stepStates: Array<StepState>;
    constructor(public inboxItem: InboxItem){
        //super();
        this.stepStates = new Array<StepState>();
        for (let item in StepEnum) {
            if (!isNaN(Number(item))) {
                //console.log('[' + item + '] = ' + StepEnum[item]);
                this.stepStates.push(new StepState(StepEnum[item],undefined));
            }
        }
        console.dir(this);        
    }

    
    update(stateChange:WizStateChange){
        //console.log('update',stateChange);
        this.stepStates[stateChange.Step] = new StepState(StepEnum[stateChange.Step],stateChange.Value);
    }

    getState(step:StepEnum){
        return this.stepStates[step].State;
    }

}

