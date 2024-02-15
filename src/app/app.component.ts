import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LangaugeService } from './core/services/langauge/langauge.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'insurance';

  constructor() {
    const translate = inject(TranslateService);
    const languageService = inject(LangaugeService);

    translate.setDefaultLang(languageService.language);
    translate.use(languageService.language);
  }
}
