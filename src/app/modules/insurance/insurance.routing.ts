import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/insurance/insurance.component').then(m => m.InsuranceComponent),
  },
  {
    path: 'full',
    loadComponent: () => import('./pages/insurance-full/insurance-full.component').then(m => m.InsuranceFullComponent),
  },
];

export const InsuranceRoutes = RouterModule.forChild(routes);
