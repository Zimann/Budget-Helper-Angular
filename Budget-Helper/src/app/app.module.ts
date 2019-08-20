import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoHeaderComponent } from './info-header/info-header.component';
import { InputSectionComponent } from './input-section/input-section.component';
import { MainOverviewComponent } from './main-overview/main-overview.component';
import { IncomeOverviewComponent } from './main-overview/income-overview/income-overview.component';
import { ExpenseOverviewComponent } from './main-overview/expense-overview/expense-overview.component';
import {ExpenseItemComponent} from './main-overview/expense-overview/expense-item/expense-item.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoHeaderComponent,
    InputSectionComponent,
    MainOverviewComponent,
    IncomeOverviewComponent,
    ExpenseOverviewComponent,
    ExpenseItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
