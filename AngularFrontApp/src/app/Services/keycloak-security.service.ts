import {Injectable} from '@angular/core';
import {KeycloakInstance} from 'keycloak-js';

declare var Keycloak: any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {
  public kc: KeycloakInstance;

  constructor() {
  }

  async init() {
    return new Promise((resolve, reject) => {
      console.log('Security Initialisation ...');
      this.kc = new Keycloak({
        url: 'http://localhost:8080/auth',
        realm: 'ecom-realm',
        clientId: 'AngularProductApp'
      });
      this.kc.init({
        onLoad: 'check-sso'
      }).then((authenticated) => {
        console.log(this.kc.token);
        resolve({
          auth: authenticated,
          token: this.kc.token
        });
      }).catch((error) => {
        console.log(error);
        reject(error);
      });
    });
  }
}

