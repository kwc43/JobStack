import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../core/services/authentication/authentication.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService){}
}

