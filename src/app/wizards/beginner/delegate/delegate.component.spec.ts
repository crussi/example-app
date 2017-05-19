import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Delegate } from './delegate.component';

describe('DelegateComponent', () => {
  let component: Delegate;
  let fixture: ComponentFixture<Delegate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Delegate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Delegate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
