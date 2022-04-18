import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageDepositsComponent } from './page-deposits/page-deposits.component';
import { PageLoansComponent } from './page-loans/page-loans.component';
import { PageSmartvisaComponent } from './page-smartvisa/page-smartvisa.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'page-deposits', component: PageDepositsComponent },
  { path: 'page-loans', component: PageLoansComponent },
  { path: 'page-smartvisa', component: PageSmartvisaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
