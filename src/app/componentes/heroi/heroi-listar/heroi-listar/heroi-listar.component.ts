import { Component, OnInit } from '@angular/core';
import { HeroiService } from '../../heroi.service';
import { Observable } from 'rxjs';
import { Heroi } from '../../heroi.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroi-listar',
  templateUrl: './heroi-listar.component.html',
  styleUrls: ['./heroi-listar.component.css']
})
export class HeroiListarComponent implements OnInit {
  herois$?: Observable<Heroi[]>;
  colunasTabela = ['id', 'nome', 'heroi', 'poder', 'altura', 'peso', 'aniversario', 'editar', 'remover']
  constructor(private heroiService: HeroiService) { }
  ngOnInit(): void {
    this.listarHerois();
  }
  listarHerois() {
    this.herois$ = this.heroiService.listar();
  }
  remover(heroi: Heroi) {
    if (confirm(`Deseja deletar o herói ${heroi.nomeHeroi}`)) {
      this.heroiService.remover(heroi).subscribe(
        res => {
          window.location.reload();
        },
        error => {
          alert("Erro ao excluir." + JSON.stringify(error));
        }
      )
    }
  }
}
