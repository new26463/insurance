import { FormControl } from '@angular/forms';

export interface insureForm {
  personalId: FormControl<string | null>;
  name: FormControl<string | null>;
  surname: FormControl<string | null>;
  email: FormControl<string | null>;
  phoneNumber: FormControl<string | null>;
  dateOfBirth: FormControl<Date | null>;
  gender: FormControl<'male' | 'female' | null>;
  province: FormControl<string | null>;
  eSign: FormControl<string | null>;
}
