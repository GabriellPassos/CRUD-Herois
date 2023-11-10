import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroiListarRoutingModule } from './heroi-listar-routing.module';
import { HeroiListarComponent } from './heroi-listar/heroi-listar.component';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    HeroiListarComponent
  ],
  imports: [
    CommonModule,
    HeroiListarRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,

  ]
})
export class HeroiListarModule { }
