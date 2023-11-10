import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {
    path: "", 
    loadChildren:() => import('./componentes/heroi/heroi-listar/heroi-listar.module').then(modulo => modulo.HeroiListarModule)
  },
  {
    path:"herois/cadastrar",
    loadChildren:() => import('./componentes/heroi/heroi-cadastrar-editar/heroi-cadastrar-editar.module').then(modulo => modulo.HeroiCadastrarEditarModule)
  },
  {
    path:"herois/editar/:id",
    loadChildren:() => import('./componentes/heroi/heroi-cadastrar-editar/heroi-cadastrar-editar.module').then(modulo => modulo.HeroiCadastrarEditarModule)
  }
]
@NgModule({
  exports:[RouterModule],
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
