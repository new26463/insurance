import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Input() bgColor!: string;
  @Input() textColorClass: string = 'text-black';
  @Input() title!: string;
  @Input() titleAlign: 'center' | 'left' = 'left';

  @ContentChild('backButton', { static: true })
  backButton!: TemplateRef<any>;

  @ContentChild('actionButton', { static: true })
  actionButton!: TemplateRef<any>;

  @ContentChild('additionalTittleBar', { static: true })
  additionalTittleBar!: TemplateRef<any>;

  back() {
    history.back();
  }
}
