import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageCoinlayerComponent } from './page-coinlayer/page-coinlayer.component';
import { PageDepositcardComponent } from './page-depositcard/page-depositcard.component';
import { PageDepositsComponent } from './page-deposits/page-deposits.component';
import { PageHumoComponent } from './page-humo/page-humo.component';
import { PageInteractiveComponent } from './page-interactive/page-interactive.component';
import { PageLoansComponent } from './page-loans/page-loans.component';
import { PageNewsComponent } from './page-news/page-news.component';
import { PageSettlementSheetComponent } from './page-settlement-sheet/page-settlement-sheet.component';
import { PageSmartvisaComponent } from './page-smartvisa/page-smartvisa.component';
import { PageVisaComponent } from './page-visa/page-visa.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'page-deposits', component: PageDepositsComponent },
  { path: 'page-loans', component: PageLoansComponent },
  { path: 'page-smartvisa', component: PageSmartvisaComponent },
  { path: 'page-humo', component: PageHumoComponent },
  { path: 'page-visa', component: PageVisaComponent },
  { path: 'page-depositcard', component: PageDepositcardComponent },
  { path: 'page-settlement-sheet', component: PageSettlementSheetComponent },
  { path: 'page-interactive', component: PageInteractiveComponent },
  { path: 'page-news', component: PageNewsComponent },
  { path: 'page-coinlayer', component: PageCoinlayerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
