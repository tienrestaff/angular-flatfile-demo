import { Component, OnInit } from '@angular/core';

import { flatfileImporter } from '@flatfile/sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular11213App';

  async ngOnInit(): Promise<void> {
    const importer = flatfileImporter("");
    await importer.__unsafeGenerateToken({
      privateKey: "YOUR_PRIVATE_KEY",
      embedId: "YOUR_EMBED_ID",
      endUserEmail: "max@mail.com",
    });
  }

}
