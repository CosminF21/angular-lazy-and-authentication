import { Routes } from '@angular/router';
import {FirstComponent} from "./components/first/first.component";
import {autoLoginPartialRoutesGuard} from "angular-auth-oidc-client";
import {CallbackComponent} from "./components/auth/callback/callback.component";
import {ForbiddenComponent} from "./components/auth/forbidden/forbidden.component";
import {UnauthorizedComponent} from "./components/auth/unauthorized/unauthorized.component";

export const routes: Routes = [
  // {
  //   path: 'first', component: FirstComponent, canActivate: [autoLoginPartialRoutesGuard]
  // },
  {
    path: '', pathMatch: 'full', redirectTo: '/second'
  },
  {
    path: 'second',
    loadComponent: () => import('./components/second/second.component').then(c => c.SecondComponent),
    canActivate: [autoLoginPartialRoutesGuard]
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent,
    canActivate: [autoLoginPartialRoutesGuard],
  },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: 'callback', component: CallbackComponent },
];
