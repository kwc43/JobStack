import { NgModule, Optional, SkipSelf } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { ConfigService } from './services/configuration/config.service'
import { AuthenticationService } from './services/authentication/authentication.service';


@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [],
  providers: [ConfigService, AuthenticationService],
  entryComponents: [     
  ],
})
export class CoreModule {
}