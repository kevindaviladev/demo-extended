import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { ProductsComponent } from './pages/dashboard/products/products.component';
import { ReportsComponent } from './pages/dashboard/reports/reports.component';
import { UsersComponent } from './pages/dashboard/users/users.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },

  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    children: [
      { path: 'products', component: ProductsComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'users', component: UsersComponent },
      { path: '**', redirectTo: 'products', pathMatch: 'full' },
    ],
  },
];
