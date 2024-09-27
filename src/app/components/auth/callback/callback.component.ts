import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  standalone: true,
  styleUrls: [],
})
export class CallbackComponent implements OnInit, OnDestroy {
  private timer: any;
  private navigationSubscription!: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Set up a 5-second timer to redirect to the base path
    this.timer = setTimeout(() => {
      this.router.navigate(['/']);
    }, 10000);

    // Subscribe to router events to clear the timer if navigation occurs
    this.navigationSubscription = this.router.events.subscribe(event => {
      if (
        event instanceof NavigationStart ||
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        clearTimeout(this.timer);
      }
    });
  }

  ngOnDestroy(): void {
    // Clean up the subscription and timer
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
}
