import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'footer',
  imports: [ButtonModule],
  standalone: true,
  template: `
    <div class="flex w-full justify-content-end mt-3">
      <p-button
        (click)="closeDialog({ buttonType: 'Cancel', summary: 'No Product Selected' })"
        type="button"
        label="Cancel"
        icon="pi pi-times"
      ></p-button>
    </div>
  `,
})
export class PdpaFooter {
  constructor(public ref: DynamicDialogRef) {}

  closeDialog(data: any) {
    this.ref.close(data);
  }
}
