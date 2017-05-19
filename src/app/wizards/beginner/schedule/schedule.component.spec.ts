import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Schedule } from './schedule.component';

describe('ScheduleComponent', () => {
  let component: Schedule;
  let fixture: ComponentFixture<Schedule>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Schedule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Schedule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
