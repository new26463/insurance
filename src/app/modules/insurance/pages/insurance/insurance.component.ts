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
  selector: 'app-insurance',
  standalone: true,
  imports: [CommonModule, ESignatureComponent, ReactiveFormsModule, MatInputModule, MatSelectModule],
  templateUrl: './insurance.component.html',
  styleUrl: './insurance.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InsuranceComponent {
  private readonly _langaugeService: LangaugeService = inject(LangaugeService);
  readonly insureForm: FormGroup<insureForm>;
  readonly PROVINCE = PROVINCE;

  currentIndex: number = 0;
  language!: string;

  constructor() {
    afterNextRender(() => {
      this.language = this._langaugeService?.language;
    });
    const fb = inject(FormBuilder);

    this.insureForm = fb.group<insureForm>({
      personalId: fb.control(null, [Validators.required, Validators.maxLength(13)]),
      name: fb.control(null, Validators.required),
      surname: fb.control(null, Validators.required),
      email: fb.control(null, Validators.required),
      phoneNumber: fb.control(null, [Validators.required, Validators.maxLength(10)]),
      dateOfBirth: fb.control(null),
      gender: fb.control(null),
      province: fb.control(null, Validators.required),
      eSign: fb.control(null, Validators.required),
    });
  }

  onNext(nextIndex?: number) {
    let isPass: Boolean = false;

    switch (this.currentIndex) {
      case 0:
        isPass = this.insureForm.get('name')!.valid && this.insureForm.get('surname')!.valid;
        if (!isPass) {
          this.insureForm.get('name')!.markAsTouched();
          this.insureForm.get('surname')!.markAsTouched();
        }
        break;
      case 1:
        isPass = this.insureForm.get('province')!.valid;
        if (!isPass) {
          this.insureForm.get('province')!.markAsTouched();
        }
        break;
      case 2:
        isPass = this.insureForm.get('phoneNumber')!.valid && this.insureForm.get('phoneNumber')!.value?.length == 10;
        if (!isPass) {
          this.insureForm.get('phoneNumber')!.markAsTouched();
        }
        break;
      case 3:
        isPass = this.insureForm.get('personalId')!.valid && this.insureForm.get('personalId')!.value?.length == 13;
        if (!isPass) {
          this.insureForm.get('personalId')!.markAsTouched();
        }
        break;
      case 4:
        isPass = this.insureForm.get('email')!.valid;
        if (!isPass) {
          this.insureForm.get('email')!.markAsTouched();
        }
        break;
      case 5:
        isPass = this.insureForm.get('eSign')!.valid;
        console.log(this.insureForm.value);

        break;
    }

    if (isPass) {
      this.currentIndex = nextIndex ?? this.currentIndex + 1;
    } else {
      console.log('ตรวจสอบข้อมูลอีกครั้ง');
    }
  }

  goToIndex(index: number) {
    if (index === 4) this.insureForm.get('eSign')!.reset();

    this.currentIndex = index;
  }

  onSign(signImg: string) {
    this.insureForm.get('eSign')?.setValue(signImg);
  }

  submit() {}
}
