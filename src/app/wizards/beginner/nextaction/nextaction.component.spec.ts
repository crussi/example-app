import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextAction } from './nextaction.component';

describe('NextactionComponent', () => {
  let component: NextAction;
  let fixture: ComponentFixture<NextAction>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextAction ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextAction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
