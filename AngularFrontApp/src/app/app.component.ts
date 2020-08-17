import {Component, OnInit} from '@angular/core';
import {KeycloakSecurityService} from './Services/keycloak-security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularFrontApp';


  constructor(public securityService: KeycloakSecurityService) {

  }

  ngOnInit(): void {
  }

  onLogout() {
    this.securityService.kc.logout();
  }

  changePassword() {
    this.securityService.kc.accountManagement();
  }

  onLogin() {
    this.securityService.kc.login();
  }

  isAppManager() {
    return this.securityService.kc.hasRealmRole('app-manager');
  }
}
