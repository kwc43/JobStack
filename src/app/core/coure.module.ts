import { NgModule, Optional, SkipSelf } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './services/authentication/authentication.service';
import { ConfigService } from './services/configuration/config.service';



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