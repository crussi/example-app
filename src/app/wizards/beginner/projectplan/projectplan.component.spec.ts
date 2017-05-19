import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPlan } from './projectplan.component';

describe('ProjectplanComponent', () => {
  let component: ProjectPlan;
  let fixture: ComponentFixture<ProjectPlan>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPlan ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPlan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
