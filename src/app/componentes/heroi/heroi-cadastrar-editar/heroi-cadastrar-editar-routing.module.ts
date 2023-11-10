import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroiCadastrarEditarComponent } from './heroi-cadastrar-editar/heroi-cadastrar-editar.component';
import { HeroiResolverService } from './heroi-resolver.service';

const routes: Routes = [
  {
    path:"", 
    component:HeroiCadastrarEditarComponent,
    resolve:{
      heroi: HeroiResolverService
    }

  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroiCadastrarEditarRoutingModule { }
