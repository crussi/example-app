import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProject } from './newproject.component';

describe('NewprojectComponent', () => {
  let component: NewProject;
  let fixture: ComponentFixture<NewProject>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProject ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
