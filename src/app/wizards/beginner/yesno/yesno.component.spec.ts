import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YesNo } from './yesno.component';

describe('YesnoComponent', () => {
  let component: YesNo;
  let fixture: ComponentFixture<YesNo>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YesNo ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YesNo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
