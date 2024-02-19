import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { LangaugeService } from 'src/app/core/services/langauge/langauge.service';
import { NavbarComponent } from 'src/app/shared/components/navbar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, NavbarComponent, InputTextModule, FormsModule, ButtonModule, RouterModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  private readonly _langaugeService: LangaugeService = inject(LangaugeService);

  value!: string;

  constructor() {}

  ngOnInit() {}

  protected changeLang(lang: string) {
    this._langaugeService.updateLanguage(lang);
  }
}
