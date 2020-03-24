import { NgModule } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { RouterModule ,Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';

const accountRoutes : Routes = [
    {
        path: 'signup',
        component: SignupComponent
    },
    {
      path: 'login',
      component: LoginComponent
    }
]

@NgModule({
  imports: [
      RouterModule.forChild(accountRoutes)
    ],
  exports: [
      RouterModule
    ]
})

export class AccountRoutingModule { }