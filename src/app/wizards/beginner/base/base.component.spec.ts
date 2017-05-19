import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Base } from './base.component';

describe('BaseComponent', () => {
  let component: Base;
  let fixture: ComponentFixture<Base>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Base ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Base);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
