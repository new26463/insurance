import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-pdpa-dialog',
  standalone: true,
  imports: [FormsModule, CheckboxModule, ButtonModule, DialogModule],
  templateUrl: './pdpa-dialog.component.html',
  styleUrl: './pdpa-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PdpaDialogComponent {
  isCheck: boolean = false;
}
