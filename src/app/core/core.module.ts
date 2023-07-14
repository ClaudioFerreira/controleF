import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoreComponent } from './container/core.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContasRecorrentesComponent } from './pages/contas-recorrentes/contas-recorrentes.component';

@NgModule({
  declarations: [CoreComponent, DashboardComponent, ContasRecorrentesComponent],
  imports: [CommonModule, CoreRoutingModule, SharedModule],
})
export class CoredModule {}
