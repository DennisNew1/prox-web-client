import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { PrivacyRoutingModule } from './privacy-routing.module';
import { PrivacyComponent } from './pages/privacy/privacy.component';

@NgModule({
  declarations: [PrivacyComponent],
  imports: [SharedModule, PrivacyRoutingModule]
})
export class PrivacyModule {}
