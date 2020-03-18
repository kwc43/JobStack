import { Injectable } from '@angular/core';
import { UserManager, User} from 'oidc-client';
import { BaseService } from '../base.service';
import  { ConfigService } from '../configuration/config.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService extends BaseService {

    private authNavStatusSource = new BehaviorSubject<boolean>(false);
    authNavStatus$ = this.authNavStatusSource.asObservable();

    private manager = new UserManager({
        authority: this.configService.authAppURI,
        client_id: 'angular_spa',
        redirect_uri: 'http://localhost:4200/auth-callback',
        post_logout_redirect_uri: 'http://localhost:4200/',
        response_type: "code",
        scope: "openid profile email api.read",
        filterProtocolClaims: true,
        loadUserInfo: true
    });

    private user: User | null;

    constructor(private configService: ConfigService) {
      super();

      this.manager.getUser().then(user => {
          this.user = user;
          this.authNavStatusSource.next(this.isAuthenticated());
      });
  }

    login(newAccount?: boolean, userName?: string){
      let extraQueryParams = newAccount && userName? {
        newAccount: newAccount,
        userName: userName
      } : {};

      return this.manager.signinRedirect({
        extraQueryParams
      });
    }

    async completeAuthentication() {
      this.user = await this.manager.signinRedirectCallback();
      this.authNavStatusSource.next(this.isAuthenticated());
    }

    isAuthenticated():boolean {
      return this.user != null && !this.user.expired;
    }
}
 