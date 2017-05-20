import { Injectable } from '@angular/core';
import { Step, StepSettings, StepOptions } from './step.model';
import { StepEnum } from './step.enum';
import { YesNo } from './yesno/yesno.component';
import { NextAction } from './nextaction/nextaction.component';
import { NonActionable } from './nonactionable/nonactionable.component';
import { RefineAction } from './refineaction/refineaction.component';
import { ProjectPlan } from './projectplan/projectplan.component';
import { NewProject } from './newproject/newproject.component';
import { Delegate } from './delegate/delegate.component';
import { Schedule } from './schedule/schedule.component';
import { ApproveChange} from './approvechange/approvechange.component';
import { Done } from './done/done.component';

@Injectable()
export class StepService {

  constructor() { }

  getSteps() {
    return [
      new Step(YesNo,
      new StepSettings(
        StepEnum.IsActionable,
        "",
        "Is this actionable?",
        "",
        new StepOptions(
        StepEnum.IsProject, 
        StepEnum.NonActionable,
        undefined, 
        undefined, 
        undefined, 
        undefined)
        )
      ),
      new Step(YesNo,
      new StepSettings(
        StepEnum.IsProject,
        "",
        "Does this require multiple steps?",
        "",
        new StepOptions(
        StepEnum.ProjectPlan, 
        StepEnum.NextAction,
        StepEnum.IsActionable, 
        undefined, 
        undefined, 
        undefined)
        )
      ),
      new Step(ProjectPlan,
      new StepSettings(
        StepEnum.ProjectPlan,
        "",
        "What is the successful outcome?",
        "Project created.",
        new StepOptions(
        undefined, 
        undefined,
        StepEnum.IsProject, 
        StepEnum.NewProject, 
        undefined, 
        undefined)
        )
      ),  
      new Step(NewProject,
      new StepSettings(
        StepEnum.NewProject,
        "Project created.",
        "Go to new project or continue processing inbox?",
        "",
        new StepOptions(
        StepEnum.Navigate, 
        StepEnum.Done,
        StepEnum.ProjectPlan, 
        undefined, 
        undefined, 
        undefined)
        )
      ),          
      new Step(NextAction,
      new StepSettings(
        StepEnum.NextAction,
        "",
        "What is the next action?",
        "",
        new StepOptions(
        undefined, 
        undefined,
        StepEnum.IsProject, 
        StepEnum.IsDoableNow, 
        undefined, 
        undefined)
        )
      ),           
      new Step(NonActionable,
      new StepSettings(
        StepEnum.NonActionable,
        "",
        "How would you categorize this?",
        "",
        new StepOptions(
        undefined, 
        undefined,
        StepEnum.IsActionable, 
        StepEnum.ApproveChange, 
        undefined, 
        undefined)
        )
      ),           
      new Step(ApproveChange,
      new StepSettings(
        StepEnum.ApproveChange,
        "",
        "Approve change?",
        "",
        new StepOptions(
        undefined, 
        undefined,
        undefined, 
        undefined, 
        StepEnum.Done, 
        StepEnum.Done)
        )
      ),           
      new Step(YesNo,
      new StepSettings(
        StepEnum.IsDoableNow,
        "",
        "Can this be done in 2-5 minutes?",
        "",
        new StepOptions(
        StepEnum.DoItNow, 
        StepEnum.IsDelegatable,
        StepEnum.NextAction, 
        undefined, 
        undefined, 
        undefined)
        )
      ),           
      new Step(YesNo,
      new StepSettings(
        StepEnum.DoItNow,
        "Do it now!",
        "Did you do it?",
        "Task mark completed ...",
        new StepOptions(
        StepEnum.ApproveChange, 
        StepEnum.IsDelegatable,
        StepEnum.IsDoableNow, 
        undefined, 
        undefined, 
        undefined)
        )
      ),      
      new Step(YesNo,
      new StepSettings(
        StepEnum.IsDelegatable,
        "",
        "Can this be delegated?",
        "",
        new StepOptions(
        StepEnum.Delegate, 
        StepEnum.IsSchedulable,
        StepEnum.IsDoableNow, 
        undefined, 
        undefined, 
        undefined)
        )
      ),      
      new Step(YesNo,
      new StepSettings(
        StepEnum.IsSchedulable,
        "",
        "Does this need to be done on a specific date and time?",
        "",
        new StepOptions(
        StepEnum.Schedule, 
        StepEnum.RefineAction,
        StepEnum.IsDelegatable, 
        undefined, 
        undefined, 
        undefined)
        )
      ),      
      new Step(Schedule,
      new StepSettings(
        StepEnum.Schedule,
        "Create event ...",
        "",
        "",
        new StepOptions(
        undefined, 
        undefined,
        StepEnum.IsSchedulable, 
        StepEnum.ApproveChange, 
        undefined, 
        undefined)
        )
      ),  
      new Step(RefineAction,
      new StepSettings(
        StepEnum.RefineAction,
        "Please refine this task ...",
        "",
        "",
        new StepOptions(
        undefined, 
        undefined,
        StepEnum.IsSchedulable, 
        StepEnum.ApproveChange, 
        undefined, 
        undefined)
        )
      ), 
      new Step(Delegate,
      new StepSettings(
        StepEnum.Delegate,
        "Select delegate ...",
        "",
        "Delegate selected",
        new StepOptions(
        undefined, 
        undefined,
        StepEnum.IsSchedulable, 
        StepEnum.ApproveChange, 
        undefined, 
        undefined)
        )
      ),
      new Step(YesNo,
      new StepSettings(
        StepEnum.Done,
        "",
        "Process next Inbox item?",
        "",
        new StepOptions(
        StepEnum.Next, 
        StepEnum.Exit,
        undefined, 
        undefined, 
        undefined, 
        undefined)
        )
      )  
           
    ]
  }


}
