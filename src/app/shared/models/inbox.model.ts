import { Type } from '@angular/core';
import { WizState } from './step.model';
export class InboxItem {
    
    constructor(public id: string, public Description: string, public DateCreated: Date, public CreatedBy: string){}
}

export class InboxItemProcessed {    
    //constructor(public State:WizState) {}
    constructor() {}
}


