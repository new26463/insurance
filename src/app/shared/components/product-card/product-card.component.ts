import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  private readonly _router: Router = inject(Router);

  @Input() item!: number;
  // @Output() onSelect: EventEmitter<number> = new EventEmitter();

  onSelected() {
    this._router.navigate([Route.productPage], { queryParams: { plan: this.item } });
    // this.onSelect.emit(this.item);
  }
}
