
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SharedModule }   from '../../shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  declarations: [SignupComponent, LoginComponent],
  providers: [],
  imports: [
    CommonModule,   
    ReactiveFormsModule,     
    AccountRoutingModule,
    SharedModule
  ]
})
export class AccountModule { }