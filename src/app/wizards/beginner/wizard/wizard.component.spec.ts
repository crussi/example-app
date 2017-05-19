import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wizard } from './wizard.component';

describe('WizardComponent', () => {
  let component: Wizard;
  let fixture: ComponentFixture<Wizard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wizard ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wizard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
