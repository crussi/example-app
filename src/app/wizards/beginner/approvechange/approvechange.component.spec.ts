import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveChange } from './approvechange.component';

describe('ApprovechangeComponent', () => {
  let component: ApproveChange;
  let fixture: ComponentFixture<ApproveChange>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveChange ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveChange);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
