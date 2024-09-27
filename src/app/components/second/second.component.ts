import { Component } from '@angular/core';
import {TestSecondComponent} from "./test-second/test-second.component";
import {TestComponent} from "./test/test.component";

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [
    TestSecondComponent,
    TestComponent
  ],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {

}
