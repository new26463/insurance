import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, PLATFORM_ID, afterNextRender, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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
  titleService: Title = inject(Title);
  metaService: Meta = inject(Meta);
  platformId = inject(PLATFORM_ID);

  constructor() {
    const translate = inject(TranslateService);
    const languageService = inject(LangaugeService);

    afterNextRender(() => {
      translate.setDefaultLang(languageService.language);
      translate.use(languageService.language);
    });
  }

  protected setDefaultSEO(): void {
    this.metaService.addTag({ name: 'json+ld', content: JSON.stringify({}) });

    // let link: HTMLLinkElement = this.metaService.getTag('rel="canonical"');
    // if (!link) {
    //   link = this.metaService.create('link');
    //   this.metaService.addTag({ rel: 'canonical', href: url });
    // } else {
    //   this.metaService.updateTag({ rel: 'canonical', href: url });
    // }
  }
}
