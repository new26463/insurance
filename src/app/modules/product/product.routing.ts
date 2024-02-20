import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/product/product.component').then(m => m.ProductComponent),
  },
];

export const ProductRoutes = RouterModule.forChild(routes);
