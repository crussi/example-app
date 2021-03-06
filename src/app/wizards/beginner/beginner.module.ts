import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SharedModule  } from '../../shared';
import { BaseComponent } from './base/base.component';
import { Delegate } from './delegate/delegate.component';
import { Done } from './done/done.component';
import { NewProject } from './newproject/newproject.component';
import { NextAction } from './nextaction/nextaction.component';
import { NonActionable } from './nonactionable/nonactionable.component';
import { ProjectPlan } from './projectplan/projectplan.component';
import { RefineAction } from './refineaction/refineaction.component';
import { Schedule } from './schedule/schedule.component';
import { BeginnerWizard } from './wizard/wizard.component';
import { YesNo } from './yesno/yesno.component';
import { ApproveChange } from './approvechange/approvechange.component';
import { StepService } from './step.service';
import { WizardDirective } from './wizard.directive';

export const COMPONENTS = [BeginnerWizard];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
                ApproveChange,
                BaseComponent, 
                Delegate, 
                Done, 
                NewProject, 
                NextAction, 
                NonActionable, 
                ProjectPlan, 
                RefineAction, 
                Schedule, 
                BeginnerWizard, 
                YesNo, WizardDirective 
                ],
  entryComponents: [
                ApproveChange,
                Delegate, 
                Done, 
                NewProject, 
                NextAction, 
                NonActionable, 
                ProjectPlan, 
                RefineAction, 
                Schedule, 
                YesNo 
                  ],     
  providers: [StepService],
  exports: COMPONENTS
})
export class BeginnerModule { }
