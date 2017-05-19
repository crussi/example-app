import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[wizard-host]'
})
export class WizardDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
