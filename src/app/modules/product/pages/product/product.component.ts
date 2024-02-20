import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LangaugeService } from 'src/app/core/services/langauge/langauge.service';
import { NavbarComponent } from 'src/app/shared/components/navbar';
import { PdpaDialogComponent } from '../../dialogs/pdpa-dialog/pdpa-dialog.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, NavbarComponent, ButtonModule, TranslateModule, RouterModule, PdpaDialogComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DialogService, MessageService],
})
export class ProductComponent {
  private readonly _langaugeService: LangaugeService = inject(LangaugeService);
  // private readonly _dialogService: DialogService = inject(DialogService);
  private readonly _messageService: MessageService = inject(MessageService);

  showPdpa: boolean = false;

  constructor(private readonly _dialogService: DialogService) {}

  protected changeLang(lang: string) {
    this._langaugeService.updateLanguage(lang);
  }

  protected checkPersonalId() {
    if (true) {
      this.showPdpa = true;
      // this.openPdpa();
    }
  }

  private openPdpa() {
    const ref: DynamicDialogRef | undefined = this._dialogService.open(PdpaDialogComponent, {
      header: 'ข้อตกลงการให้บริการ',
      width: '90%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      // templates: {
      //   footer: PdpaFooter,
      // },
    });

    ref.onClose.subscribe((product: any) => {
      if (product) {
        this._messageService.add({ severity: 'info', summary: 'ข้อตกลงการให้บริการ', detail: product.name });
      }
    });
  }
}
