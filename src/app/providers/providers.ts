import {AppInitializerService} from "../servicies/app-initializer.service";
import {APP_INITIALIZER} from "@angular/core";
import {AuthService} from "@auth0/auth0-angular";
import {PassedInitialConfig} from "angular-auth-oidc-client/lib/auth-config";
import {LogLevel} from "angular-auth-oidc-client";

function configFactory(config: AppInitializerService, auth: AuthService) {
  return () => config.load();
}

export const ApplicationInitializerProvider = {
  provide: APP_INITIALIZER,
  useFactory: configFactory,
  deps: [AppInitializerService],
  multi: true,
};

export const authConfig: PassedInitialConfig = {
  config: {
    postLoginRoute: window.location.origin,
      forbiddenRoute: '/forbidden',
      unauthorizedRoute: '/unauthorized',
      historyCleanupOff: false,
      authority: 'https://dev-7rgesp36ewaahu0a.us.auth0.com',
      redirectUrl: `${window.location.origin}/callback`,
      postLogoutRedirectUri: window.location.origin,
      clientId: 'QvtF4aTTBjnnmzbJVYtMcsZH595Wc8vL',
      scope: 'openid profile email offline_access',
      responseType: 'code',

      silentRenew: true,
      useRefreshToken: true,
      renewUserInfoAfterTokenRenew: false,
      triggerRefreshWhenIdTokenExpired: false,
      tokenRefreshInSeconds: 3,
      refreshTokenRetryInSeconds: 3,
      allowUnsafeReuseRefreshToken: true,
      logLevel: LogLevel.Debug,
      autoUserInfo: false,
      triggerAuthorizationResultEvent: true,
  },
};
