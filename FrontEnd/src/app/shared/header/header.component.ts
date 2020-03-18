import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from "../../core/services/authentication/authentication.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    name: string;
    isAuthenticated: boolean;
    subscription: Subscription;

    constructor(public authenticationService: AuthenticationService) { }

    ngOnInit(){
      this.subscription = this.authenticationService.authenticationNavStatus$.subscribe(status => this.isAuthenticated = status);
      this.name = this.authenticationService.getName;
    }

    showAccessToken() {
      document.querySelectorAll('.access-token').forEach(function (a) {
        a.remove()
      });

      var token = document.createElement("p");
      token.className = "access-token";
      token.innerText =  this.authenticationService.getAuthorizationHeaderValue;
      document.getElementsByClassName("container")[0].insertAdjacentElement('afterbegin', token);    
    }

    async signout() {
      await this.authenticationService.signout();
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
}
