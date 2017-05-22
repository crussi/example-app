export enum StepEnum {
    Start = 0,
    IsActionable = 1,
    IsProject = 2,
    NonActionable = 3,
    ProjectPlan = 4,
    NextAction = 5,
    NewProject = 6,
    IsDoableNow = 7,
    DoItNow = 8,
    IsDelegatable = 9,
    Delegate = 10,
    IsSchedulable = 11,
    Schedule = 12,
    RefineAction = 13,
    ApproveChange = 14,
    Done = 15,
    Next = 16,
    Exit = 17,
    Navigate = 18,
    Undefined = 19
}

export enum NonActionableTypeEnum {
    Undefined = 0,
    Trash = 1,
    Someday = 2,
    Reference = 3
}