import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { CardsComponent } from './cards/cards.component';
import { LoadingComponent } from './loading/loading.component';
import { BarChartComponentComponent } from './bar-chart-component/bar-chart-component.component';




@NgModule({
  declarations: [
    TitleComponent,
    CardsComponent,
    LoadingComponent,
    BarChartComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleComponent,
    CardsComponent,
    LoadingComponent,
    BarChartComponentComponent
  ]
})
export class SharedModule { }
