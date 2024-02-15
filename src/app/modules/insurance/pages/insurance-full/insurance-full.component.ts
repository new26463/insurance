import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LangaugeService } from 'src/app/core/services/langauge/langauge.service';
import { PROVINCE } from 'src/app/data/constants';
import { ESignatureComponent } from 'src/app/shared/components/e-signature';
import { insureForm } from '../../interfaces/insure-form/forgot-password-form.interface';

@Component({
  selector: 'app-insurance-full',
  standalone: true,
  imports: [CommonModule, ESignatureComponent, ReactiveFormsModule],
  templateUrl: './insurance-full.component.html',
  styleUrl: './insurance-full.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InsuranceFullComponent {
  private readonly langaugeService: LangaugeService = inject(LangaugeService);
  readonly insureForm: FormGroup<insureForm>;
  readonly PROVINCE = PROVINCE;

  currentIndex: number = 0;
  language: string = this.langaugeService.language;

  constructor() {
    const fb = inject(FormBuilder);

    this.insureForm = fb.group<insureForm>({
      personalId: fb.control(null, [Validators.required, Validators.maxLength(13)]),
      name: fb.control(null, Validators.required),
      surname: fb.control(null, Validators.required),
      email: fb.control(null, Validators.required),
      phoneNumber: fb.control(null, [Validators.required, Validators.maxLength(10)]),
      dateOfBirth: fb.control(null, Validators.required),
      gender: fb.control(null, Validators.required),
      province: fb.control(null, Validators.required),
      eSign: fb.control(null, Validators.required),
    });
  }

  onSign(signImg: string) {
    this.insureForm.get('eSign')?.setValue(signImg);
  }

  submit() {}
}
