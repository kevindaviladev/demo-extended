import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProductsComponent } from './products/products.component';
import { ReportsComponent } from './reports/reports.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'products', component: ProductsComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'users', component: UsersComponent },
      { path: '**', redirectTo: 'products', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
