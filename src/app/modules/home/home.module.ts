import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutes } from './home.routing';

@NgModule({
  imports: [CommonModule, HomeRoutes],
})
export class HomeModule {}
