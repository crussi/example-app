import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Done } from './done.component';

describe('DoneComponent', () => {
  let component: Done;
  let fixture: ComponentFixture<Done>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Done ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Done);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
