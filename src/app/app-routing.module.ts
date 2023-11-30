import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/dashboard/home/home.component';
import { ExplorerComponent } from './pages/ventas/explorer/explorer.component';

const routes: Routes = [
  { path: 'dashboard', component: HomeComponent },
  { path: 'ventas', component: ExplorerComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: HomeComponent } //crear not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }