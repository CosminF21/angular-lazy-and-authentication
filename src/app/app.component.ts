import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {AppInitializerService} from "./servicies/app-initializer.service";
import {OidcSecurityService} from "angular-auth-oidc-client";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, AsyncPipe, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'no-modules-sample';

  constructor(private appInit: AppInitializerService, private oidcSecurityService: OidcSecurityService) {
  }

  ngOnInit(): void {
    this.oidcSecurityService
      .checkAuth()
      .subscribe(({ isAuthenticated, userData, accessToken }) => {
        //he you initialize user data
       console.log(isAuthenticated);
       console.log(userData);
       console.log(accessToken);
      });
    //check if initialization app is working:
    console.log(this.appInit.initObject);
  }


  get isAuthenticated(){
    return this.oidcSecurityService.isAuthenticated();
  }

  logout(){
    this.oidcSecurityService.logoff().subscribe();
  }
}
