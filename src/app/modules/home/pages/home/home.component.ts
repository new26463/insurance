import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LangaugeService } from 'src/app/core/services/langauge/langauge.service';
import { NavbarComponent } from 'src/app/shared/components/navbar';
import { ProductCardComponent } from 'src/app/shared/components/product-card/product-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, NavbarComponent, ProductCardComponent, RouterModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  private readonly _langaugeService: LangaugeService = inject(LangaugeService);

  lists: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor() {}

  ngOnInit() {}

  protected changeLang(lang: string) {
    this._langaugeService.updateLanguage(lang);
  }
}
