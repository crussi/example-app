import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonActionable } from './nonactionable.component';

describe('NonactionableComponent', () => {
  let component: NonActionable;
  let fixture: ComponentFixture<NonActionable>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonActionable ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonActionable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
