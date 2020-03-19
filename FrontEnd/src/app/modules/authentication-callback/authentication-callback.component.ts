import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/services/authentication/authentication.service';
import { ConfigService } from '../../core/services/configuration/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss']
})
export class AuthenticationCallbackComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private configService: ConfigService, private router: Router) { }

  async ngOnInit() {
    await this.authenticationService.completeAuthentication();
    this.router.navigateByUrl("/home");
  }
}