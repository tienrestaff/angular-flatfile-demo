import {
  CompleteParams,
  ErrorParams,
  FlatfileMethods,
} from "@flatfile/angular";

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements FlatfileMethods {
  title = 'Angular11213App';

  /**
   * @NOTE - Call your backend & retrieve your Token, and pass down the license key
   * 👇👇👇
   */
  token = 'YOUR_TOKEN_HERE';
  results: any;

  onComplete(event: CompleteParams) {
    console.log(`onComplete`);
    console.log(event);

    // Your data!
    this.results = event.data;
  }
  onError(event: ErrorParams) {
    console.log(`onError`);
    console.log(event);
  }
}
