import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroiListarComponent } from './heroi-listar/heroi-listar.component';

const routes: Routes = [
  {path: "", component:HeroiListarComponent}
]
@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class HeroiListarRoutingModule { }
