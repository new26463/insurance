import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, afterNextRender, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { LangaugeService } from 'src/app/core/services/langauge/langauge.service';
import { PROVINCE } from 'src/app/data/constants';
import { ESignatureComponent } from 'src/app/shared/components/e-signature';
import { insureForm } from '../../interfaces/insure-form/forgot-password-form.interface';

@Component({
  selector: 'app-insurance-full',
  standalone: true,
  imports: [CommonModule, ESignatureComponent, ReactiveFormsModule, MatInputModule, MatSelectModule],
  templateUrl: './insurance-full.component.html',
  styleUrl: './insurance-full.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InsuranceFullComponent {
  private readonly langaugeService: LangaugeService = inject(LangaugeService);
  readonly insureForm: FormGroup<insureForm>;
  readonly PROVINCE = PROVINCE;

  currentIndex: number = 0;
  language!: string;

  constructor() {
    afterNextRender(() => {
      this.language = this.langaugeService?.language;
    });

    const fb = inject(FormBuilder);

    this.insureForm = fb.group<insureForm>({
      personalId: fb.control(null, [Validators.required, Validators.minLength(13), Validators.maxLength(13)]),
      name: fb.control(null, Validators.required),
      surname: fb.control(null, Validators.required),
      email: fb.control(null, [Validators.required, Validators.email]),
      phoneNumber: fb.control(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      dateOfBirth: fb.control(null),
      gender: fb.control(null),
      province: fb.control(null, Validators.required),
      eSign: fb.control(null, Validators.required),
    });
  }

  onSign(signImg: string) {
    this.insureForm.get('eSign')?.setValue(signImg);
  }

  submit() {
    const { insureForm } = this;
    console.log(insureForm);

    if (insureForm.invalid) {
      insureForm.markAllAsTouched();
      return;
    }

    console.log(this.insureForm.value);
  }
}
