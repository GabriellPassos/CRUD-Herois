import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroiCadastrarEditarRoutingModule } from './heroi-cadastrar-editar-routing.module';
import { HeroiCadastrarEditarComponent } from './heroi-cadastrar-editar/heroi-cadastrar-editar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    HeroiCadastrarEditarComponent
  ],
  imports: [
    CommonModule,
    HeroiCadastrarEditarRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
  ]
})
export class HeroiCadastrarEditarModule { }
