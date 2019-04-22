import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScUiWizardNavComponent } from './scui-wizard-nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ScUiWizardNavComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ScUiWizardNavComponent]
})
export class ScUiWizardNavModule {
}
