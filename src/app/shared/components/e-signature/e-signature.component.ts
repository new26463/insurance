import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
  afterNextRender,
} from '@angular/core';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-e-signature',
  standalone: true,
  imports: [],
  templateUrl: './e-signature.component.html',
  styleUrl: './e-signature.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ESignatureComponent {
  @ViewChild('canvas') canvas!: ElementRef;
  @Output() onSubmit: EventEmitter<string> = new EventEmitter();

  signatureNeeded: boolean = true;
  signaturePad!: SignaturePad;
  signatureImg!: string;

  constructor() {
    afterNextRender(() => {
      this.signaturePad = new SignaturePad(this.canvas.nativeElement);
    });
  }

  // ngAfterViewInit(): void {
  //   afterRender(() => {
  //     this.signaturePad = new SignaturePad(this.canvas.nativeElement);
  //   });
  // }

  startDrawing(event: Event) {
    // works in device not in browser
  }

  moved(event: Event) {
    // works in device not in browser
  }

  savePad() {
    const base64Data = this.signaturePad.toDataURL();
    this.signatureImg = base64Data;
    this.signatureNeeded = this.signaturePad.isEmpty();

    if (!this.signatureNeeded) {
      this.signatureNeeded = false;
      this.onSubmit.emit(base64Data);
    }
  }

  clearPad() {
    this.signatureNeeded = true;
    this.signaturePad.clear();
  }
}
