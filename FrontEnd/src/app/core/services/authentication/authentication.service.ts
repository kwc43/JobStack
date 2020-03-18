import { Injectable } from '@angular/core';
import { UserManager, User} from 'oidc-client';
import { BaseService } from '../base.service';
import  { ConfigService } from '../configuration/config.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService extends BaseService {

    private authenticationNavStatusSource = new BehaviorSubject<boolean>(false);
    authenticationNavStatus$ = this.authenticationNavStatusSource.asObservable();

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
          this.authenticationNavStatusSource.next(this.isAuthenticated());
      });
  }

    async login(newAccount?: boolean, userName?: string){
      let extraQueryParams = newAccount && userName? {
        newAccount: newAccount,
        userName: userName
      } : {};

      return await this.manager.signinRedirect({
        extraQueryParams
      });
    }

    async signout(){
      await this.manager.signoutRedirect();
    }

    async completeAuthentication() {
      this.user = await this.manager.signinRedirectCallback();
      this.authenticationNavStatusSource.next(this.isAuthenticated());
    }

    isAuthenticated():boolean {
      return this.user != null && !this.user.expired;
    }
    
     get getAuthorizationHeaderValue(): string {

        return this.user ? `${this.user.token_type} ${this.user.access_token}` : null;
    }

    get getRole(): string {
      return this.user != null? this.user.profile["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] : '';
    }

    get getName(): string {
      return this.user != null ? this.user.profile.name : '';
    }
}
 