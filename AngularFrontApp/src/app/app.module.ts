import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, ApplicationRef, DoBootstrap, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './Components/products/products.component';
import { SuppliersComponent } from './Components/suppliers/suppliers.component';
import {KeycloakSecurityService} from './Services/keycloak-security.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RequestInterceptorService} from './Services/request-interceptor.service';
import { HomeComponent } from './Components/home/home.component';

/*export function kcFactory(kcSecurity: KeycloakSecurityService) {
  return () => kcSecurity.init();
}*/

const keycloakSecurityService = new KeycloakSecurityService();

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SuppliersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    // { provide: APP_INITIALIZER, deps: [KeycloakSecurityService], useFactory: kcFactory, multi: true },
    { provide: KeycloakSecurityService, useValue: keycloakSecurityService },
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true }
  ],
  entryComponents: [ AppComponent ]
  // bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {
  ngDoBootstrap(appRef: ApplicationRef): void {
    keycloakSecurityService.init()
      .then((response) => {
        console.log(response);
        appRef.bootstrap(AppComponent);
      }).catch(error => {
        console.log(error);
    });
  }

}
