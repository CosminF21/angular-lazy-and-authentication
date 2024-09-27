import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {ApplicationInitializerProvider, authConfig} from "./providers/providers";
import {authInterceptor, LogLevel, provideAuth} from "angular-auth-oidc-client";
import {provideHttpClient, withInterceptors} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),//config for routes
    ApplicationInitializerProvider,//config for app initialization
    provideHttpClient(withInterceptors([authInterceptor()])),//config for auth
    provideAuth(authConfig)//config for auth
  ]
};
